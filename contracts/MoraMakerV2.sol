// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/utils/EnumerableSet.sol";
import "@moraswap/v2-core/contracts/interfaces/IMoraswapV2Pair.sol";
import "@moraswap/v2-core/contracts/interfaces/IMoraswapV2Factory.sol";
import "./libraries/MoraswapV2Library.sol";

contract MoraMakerV2 is Ownable {
    using EnumerableSet for EnumerableSet.AddressSet;
    using SafeERC20 for IERC20;
    using SafeMath for uint256;

    IMoraswapV2Factory public immutable factory;

    address public immutable bar; // sMora
    address private immutable weth9; // WNEON
    address public tokenTo; // WSOL
    uint256 public boughtTokenTo;
    uint256 public devCut = 0; // 10_000 = 100%
    address public devAddr;

    EnumerableSet.AddressSet private _isAuth;

    modifier onlyAuth() {
        require(_isAuth.contains(msg.sender), "MoraMakerV2: FORBIDDEN");
        _;
    }

    mapping(address => address) internal _bridges;

    event AddAuthorizedAddress(address indexed _addr);
    event RemoveAuthorizedAddress(address indexed _addr);
    event SetDevAddr(address _addr);
    event SetDevCut(uint256 _amount);
    event SetTokenTo(address _tokenTo);
    event LogBridgeSet(address indexed token, address indexed oldBridge, address indexed bridge);
    event LogConvert(
        address indexed server,
        address indexed token0,
        address indexed token1,
        uint256 amount0,
        uint256 amount1,
        uint256 amountTOKEN
    );

    constructor(
        address _factory,
        address _bar,
        address _tokenTo,
        address _weth9
    ) public {
        require(_factory != address(0), "MoraMakerV2: ZERO_ADDRESS0");
        require(_bar != address(0), "MoraMakerV2: ZERO_ADDRESS1");
        require(_tokenTo != address(0), "MoraMakerV2: ZERO_ADDRESS2");
        require(_weth9 != address(0), "MoraMakerV2: ZERO_ADDRESS3");
        factory = IMoraswapV2Factory(_factory);
        bar = _bar;
        tokenTo = _tokenTo;
        weth9 = _weth9;
        devAddr = msg.sender;
        _isAuth.add(msg.sender);
    }

    function addAuth(address _auth) external onlyOwner {
        require(_isAuth.add(_auth), "MoraMakerV2: ALREADY_AUTHORIZED");
        emit AddAuthorizedAddress(_auth);
    }

    function removeAuth(address _auth) external onlyOwner {
        require(_isAuth.remove(_auth), "MoraMakerV2: NOT_AUTHORIZED");
        emit RemoveAuthorizedAddress(_auth);
    }

    function getAuth(uint256 index) external view returns (address) {
        return _isAuth.at(index);
    }

    function lenAuth() external view returns (uint256) {
        return _isAuth.length();
    }

    function setBridge(address token, address bridge) external onlyAuth {
        require(token != tokenTo && token != weth9 && token != bridge, "MoraMakerV2: INVALID_BRIDGE");

        address oldBridge = _bridges[token];
        _bridges[token] = bridge;
        emit LogBridgeSet(token, oldBridge, bridge);
    }

    function setDevCut(uint256 _amount) external onlyOwner {
        require(_amount <= 5000, "setDevCut: CUT_TOO_HIGH");
        devCut = _amount;

        emit SetDevCut(_amount);
    }

    function setDevAddr(address _addr) external onlyOwner {
        require(_addr != address(0), "setDevAddr, ZERO_ADDRESS");
        devAddr = _addr;

        emit SetDevAddr(_addr);
    }

    function setTokenToAddress(address _tokenTo) external onlyOwner {
        require(_tokenTo != address(0), "setTokenToAddress, ZERO_ADDRESS");
        tokenTo = _tokenTo;

        emit SetTokenTo(_tokenTo);
    }

    function bridgeFor(address token) public view returns (address bridge) {
        bridge = _bridges[token];
        if (bridge == address(0)) {
            bridge = weth9;
        }
    }

    modifier onlyEOA() {
        require(msg.sender == tx.origin, "MoraMakerV2: MUST_USE_EOA");
        _;
    }

    function convert(
        address token0,
        address token1,
        uint256 slippage
    ) external onlyEOA onlyAuth {
        require(slippage < 5_000, "MoraMakerV2: TOO_HIGH_SLIPPAGE");
        _convert(token0, token1, slippage);
    }

    function convertMultiple(
        address[] calldata token0,
        address[] calldata token1,
        uint256 slippage
    ) external onlyEOA onlyAuth {
        // TODO: This can be optimized a fair bit, but this is safer and simpler for now
        require(slippage < 5_000, "MoraMakerV2: TOO_HIGH_SLIPPAGE");
        require(token0.length == token1.length, "MoraMakerV2: BAD_ARRAYS_LENGTH");

        uint256 len = token0.length;
        for (uint256 i = 0; i < len; i++) {
            _convert(token0[i], token1[i], slippage);
        }
    }

    function _convert(
        address token0,
        address token1,
        uint256 slippage
    ) internal {
        uint256 amount0;
        uint256 amount1;

        // handle case where non-LP tokens need to be converted
        if (token0 == token1) {
            amount0 = IERC20(token0).balanceOf(address(this));
            amount1 = 0;
        } else {
            IMoraswapV2Pair pair = IMoraswapV2Pair(factory.getPair(token0, token1));
            require(address(pair) != address(0), "MoraMakerV2: INVALID_PAIR");

            IERC20(address(pair)).safeTransfer(address(pair), pair.balanceOf(address(this)));

            // take balance of tokens in this contract before burning the pair, incase there are already some here
            uint256 tok0bal = IERC20(token0).balanceOf(address(this));
            uint256 tok1bal = IERC20(token1).balanceOf(address(this));

            pair.burn(address(this));

            // subtract old balance of tokens from new balance
            // the return values of pair.burn cant be trusted due to transfer tax tokens
            amount0 = IERC20(token0).balanceOf(address(this)).sub(tok0bal);
            amount1 = IERC20(token1).balanceOf(address(this)).sub(tok1bal);
        }

        uint256 tokenOut = _convertStep(token0, token1, amount0, amount1, slippage);
        boughtTokenTo += tokenOut;
        emit LogConvert(
            msg.sender,
            token0,
            token1,
            amount0,
            amount1,
            tokenOut
        );
    }

    function _convertStep(
        address token0,
        address token1,
        uint256 amount0,
        uint256 amount1,
        uint256 slippage
    ) internal returns (uint256 tokenOut) {
        // Interactions
        if (token0 == token1) {
            uint256 amount = amount0.add(amount1);
            if (token0 == tokenTo) {
                IERC20(tokenTo).safeTransfer(bar, amount);
                tokenOut = amount;
            } else if (token0 == weth9) {
                tokenOut = _toToken(weth9, amount, slippage);
            } else {
                address bridge = bridgeFor(token0);
                amount = _swap(token0, bridge, amount, address(this), slippage);
                tokenOut = _convertStep(bridge, bridge, amount, 0, slippage);
            }
        } else if (token0 == tokenTo) {
            // eg. TOKEN - WETH9
            IERC20(tokenTo).safeTransfer(bar, amount0);
            tokenOut = _toToken(token1, amount1, slippage).add(amount0);
        } else if (token1 == tokenTo) {
            // eg. USDT - TOKEN
            IERC20(tokenTo).safeTransfer(bar, amount1);
            tokenOut = _toToken(token0, amount0, slippage).add(amount1);
        } else if (token0 == weth9) {
            // eg. WETH9 - USDC
            tokenOut = _toToken(weth9, _swap(token1, weth9, amount1, address(this), slippage).add(amount0), slippage);
        } else if (token1 == weth9) {
            // eg. USDT - WEH9
            tokenOut = _toToken(weth9, _swap(token0, weth9, amount0, address(this), slippage).add(amount1), slippage);
        } else {
            // eg. FRM - USDT
            address bridge0 = bridgeFor(token0);
            address bridge1 = bridgeFor(token1);
            if (bridge0 == token1) {
                // eg. FRM - USDT - and bridgeFor(FRM) = USDT
                tokenOut = _convertStep(
                    bridge0,
                    token1,
                    _swap(token0, bridge0, amount0, address(this), slippage),
                    amount1,
                    slippage
                );
            } else if (bridge1 == token0) {
                // eg. WBTC - FRM - and bridgeFor(FRM) = WBTC
                tokenOut = _convertStep(
                    token0,
                    bridge1,
                    amount0,
                    _swap(token1, bridge1, amount1, address(this), slippage),
                    slippage
                );
            } else {
                tokenOut = _convertStep(
                    bridge0,
                    bridge1, // eg. USDT - FRM - and bridgeFor(FRM) = WBTC
                    _swap(token0, bridge0, amount0, address(this), slippage),
                    _swap(token1, bridge1, amount1, address(this), slippage),
                    slippage
                );
            }
        }
    }

    function _swap(
        address fromToken,
        address toToken,
        uint256 amountIn,
        address to,
        uint256 slippage
    ) internal returns (uint256 amountOut) {
        // Checks
        IMoraswapV2Pair pair = IMoraswapV2Pair(factory.getPair(fromToken, toToken));
        require(address(pair) != address(0), "MoraMakerV2: CANNOT_CONVERT");

        (uint256 reserve0, uint256 reserve1, ) = pair.getReserves();
        (uint256 reserveInput, uint256 reserveOutput) = fromToken == pair.token0()
            ? (reserve0, reserve1)
            : (reserve1, reserve0);
        IERC20(fromToken).safeTransfer(address(pair), amountIn);
        uint256 amountInput = IERC20(fromToken).balanceOf(address(pair)).sub(reserveInput); // calculate amount that was transferred, this accounts for transfer taxes

        amountOut = MoraswapV2Library.getAmountOut(amountInput, reserveInput, reserveOutput);

        {
            uint256 rest = uint256(10_000).sub(slippage);
            /// @dev We simulate the amount received if we did a swapIn and swapOut without updating the reserves,
            /// hence why we do rest^2, i.e. calculating the slippage twice cause we actually do two swaps.
            /// This allows us to catch if a pair has low liquidity
            require(
                MoraswapV2Library.getAmountOut(amountOut, reserveOutput, reserveInput) >=
                    amountInput.mul(rest).mul(rest).div(100_000_000),
                "MoraMakerV2: SLIPPAGE_CAUGHT"
            );
        }

        (uint256 amount0Out, uint256 amount1Out) = fromToken == pair.token0()
            ? (uint256(0), amountOut)
            : (amountOut, uint256(0));
        pair.swap(amount0Out, amount1Out, to, new bytes(0));
    }

    function _toToken(
        address token,
        uint256 amountIn,
        uint256 slippage
    ) internal returns (uint256 amountOut) {
        uint256 amount = amountIn;
        if (devCut > 0) {
            amount = amount.mul(devCut).div(10000);
            IERC20(token).safeTransfer(devAddr, amount);
            amount = amountIn.sub(amount);
        }
        amountOut = _swap(token, tokenTo, amount, bar, slippage);
    }
}