// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12;

import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@moraswap/v2-core/contracts/interfaces/IMoraswapV2ERC20.sol";
import "@moraswap/v2-core/contracts/interfaces/IMoraswapV2Pair.sol";
import "@moraswap/v2-core/contracts/interfaces/IMoraswapV2Factory.sol";

contract MoraMakerV2 is Ownable {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    IMoraswapV2Factory public immutable factory;
    address public immutable xmora;
    address private immutable mora;
    address private immutable usdc;
    address private immutable weth;
    uint256 public boughtUsdc;
    uint256 public boughtMora;

    address public treasury;
    uint256 public moraBuybackPercent; // 1000 <=> 100%

    mapping(address => address) internal _moraBridges;
    mapping(address => address) internal _usdcBridges;

    event LogMoraBridgeSet(address indexed token, address indexed bridge);
    event LogUsdcBridgeSet(address indexed token, address indexed bridge);
    event LogTreasurySet(address indexed treasury);
    event LogMoraBuybackPercentSet(uint256 percent);
    event LogConvertSingleToken(
        address indexed server,
        address indexed token,
        uint256 amount,
        uint256 amountMORA,
        uint256 amountUSDC
    );
    event LogConvertToMORA(
        address indexed server,
        address indexed token0,
        address indexed token1,
        uint256 amount0,
        uint256 amount1,
        uint256 amount
    );
    event LogConvertToUSDC(
        address indexed server,
        address indexed token0,
        address indexed token1,
        uint256 amount0,
        uint256 amount1,
        uint256 amount
    );

    constructor(
        address _factory,
        address _xmora,
        address _mora,
        address _usdc,
        address _weth,
        address _treasury
    ) public {
        factory = IMoraswapV2Factory(_factory);
        xmora = _xmora;
        mora = _mora;
        usdc = _usdc;
        weth = _weth;
        treasury = _treasury;
        moraBuybackPercent = 800; // default: 80%
    }

    receive() external payable {
        assert(msg.sender == weth); // only accept ETH via fallback from the WETH contract
    }

    function moraBridgeFor(address token) public view returns (address bridge) {
        bridge = _moraBridges[token];
        if (bridge == address(0)) {
            bridge = weth;
        }
    }

    function usdcBridgeFor(address token) public view returns (address bridge) {
        bridge = _usdcBridges[token];
        if (bridge == address(0)) {
            bridge = weth;
        }
    }

    function setMoraBridge(address token, address bridge) external onlyOwner {
        require(
            token != mora && token != weth && token != bridge,
            "MoraMaker: Invalid bridge"
        );

        _moraBridges[token] = bridge;
        emit LogMoraBridgeSet(token, bridge);
    }

    function setUsdcBridge(address token, address bridge) external onlyOwner {
        require(
            token != mora && token != weth && token != bridge,
            "MoraMaker: Invalid bridge"
        );

        _usdcBridges[token] = bridge;
        emit LogUsdcBridgeSet(token, bridge);
    }

    function setTreasury(address _treasury) external onlyOwner {
        treasury = _treasury;
        emit LogTreasurySet(_treasury);
    }

    function setMoraBuybackPercent(uint256 _moraBuybackPercent) external onlyOwner {
        require(
            _moraBuybackPercent <= 1000,
            "MoraMaker: Invalid percent"
        );

        moraBuybackPercent = _moraBuybackPercent;
        emit LogMoraBuybackPercentSet(_moraBuybackPercent);
    }

    function calculate(uint256 _amount) internal view returns (uint256 amountToMora, uint256 amountToUsdc) {
        amountToMora = _amount.mul(moraBuybackPercent).div(1000);
        amountToUsdc = _amount.sub(amountToMora);
    }

    function convertSingleToken(address token) external {
        uint256 amount = IERC20(token).balanceOf(address(this));
        (uint256 amountToMora, uint256 amountToUsdc) = calculate(amount);
        emit LogConvertSingleToken(
            msg.sender,
            token,
            amount,
            _toMORA(token, amountToMora),
            _toUSDC(token, amountToUsdc)
        );
    }

    function convertMultipleSingleToken(
        address[] calldata token
    ) external {
        uint256 len = token.length;
        for (uint256 i = 0; i < len; i++) {
            uint256 amount = IERC20(token[i]).balanceOf(address(this));
            (uint256 amountToMora, uint256 amountToUsdc) = calculate(amount);
            emit LogConvertSingleToken(
                msg.sender,
                token[i],
                amount,
                _toMORA(token[i], amountToMora),
                _toUSDC(token[i], amountToUsdc)
            );
        }
    }

    function convert(address token0, address token1) external {
        _convert(token0, token1);
    }

    function convertMultiple(
        address[] calldata token0,
        address[] calldata token1
    ) external {
        uint256 len = token0.length;
        for (uint256 i = 0; i < len; i++) {
            _convert(token0[i], token1[i]);
        }
    }

    function _convert(address token0, address token1) internal {
        IMoraswapV2Pair pair = IMoraswapV2Pair(factory.getPair(token0, token1));
        require(address(pair) != address(0), "MoraMaker: Invalid pair");
        IERC20(address(pair)).safeTransfer(
            address(pair),
            pair.balanceOf(address(this))
        );
        (uint256 amount0, uint256 amount1) = pair.burn(address(this));
        if (token0 != pair.token0()) {
            (amount0, amount1) = (amount1, amount0);
        }
        (uint256 amountToMora0, uint256 amountToUsdc0) = calculate(amount0);
        (uint256 amountToMora1, uint256 amountToUsdc1) = calculate(amount1);

        uint256 moraOut = _convertToMORAStep(token0, token1, amountToMora0, amountToMora1);
        boughtMora = boughtMora.add(moraOut);
        emit LogConvertToMORA(
            msg.sender,
            token0,
            token1,
            amountToMora0,
            amountToMora1,
            moraOut
        );

        uint256 usdcOut = _convertToUSDCStep(token0, token1, amountToUsdc0, amountToUsdc1);
        boughtUsdc = boughtUsdc.add(usdcOut);
        emit LogConvertToUSDC(
            msg.sender,
            token0,
            token1,
            amountToUsdc0,
            amountToUsdc1,
            usdcOut
        );
    }

    function _convertToMORAStep(address token0, address token1, uint256 amount0, uint256 amount1) internal returns(uint256 moraOut) {
        if (token0 == token1) {
            uint256 amount = amount0.add(amount1);
            if (token0 == mora) {
                IERC20(mora).safeTransfer(xmora, amount);
                moraOut = amount;
            } else if (token0 == weth) {
                moraOut = _toMORA(weth, amount);
            } else {
                address bridge = moraBridgeFor(token0);
                amount = _swap(token0, bridge, amount, address(this));
                moraOut = _convertToMORAStep(bridge, bridge, amount, 0);
            }
        } else if (token0 == mora) { // eg. MORA - NEON
            IERC20(mora).safeTransfer(xmora, amount0);
            moraOut = _toMORA(token1, amount1).add(amount0);
        } else if (token1 == mora) { // eg. USDC- MORA
            IERC20(mora).safeTransfer(xmora, amount1);
            moraOut = _toMORA(token0, amount0).add(amount1);
        } else if (token0 == weth) { // eg. NEON - USDC
            moraOut = _toMORA(weth, _swap(token1, weth, amount1, address(this)).add(amount0));
        } else if (token1 == weth) { // eg. USDC - NEON
            moraOut = _toMORA(weth, _swap(token0, weth, amount0, address(this)).add(amount1));
        } else { // eg. WSOL - USDC
            address bridge0 = moraBridgeFor(token0);
            address bridge1 = moraBridgeFor(token1);
            if (bridge0 == token1) {
                moraOut = _convertToMORAStep(bridge0, token1,
                    _swap(token0, bridge0, amount0, address(this)),
                    amount1
                );
            } else if (bridge1 == token0) {
                moraOut = _convertToMORAStep(token0, bridge1,
                    amount0,
                    _swap(token1, bridge1, amount1, address(this))
                );
            } else {
                moraOut = _convertToMORAStep(bridge0, bridge1,
                    _swap(token0, bridge0, amount0, address(this)),
                    _swap(token1, bridge1, amount1, address(this))
                );
            }
        }
    }

    function _convertToUSDCStep(address token0, address token1, uint256 amount0, uint256 amount1) internal returns(uint256 usdcOut) {
        if (token0 == token1) {
            uint256 amount = amount0.add(amount1);
            if (token0 == usdc) {
                IERC20(usdc).safeTransfer(treasury, amount);
                usdcOut = amount;
            } else if (token0 == weth) {
                usdcOut = _toUSDC(weth, amount);
            } else {
                address bridge = usdcBridgeFor(token0);
                amount = _swap(token0, bridge, amount, address(this));
                usdcOut = _convertToUSDCStep(bridge, bridge, amount, 0);
            }
        } else if (token0 == usdc) { // eg. USDC - NEON
            IERC20(usdc).safeTransfer(treasury, amount0);
            usdcOut = _toUSDC(token1, amount1).add(amount0);
        } else if (token1 == usdc) { // eg. BNB - USDC
            IERC20(usdc).safeTransfer(treasury, amount1);
            usdcOut = _toUSDC(token0, amount0).add(amount1);
        } else if (token0 == weth) { // eg. NEON - BNB
            usdcOut = _toUSDC(weth, _swap(token1, weth, amount1, address(this)).add(amount0));
        } else if (token1 == weth) { // eg. BNB - NEON
            usdcOut = _toUSDC(weth, _swap(token0, weth, amount0, address(this)).add(amount1));
        } else { // eg. WSOL - BNB
            address bridge0 = usdcBridgeFor(token0);
            address bridge1 = usdcBridgeFor(token1);
            if (bridge0 == token1) {
                usdcOut = _convertToUSDCStep(bridge0, token1,
                    _swap(token0, bridge0, amount0, address(this)),
                    amount1
                );
            } else if (bridge1 == token0) {
                usdcOut = _convertToUSDCStep(token0, bridge1,
                    amount0,
                    _swap(token1, bridge1, amount1, address(this))
                );
            } else {
                usdcOut = _convertToUSDCStep(bridge0, bridge1,
                    _swap(token0, bridge0, amount0, address(this)),
                    _swap(token1, bridge1, amount1, address(this))
                );
            }
        }
    }

    function _swap(address fromToken, address toToken, uint256 amountIn, address to) internal returns (uint256 amountOut) {
        IMoraswapV2Pair pair = IMoraswapV2Pair(factory.getPair(fromToken, toToken));
        require(address(pair) != address(0), "MoraMaker: Cannot convert");

        (uint256 reserve0, uint256 reserve1,) = pair.getReserves();
        uint256 amountInWithFee = amountIn.mul(997);
        if (fromToken == pair.token0()) {
            amountOut = amountIn.mul(997).mul(reserve1) / reserve0.mul(1000).add(amountInWithFee);
            IERC20(fromToken).safeTransfer(address(pair), amountIn);
            pair.swap(0, amountOut, to, new bytes(0));
        } else {
            amountOut = amountIn.mul(997).mul(reserve0) / reserve1.mul(1000).add(amountInWithFee);
            IERC20(fromToken).safeTransfer(address(pair), amountIn);
            pair.swap(amountOut, 0, to, new bytes(0));
        }
    }

    function _toMORA(address token, uint256 amountIn) internal returns(uint256 amountOut) {
        amountOut = _swap(token, mora, amountIn, xmora);
    }

    function _toUSDC(address token, uint256 amountIn) internal returns(uint256 amountOut) {
        amountOut = _swap(token, usdc, amountIn, treasury);
    }
}