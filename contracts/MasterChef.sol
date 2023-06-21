// SPDX-License-Identifier: MIT
pragma experimental ABIEncoderV2;
pragma solidity >=0.6.12;

import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./interfaces/IRewarder.sol";
import "./Mora.sol";

contract MasterChef is Ownable, ReentrancyGuard {
    string public constant name = "MasterChef";
    using SafeMath for uint256;
    using SafeERC20 for IERC20;
    using SafeERC20 for Mora;

    struct UserInfo {
        uint256 amount;
        uint256 rewardDebt;
    }

    struct PoolInfo {
        IERC20 lpToken;
        uint256 allocPoint;
        uint256 lastRewardTime;
        uint256 accMoraPerShare;
        uint256 totalLp;
        address rewarder; // bonus other tokens
    }

    Mora public immutable mora;
    uint256 public immutable startTime;
    address public constant burnAddress = address(0x000000000000000000000000000000000000dEaD);
    uint256 public burnPercent;
    uint256 public moraPerSecond;

    PoolInfo[] public poolInfo;
    mapping (uint256 => mapping (address => UserInfo)) public userInfo;
    uint256 public totalAllocPoint;

    event SetEmissionRate(uint256 moraPerSecond);
    event SetBonusEmissionRate(uint256 indexed pid, uint256 rewardPerSecond);
    event SetPercent(uint256 burnPercent);
    event AddPool(uint256 allocPoint, address lpToken, address rewarder);
    event SetPool(uint256 indexed pid, uint256 allocPoint, address rewarder);
    event Deposit(address indexed user, uint256 indexed pid, uint256 amount);
    event Withdraw(address indexed user, uint256 indexed pid, uint256 amount);
    event EmergencyWithdraw(address indexed user, uint256 indexed pid, uint256 amount);
    event FailedToNotifyRewarder(address indexed user, uint256 indexed pid);

    constructor(
        Mora _mora,
        uint256 _moraPerSecond,
        uint256 _burnPercent,
        uint256 _startTime
    ) public {
        mora = _mora;
        moraPerSecond = _moraPerSecond;
        burnPercent = _burnPercent;
        startTime = _startTime;
    }

    function setEmissionRate(uint256 _moraPerSecond) external onlyOwner {
        updateAllPools();
        moraPerSecond = _moraPerSecond;

        emit SetEmissionRate(_moraPerSecond);
    }

    function setBonusEmissionRate(uint _pid, uint _rewardPerSecond) external onlyOwner {
        require(_pid < poolInfo.length, "setBonusEmissionRate: The pool does not exist");
        PoolInfo storage pool = poolInfo[_pid];

        updatePool(_pid);

        address rewarder = pool.rewarder;
        if (rewarder != address(0)) {
            IRewarder(rewarder).setRewardPerSecond(_rewardPerSecond);
        }

        emit SetBonusEmissionRate(_pid, _rewardPerSecond);
    }

    function setPercent(
        uint256 _burnPercent) external onlyOwner {
        require(_burnPercent < 100e18, "setPercent: Percent cannot exceed 100");
        updateAllPools();
        burnPercent = _burnPercent;

        emit SetPercent(_burnPercent);
    }

    function poolLength() external view returns (uint256) {
        return poolInfo.length;
    }

    function addPool(uint256 _allocPoint, IERC20 _lpToken, address _rewarder) external onlyOwner {
        updateAllPools();

        uint256 lastRewardTime = block.timestamp > startTime ? block.timestamp : startTime;
        totalAllocPoint = totalAllocPoint.add(_allocPoint);
        poolInfo.push(PoolInfo({
            lpToken: _lpToken,
            allocPoint: _allocPoint,
            lastRewardTime: lastRewardTime,
            accMoraPerShare: 0,
            totalLp: 0,
            rewarder: _rewarder
        }));

        emit AddPool(_allocPoint, address(_lpToken), _rewarder);
    }

    function setPool(uint256 _pid, uint256 _allocPoint, address _rewarder) external onlyOwner {
        require(_pid < poolInfo.length, "setPool: The pool does not exist");
        updateAllPools();

        totalAllocPoint = totalAllocPoint.add(_allocPoint).sub(poolInfo[_pid].allocPoint);
        poolInfo[_pid].allocPoint = _allocPoint;
        poolInfo[_pid].rewarder = _rewarder;

        emit SetPool(_pid, _allocPoint, _rewarder);
    }

    function getMultiplier(uint256 _from, uint256 _to) private pure returns (uint256) {
        return _to.sub(_from);
    }

    function pendingReward(uint256 _pid, address _user) external view returns (uint256 pendingMora, uint256 pendingBonus) {
        require(_pid < poolInfo.length, "pendingReward: The pool does not exist");
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][_user];
        uint256 accMoraPerShare = pool.accMoraPerShare;
        uint256 lpSupply = pool.totalLp;
        uint256 lastRewardTime = pool.lastRewardTime;
        if (block.timestamp > lastRewardTime && lpSupply != 0) {
            uint256 multiplier = getMultiplier(lastRewardTime, block.timestamp);
            uint256 moraReward = multiplier.mul(moraPerSecond).mul(pool.allocPoint).div(totalAllocPoint);

            ( , uint256 farmMora) = calculate(moraReward);

            accMoraPerShare = accMoraPerShare.add(farmMora.mul(1e18).div(lpSupply));
        }
        pendingMora = user.amount.mul(accMoraPerShare).div(1e18).sub(user.rewardDebt);
        address rewarder = pool.rewarder;
        if (rewarder != address(0)) {
            pendingBonus = IRewarder(rewarder).pendingReward(_user, user.amount);
        }
    }

    function updateAllPools() public {
        uint256 length = poolInfo.length;
        for (uint256 pid = 0; pid < length; pid++) {
            updatePool(pid);
        }
    }

    function updateMultiplePools(uint256[] memory pids) external {
        for (uint256 i = 0; i < pids.length; i++) {
            updatePool(pids[i]);
        }
    }

    function calculate(uint256 _reward) private view returns (uint256 burnMora, uint256 farmMora) {
        uint256 totalSupply = mora.totalSupply();
        uint256 maxSupply = mora.maxSupply();
        if (maxSupply < totalSupply.add(_reward)) {
            _reward = maxSupply.sub(totalSupply);
        }
        
        burnMora = _reward.mul(burnPercent).div(100e18);
        farmMora = _reward.sub(burnMora);
    }

    function updatePool(uint256 _pid) public {
        require(_pid < poolInfo.length, "updatePool: The pool does not exist");
        PoolInfo storage pool = poolInfo[_pid];
        uint256 lastRewardTime = pool.lastRewardTime;
        if (block.timestamp <= lastRewardTime) {
            return;
        }
        uint256 lpSupply = pool.totalLp;
        if (lpSupply == 0 || pool.allocPoint == 0) {
            pool.lastRewardTime = block.timestamp;
            return;
        }

        uint256 multiplier = getMultiplier(lastRewardTime, block.timestamp);
        uint256 moraReward = multiplier.mul(moraPerSecond).mul(pool.allocPoint).div(totalAllocPoint);

        (uint256 burnMora, uint256 farmMora) = calculate(moraReward);

        mora.mint(address(this), burnMora.add(farmMora));
        if (burnMora > 0) {
            mora.transfer(burnAddress, burnMora);
        }

        pool.accMoraPerShare = pool.accMoraPerShare.add(farmMora.mul(1e18).div(lpSupply));
        pool.lastRewardTime = block.timestamp;
    }

    function deposit(uint256 _pid, uint256 _amount) external nonReentrant {
        require(_pid < poolInfo.length, "deposit: The pool does not exist");
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];

        updatePool(_pid);
        uint256 amount = user.amount;
        uint256 accMoraPerShare = pool.accMoraPerShare;
        uint lpSupply = pool.totalLp;
        if (amount > 0) {
            uint256 pending = amount.mul(accMoraPerShare).div(1e18).sub(user.rewardDebt);
            mora.safeTransfer(address(msg.sender), pending);
        }

        if(_amount > 0) {
            pool.lpToken.safeTransferFrom(address(msg.sender), address(this), _amount);
            user.amount = amount.add(_amount);
            pool.totalLp = lpSupply.add(_amount);
        }
        
        amount = user.amount;
        address rewarder = pool.rewarder;
        if (rewarder != address(0)) {
            IRewarder(rewarder).onReward(address(msg.sender), amount);
        }
        user.rewardDebt = amount.mul(accMoraPerShare).div(1e18);

        emit Deposit(msg.sender, _pid, _amount);
    }

    function withdraw(uint256 _pid, uint256 _amount) external nonReentrant {
        require(_pid < poolInfo.length, "withdraw: BAD POOL");
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];
        uint256 amount = user.amount;
        require(amount >= _amount, "withdraw: Exceeded user's amount");

        updatePool(_pid);
        uint256 accMoraPerShare = pool.accMoraPerShare;
        uint lpSupply = pool.totalLp;
        if (amount > 0) {
            uint256 pending = amount.mul(accMoraPerShare).div(1e18).sub(user.rewardDebt);
            mora.safeTransfer(address(msg.sender), pending);
        }

        if(_amount > 0) {
            user.amount = amount.sub(_amount);
            pool.totalLp = lpSupply.sub(_amount);
            pool.lpToken.safeTransfer(address(msg.sender), _amount);
        }
            
        amount = user.amount;
        address rewarder = pool.rewarder;
        if (rewarder != address(0)) {
            IRewarder(rewarder).onReward(address(msg.sender), amount);
        }
        user.rewardDebt = amount.mul(accMoraPerShare).div(1e18);

        emit Withdraw(msg.sender, _pid, _amount);
    }

    // only for emergency case and users do not care about reward
    function emergencyWithdraw(uint256 _pid) external nonReentrant {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];
        uint256 amount = user.amount;
        user.amount = 0;
        address rewarder = pool.rewarder;
        pool.totalLp = pool.totalLp.sub(amount);
        user.rewardDebt = 0;
        pool.lpToken.safeTransfer(address(msg.sender), amount);
        emit EmergencyWithdraw(msg.sender, _pid, amount);

        uint256 size;
        assembly {
            size := extcodesize(rewarder)
        }
        if (rewarder != address(0) && size > 0) {
            try IRewarder(rewarder).onReward(address(msg.sender), 0) {} catch {
                emit FailedToNotifyRewarder(msg.sender, _pid);
            }
        }
    }
}
