// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";

contract sMora is Ownable, ERC20("sMora", "sMORA") {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    struct UserInfo {
        uint256 amount;
        mapping(IERC20 => uint256) rewardDebt;
    }

    IERC20 public mora;

    uint256 public internalMoraBalance;
    /// @notice Array of tokens that users can claim
    IERC20[] public rewardTokens;
    mapping(IERC20 => bool) public isRewardToken;
    /// @notice Last reward balance of `token`
    mapping(IERC20 => uint256) public lastRewardBalance;

    address public feeCollector;

    /// @notice The deposit fee, scaled to `FEE_PERCENT_PRECISION`
    uint256 public depositFeePercent;
    /// @notice The deposit fee, scaled to `FEE_PERCENT_PRECISION`
    uint256 public withdrawFeePercent;
    /// @notice The precision of `depositFeePercent` & `withdrawFeePercent`
    uint256 public FEE_PERCENT_PRECISION;

    /// @notice Accumulated `token` rewards per share, scaled to `accRewardPerSharePrecision`
    mapping(IERC20 => uint256) public accRewardPerShare;
    /// @notice The precision of `accRewardPerShare` = 1 ** (mora decimals + rewardToken decimals)
    mapping(IERC20 => uint256) public accRewardPerSharePrecision;

    /// @dev Info of each user that stakes MORA
    mapping(address => UserInfo) private userInfo;

    /// @notice Emitted when a user deposits MORA
    event Deposit(address indexed user, uint256 amount, uint256 fee);

    /// @notice Emitted when owner changes the deposit fee percentage
    event DepositFeeChanged(uint256 newFee, uint256 oldFee);

    /// @notice Emitted when a user withdraws MORA
    event Withdraw(address indexed user, uint256 amount);

    /// @notice Emitted when owner changes the withdraw fee percentage
    event WithdrawFeeChanged(uint256 newFee, uint256 oldFee);

    /// @notice Emitted when a user claims reward
    event ClaimReward(
        address indexed user,
        address indexed rewardToken,
        uint256 amount
    );

    /// @notice Emitted when a user emergency withdraws its MORA
    event EmergencyWithdraw(address indexed user, uint256 amount);

    /// @notice Emitted when owner adds a token to the reward tokens list
    event RewardTokenAdded(address token, uint256 accRewardPerSharePrecision);

    /// @notice Emitted when owner removes a token from the reward tokens list
    event RewardTokenRemoved(address token);

    constructor(
        IERC20 _rewardToken,
        IERC20 _mora,
        address _feeCollector,
        uint256 _depositFeePercent,
        uint256 _withdrawFeePercent,
        uint256 _accRewardPerSharePrecision
    ) public {
        require(address(_rewardToken) != address(0), "sMora: ZERO_ADDRESS_0");
        require(address(_mora) != address(0), "sMora: ZERO_ADDRESS_1");
        require(_feeCollector != address(0), "sMora: ZERO_ADDRESS_2");
        require(_depositFeePercent <= 5e17, "sMora: EXCEEDED_50_PERCENT");
        require(_withdrawFeePercent <= 5e17, "sMora: EXCEEDED_50_PERCENT");

        mora = _mora;
        depositFeePercent = _depositFeePercent;
        withdrawFeePercent = _withdrawFeePercent;
        feeCollector = _feeCollector;

        isRewardToken[_rewardToken] = true;
        accRewardPerSharePrecision[_rewardToken] = _accRewardPerSharePrecision;
        rewardTokens.push(_rewardToken);
        FEE_PERCENT_PRECISION = 1e18;
    }

    function deposit(uint256 _amount) external {
        UserInfo storage user = userInfo[msg.sender];

        uint256 _fee = _amount.mul(depositFeePercent).div(
            FEE_PERCENT_PRECISION
        );
        uint256 _amountMinusFee = _amount.sub(_fee);
        _mint(msg.sender, _amountMinusFee);

        uint256 _previousAmount = user.amount;
        uint256 _newAmount = user.amount.add(_amountMinusFee);
        user.amount = _newAmount;

        uint256 _len = rewardTokens.length;
        for (uint256 i; i < _len; i++) {
            IERC20 _token = rewardTokens[i];
            updateReward(_token);

            uint256 _previousRewardDebt = user.rewardDebt[_token];
            user.rewardDebt[_token] = _newAmount
                .mul(accRewardPerShare[_token])
                .div(accRewardPerSharePrecision[_token]);

            if (_previousAmount != 0) {
                uint256 _pending = _previousAmount
                    .mul(accRewardPerShare[_token])
                    .div(accRewardPerSharePrecision[_token])
                    .sub(_previousRewardDebt);
                if (_pending != 0) {
                    safeTokenTransfer(_token, msg.sender, _pending);
                    emit ClaimReward(msg.sender, address(_token), _pending);
                }
            }
        }

        internalMoraBalance = internalMoraBalance.add(_amountMinusFee);
        if (_fee > 0) mora.safeTransferFrom(msg.sender, feeCollector, _fee);
        if (_amountMinusFee > 0) mora.safeTransferFrom(msg.sender, address(this), _amountMinusFee);
        emit Deposit(msg.sender, _amountMinusFee, _fee);
    }

    function getUserInfo(
        address _user,
        IERC20 _rewardToken
    ) external view returns (uint256, uint256) {
        UserInfo storage user = userInfo[_user];
        return (user.amount, user.rewardDebt[_rewardToken]);
    }

    function rewardTokensLength() external view returns (uint256) {
        return rewardTokens.length;
    }

    function addRewardToken(
        IERC20 _rewardToken,
        uint256 _accRewardPerSharePrecision
    ) external onlyOwner {
        require(address(_rewardToken) != address(0), "sMora: ZERO_ADDRESS");
        require(rewardTokens.length < 25, "sMora: TOO_BIG_LIST");
        require(_accRewardPerSharePrecision != 0, "sMora: BAD_PRECISION");
        if (accRewardPerSharePrecision[_rewardToken] == 0) {
            rewardTokens.push(_rewardToken);
            isRewardToken[_rewardToken] = true;
        }
        accRewardPerSharePrecision[_rewardToken] = _accRewardPerSharePrecision;
        updateReward(_rewardToken);
        emit RewardTokenAdded(
            address(_rewardToken),
            _accRewardPerSharePrecision
        );
    }

    function removeRewardToken(IERC20 _rewardToken) external onlyOwner {
        require(isRewardToken[_rewardToken], "sMora: NOT_ADDED_TOKEN");
        updateReward(_rewardToken);
        isRewardToken[_rewardToken] = false;
        accRewardPerSharePrecision[_rewardToken] = 0;
        uint256 _len = rewardTokens.length;
        for (uint256 i; i < _len; i++) {
            if (rewardTokens[i] == _rewardToken) {
                rewardTokens[i] = rewardTokens[_len - 1];
                rewardTokens.pop();
                break;
            }
        }
        emit RewardTokenRemoved(address(_rewardToken));
    }

    function setDepositFeePercent(
        uint256 _depositFeePercent
    ) external onlyOwner {
        require(_depositFeePercent <= 5e17, "sMora: EXCEEDED_50_PERCENT");
        uint256 oldFee = depositFeePercent;
        depositFeePercent = _depositFeePercent;
        emit DepositFeeChanged(_depositFeePercent, oldFee);
    }

    function pendingReward(
        address _user,
        IERC20 _token
    ) external view returns (uint256) {
        require(isRewardToken[_token], "sMora: WRONG_REWARD_TOKEN");
        UserInfo storage user = userInfo[_user];
        uint256 _totalMora = internalMoraBalance;
        uint256 _accRewardTokenPerShare = accRewardPerShare[_token];

        uint256 _currRewardBalance = _token.balanceOf(address(this));
        uint256 _rewardBalance = _token == mora
            ? _currRewardBalance.sub(_totalMora)
            : _currRewardBalance;

        if (_rewardBalance != lastRewardBalance[_token] && _totalMora != 0) {
            uint256 _accruedReward = _rewardBalance.sub(
                lastRewardBalance[_token]
            );
            _accRewardTokenPerShare = _accRewardTokenPerShare.add(
                _accruedReward.mul(accRewardPerSharePrecision[_token]).div(
                    _totalMora
                )
            );
        }
        return
            user
                .amount
                .mul(_accRewardTokenPerShare)
                .div(accRewardPerSharePrecision[_token])
                .sub(user.rewardDebt[_token]);
    }

    function withdraw(uint256 _amount) external {
        UserInfo storage user = userInfo[msg.sender];
        uint256 _previousAmount = user.amount;
        require(_amount <= _previousAmount, "sMora: EXCEEDED_BALANCE");
        uint256 _newAmount = user.amount.sub(_amount);
        _burn(msg.sender, _amount);
        user.amount = _newAmount;

        uint256 _len = rewardTokens.length;
        if (_previousAmount != 0) {
            for (uint256 i; i < _len; i++) {
                IERC20 _token = rewardTokens[i];
                updateReward(_token);

                uint256 _pending = _previousAmount
                    .mul(accRewardPerShare[_token])
                    .div(accRewardPerSharePrecision[_token])
                    .sub(user.rewardDebt[_token]);
                user.rewardDebt[_token] = _newAmount
                    .mul(accRewardPerShare[_token])
                    .div(accRewardPerSharePrecision[_token]);

                if (_pending != 0) {
                    safeTokenTransfer(_token, msg.sender, _pending);
                    emit ClaimReward(msg.sender, address(_token), _pending);
                }
            }
        }

        internalMoraBalance = internalMoraBalance.sub(_amount);
        uint256 _fee = _amount.mul(withdrawFeePercent).div(
            FEE_PERCENT_PRECISION
        );
        uint256 _amountMinusFee = _amount.sub(_fee);
        if (_fee > 0) mora.safeTransfer(feeCollector, _fee);
        if (_amountMinusFee > 0) mora.safeTransfer(msg.sender, _amountMinusFee);
        emit Withdraw(msg.sender, _amount);
    }

    function emergencyWithdraw() external {
        UserInfo storage user = userInfo[msg.sender];

        uint256 _amount = user.amount;
        user.amount = 0;
        uint256 _len = rewardTokens.length;
        for (uint256 i; i < _len; i++) {
            IERC20 _token = rewardTokens[i];
            user.rewardDebt[_token] = 0;
        }
        internalMoraBalance = internalMoraBalance.sub(_amount);
        if (_amount > 0) mora.safeTransfer(msg.sender, _amount);
        emit EmergencyWithdraw(msg.sender, _amount);
    }

    function updateReward(IERC20 _token) public {
        require(isRewardToken[_token], "sMora: WRONG_REWARD_TOKEN");

        uint256 _totalMora = internalMoraBalance;

        uint256 _currRewardBalance = _token.balanceOf(address(this));
        uint256 _rewardBalance = _token == mora
            ? _currRewardBalance.sub(_totalMora)
            : _currRewardBalance;

        // Did sMora receive any token
        if (_rewardBalance == lastRewardBalance[_token] || _totalMora == 0) {
            return;
        }

        uint256 _accruedReward = _rewardBalance.sub(lastRewardBalance[_token]);

        accRewardPerShare[_token] = accRewardPerShare[_token].add(
            _accruedReward.mul(accRewardPerSharePrecision[_token]).div(
                _totalMora
            )
        );
        lastRewardBalance[_token] = _rewardBalance;
    }

    function safeTokenTransfer(
        IERC20 _token,
        address _to,
        uint256 _amount
    ) internal {
        uint256 _currRewardBalance = _token.balanceOf(address(this));
        uint256 _rewardBalance = _token == mora
            ? _currRewardBalance.sub(internalMoraBalance)
            : _currRewardBalance;

        if (_amount > _rewardBalance) {
            lastRewardBalance[_token] = lastRewardBalance[_token].sub(
                _rewardBalance
            );
            if (_rewardBalance > 0) _token.safeTransfer(_to, _rewardBalance);
        } else {
            lastRewardBalance[_token] = lastRewardBalance[_token].sub(_amount);
            if (_amount > 0) _token.safeTransfer(_to, _amount);
        }
    }

    function moraForSMora(uint256 _amount) external view returns (uint256) {
        uint256 _fee = _amount.mul(depositFeePercent).div(
            FEE_PERCENT_PRECISION
        );
        return _amount.sub(_fee);
    }

    function smoraForMora(uint256 _amount) external view returns (uint256) {
        uint256 _fee = _amount.mul(withdrawFeePercent).div(
            FEE_PERCENT_PRECISION
        );
        return _amount.sub(_fee);
    }

    // Copied and modified from YAM code:
    // https://github.com/yam-finance/yam-protocol/blob/master/contracts/token/YAMGovernanceStorage.sol
    // https://github.com/yam-finance/yam-protocol/blob/master/contracts/token/YAMGovernance.sol
    // Which is copied and modified from COMPOUND:
    // https://github.com/compound-finance/compound-protocol/blob/master/contracts/Governance/Comp.sol

    // A record of each accounts delegate
    mapping(address => address) internal _delegates;

    /// @notice A checkpoint for marking number of votes from a given block
    struct Checkpoint {
        uint32 fromBlock;
        uint256 votes;
    }

    /// @notice A record of votes checkpoints for each account, by index
    mapping(address => mapping(uint32 => Checkpoint)) public checkpoints;

    /// @notice The number of checkpoints for each account
    mapping(address => uint32) public numCheckpoints;

    /// @notice The EIP-712 typehash for the contract's domain
    bytes32 public constant DOMAIN_TYPEHASH =
        keccak256(
            "EIP712Domain(string name,uint256 chainId,address verifyingContract)"
        );

    /// @notice The EIP-712 typehash for the delegation struct used by the contract
    bytes32 public constant DELEGATION_TYPEHASH =
        keccak256("Delegation(address delegatee,uint256 nonce,uint256 expiry)");

    // A record of states for signing / validating signatures
    mapping(address => uint) public nonces;

    /// @notice An event thats emitted when an account changes its delegate
    event DelegateChanged(
        address indexed delegator,
        address indexed fromDelegate,
        address indexed toDelegate
    );

    /// @notice An event thats emitted when a delegate account's vote balance changes
    event DelegateVotesChanged(
        address indexed delegate,
        uint previousBalance,
        uint newBalance
    );

    function burn(address _from, uint256 _amount) private {
        _burn(_from, _amount);
        _moveDelegates(_delegates[_from], address(0), _amount);
    }

    function mint(address recipient, uint256 _amount) private {
        _mint(recipient, _amount);

        _initDelegates(recipient);

        _moveDelegates(address(0), _delegates[recipient], _amount);
    }

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) public virtual override returns (bool) {
        bool result = super.transferFrom(sender, recipient, amount); // Call parent hook

        _initDelegates(recipient);

        _moveDelegates(_delegates[sender], _delegates[recipient], amount);

        return result;
    }

    function transfer(
        address recipient,
        uint256 amount
    ) public virtual override returns (bool) {
        bool result = super.transfer(recipient, amount); // Call parent hook

        _initDelegates(recipient);

        _moveDelegates(_delegates[msg.sender], _delegates[recipient], amount);

        return result;
    }

    // initialize delegates mapping of recipient if not already
    function _initDelegates(address recipient) internal {
        if (_delegates[recipient] == address(0)) {
            _delegates[recipient] = recipient;
        }
    }

    /**
     * @param delegator The address to get delegates for
     */
    function delegates(address delegator) external view returns (address) {
        return _delegates[delegator];
    }

    /**
     * @notice Delegate votes from `msg.sender` to `delegatee`
     * @param delegatee The address to delegate votes to
     */
    function delegate(address delegatee) external {
        return _delegate(msg.sender, delegatee);
    }

    /**
     * @notice Delegates votes from signatory to `delegatee`
     * @param delegatee The address to delegate votes to
     * @param nonce The contract state required to match the signature
     * @param expiry The time at which to expire the signature
     * @param v The recovery byte of the signature
     * @param r Half of the ECDSA signature pair
     * @param s Half of the ECDSA signature pair
     */
    function delegateBySig(
        address delegatee,
        uint nonce,
        uint expiry,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external {
        bytes32 domainSeparator = keccak256(
            abi.encode(
                DOMAIN_TYPEHASH,
                keccak256(bytes(name())),
                getChainId(),
                address(this)
            )
        );

        bytes32 structHash = keccak256(
            abi.encode(DELEGATION_TYPEHASH, delegatee, nonce, expiry)
        );

        bytes32 digest = keccak256(
            abi.encodePacked("\x19\x01", domainSeparator, structHash)
        );

        address signatory = ecrecover(digest, v, r, s);
        require(
            signatory != address(0),
            "xMORA::delegateBySig: invalid signature"
        );
        require(
            nonce == nonces[signatory]++,
            "xMORA::delegateBySig: invalid nonce"
        );
        require(
            block.timestamp <= expiry,
            "xMORA::delegateBySig: signature expired"
        );
        return _delegate(signatory, delegatee);
    }

    /**
     * @notice Gets the current votes balance for `account`
     * @param account The address to get votes balance
     * @return The number of current votes for `account`
     */
    function getCurrentVotes(address account) external view returns (uint256) {
        uint32 nCheckpoints = numCheckpoints[account];
        return
            nCheckpoints > 0 ? checkpoints[account][nCheckpoints - 1].votes : 0;
    }

    /**
     * @notice Determine the prior number of votes for an account as of a block number
     * @dev Block number must be a finalized block or else this function will revert to prevent misinformation.
     * @param account The address of the account to check
     * @param blockNumber The block number to get the vote balance at
     * @return The number of votes the account had as of the given block
     */
    function getPriorVotes(
        address account,
        uint blockNumber
    ) external view returns (uint256) {
        require(
            blockNumber < block.number,
            "xMORA::getPriorVotes: not yet determined"
        );

        uint32 nCheckpoints = numCheckpoints[account];
        if (nCheckpoints == 0) {
            return 0;
        }

        // First check most recent balance
        if (checkpoints[account][nCheckpoints - 1].fromBlock <= blockNumber) {
            return checkpoints[account][nCheckpoints - 1].votes;
        }

        // Next check implicit zero balance
        if (checkpoints[account][0].fromBlock > blockNumber) {
            return 0;
        }

        uint32 lower = 0;
        uint32 upper = nCheckpoints - 1;
        while (upper > lower) {
            uint32 center = upper - (upper - lower) / 2; // ceil, avoiding overflow
            Checkpoint memory cp = checkpoints[account][center];
            if (cp.fromBlock == blockNumber) {
                return cp.votes;
            } else if (cp.fromBlock < blockNumber) {
                lower = center;
            } else {
                upper = center - 1;
            }
        }
        return checkpoints[account][lower].votes;
    }

    function _delegate(address delegator, address delegatee) internal {
        address currentDelegate = _delegates[delegator];
        uint256 delegatorBalance = balanceOf(delegator); // balance of underlying MORAs (not scaled);
        _delegates[delegator] = delegatee;

        emit DelegateChanged(delegator, currentDelegate, delegatee);

        _moveDelegates(currentDelegate, delegatee, delegatorBalance);
    }

    function _moveDelegates(
        address srcRep,
        address dstRep,
        uint256 amount
    ) internal {
        if (srcRep != dstRep && amount > 0) {
            if (srcRep != address(0)) {
                // decrease old representative
                uint32 srcRepNum = numCheckpoints[srcRep];
                uint256 srcRepOld = srcRepNum > 0
                    ? checkpoints[srcRep][srcRepNum - 1].votes
                    : 0;
                uint256 srcRepNew = srcRepOld - amount;
                _writeCheckpoint(srcRep, srcRepNum, srcRepOld, srcRepNew);
            }

            if (dstRep != address(0)) {
                // increase new representative
                uint32 dstRepNum = numCheckpoints[dstRep];
                uint256 dstRepOld = dstRepNum > 0
                    ? checkpoints[dstRep][dstRepNum - 1].votes
                    : 0;
                uint256 dstRepNew = dstRepOld + amount;
                _writeCheckpoint(dstRep, dstRepNum, dstRepOld, dstRepNew);
            }
        }
    }

    function _writeCheckpoint(
        address delegatee,
        uint32 nCheckpoints,
        uint256 oldVotes,
        uint256 newVotes
    ) internal {
        uint32 blockNumber = safe32(
            block.number,
            "xMORA::_writeCheckpoint: block number exceeds 32 bits"
        );

        if (
            nCheckpoints > 0 &&
            checkpoints[delegatee][nCheckpoints - 1].fromBlock == blockNumber
        ) {
            checkpoints[delegatee][nCheckpoints - 1].votes = newVotes;
        } else {
            checkpoints[delegatee][nCheckpoints] = Checkpoint(
                blockNumber,
                newVotes
            );
            numCheckpoints[delegatee] = nCheckpoints + 1;
        }

        emit DelegateVotesChanged(delegatee, oldVotes, newVotes);
    }

    function safe32(
        uint n,
        string memory errorMessage
    ) internal pure returns (uint32) {
        require(n < 2 ** 32, errorMessage);
        return uint32(n);
    }

    function getChainId() internal pure returns (uint) {
        uint256 chainId;
        assembly {
            chainId := chainid()
        }
        return chainId;
    }
}
