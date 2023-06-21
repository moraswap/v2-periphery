/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface RewarderInterface extends ethers.utils.Interface {
  functions: {
    "chef()": FunctionFragment;
    "lpToken()": FunctionFragment;
    "onReward(address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingReward(address,uint256)": FunctionFragment;
    "poolInfo()": FunctionFragment;
    "reclaimTokens(address,uint256,address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewardPerSecond()": FunctionFragment;
    "rewardToken()": FunctionFragment;
    "setRewardPerSecond(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updatePool()": FunctionFragment;
    "userInfo(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "chef", values?: undefined): string;
  encodeFunctionData(functionFragment: "lpToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onReward",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingReward",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "poolInfo", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "reclaimTokens",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerSecond",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardPerSecond",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePool",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "userInfo", values: [string]): string;

  decodeFunctionResult(functionFragment: "chef", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lpToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "onReward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reclaimTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerSecond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardPerSecond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;

  events: {
    "OnReward(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SetRewardPerSecond(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OnReward"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetRewardPerSecond"): EventFragment;
}

export class Rewarder extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: RewarderInterface;

  functions: {
    chef(overrides?: CallOverrides): Promise<[string]>;

    "chef()"(overrides?: CallOverrides): Promise<[string]>;

    lpToken(overrides?: CallOverrides): Promise<[string]>;

    "lpToken()"(overrides?: CallOverrides): Promise<[string]>;

    onReward(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onReward(address,uint256)"(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    pendingReward(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "pendingReward(address,uint256)"(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    poolInfo(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        accRewardPerShare: BigNumber;
        lastRewardTime: BigNumber;
        totalLp: BigNumber;
      }
    >;

    "poolInfo()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        accRewardPerShare: BigNumber;
        lastRewardTime: BigNumber;
        totalLp: BigNumber;
      }
    >;

    reclaimTokens(
      token: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "reclaimTokens(address,uint256,address)"(
      token: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    rewardPerSecond(overrides?: CallOverrides): Promise<[BigNumber]>;

    "rewardPerSecond()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    "rewardToken()"(overrides?: CallOverrides): Promise<[string]>;

    setRewardPerSecond(
      _rewardPerSecond: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setRewardPerSecond(uint256)"(
      _rewardPerSecond: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updatePool(overrides?: Overrides): Promise<ContractTransaction>;

    "updatePool()"(overrides?: Overrides): Promise<ContractTransaction>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
    >;

    "userInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
    >;
  };

  chef(overrides?: CallOverrides): Promise<string>;

  "chef()"(overrides?: CallOverrides): Promise<string>;

  lpToken(overrides?: CallOverrides): Promise<string>;

  "lpToken()"(overrides?: CallOverrides): Promise<string>;

  onReward(
    _user: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onReward(address,uint256)"(
    _user: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  pendingReward(
    _user: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "pendingReward(address,uint256)"(
    _user: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  poolInfo(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      accRewardPerShare: BigNumber;
      lastRewardTime: BigNumber;
      totalLp: BigNumber;
    }
  >;

  "poolInfo()"(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      accRewardPerShare: BigNumber;
      lastRewardTime: BigNumber;
      totalLp: BigNumber;
    }
  >;

  reclaimTokens(
    token: string,
    amount: BigNumberish,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "reclaimTokens(address,uint256,address)"(
    token: string,
    amount: BigNumberish,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  rewardPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

  "rewardPerSecond()"(overrides?: CallOverrides): Promise<BigNumber>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  "rewardToken()"(overrides?: CallOverrides): Promise<string>;

  setRewardPerSecond(
    _rewardPerSecond: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setRewardPerSecond(uint256)"(
    _rewardPerSecond: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updatePool(overrides?: Overrides): Promise<ContractTransaction>;

  "updatePool()"(overrides?: Overrides): Promise<ContractTransaction>;

  userInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
  >;

  "userInfo(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
  >;

  callStatic: {
    chef(overrides?: CallOverrides): Promise<string>;

    "chef()"(overrides?: CallOverrides): Promise<string>;

    lpToken(overrides?: CallOverrides): Promise<string>;

    "lpToken()"(overrides?: CallOverrides): Promise<string>;

    onReward(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "onReward(address,uint256)"(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    pendingReward(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingReward(address,uint256)"(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolInfo(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        accRewardPerShare: BigNumber;
        lastRewardTime: BigNumber;
        totalLp: BigNumber;
      }
    >;

    "poolInfo()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        accRewardPerShare: BigNumber;
        lastRewardTime: BigNumber;
        totalLp: BigNumber;
      }
    >;

    reclaimTokens(
      token: string,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "reclaimTokens(address,uint256,address)"(
      token: string,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    rewardPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardPerSecond()"(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    "rewardToken()"(overrides?: CallOverrides): Promise<string>;

    setRewardPerSecond(
      _rewardPerSecond: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRewardPerSecond(uint256)"(
      _rewardPerSecond: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updatePool(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        accRewardPerShare: BigNumber;
        lastRewardTime: BigNumber;
        totalLp: BigNumber;
      }
    >;

    "updatePool()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        accRewardPerShare: BigNumber;
        lastRewardTime: BigNumber;
        totalLp: BigNumber;
      }
    >;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
    >;

    "userInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
    >;
  };

  filters: {
    OnReward(user: string | null, amount: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    SetRewardPerSecond(oldRate: null, newRate: null): EventFilter;
  };

  estimateGas: {
    chef(overrides?: CallOverrides): Promise<BigNumber>;

    "chef()"(overrides?: CallOverrides): Promise<BigNumber>;

    lpToken(overrides?: CallOverrides): Promise<BigNumber>;

    "lpToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    onReward(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onReward(address,uint256)"(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendingReward(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingReward(address,uint256)"(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolInfo(overrides?: CallOverrides): Promise<BigNumber>;

    "poolInfo()"(overrides?: CallOverrides): Promise<BigNumber>;

    reclaimTokens(
      token: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "reclaimTokens(address,uint256,address)"(
      token: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    rewardPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardPerSecond()"(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    setRewardPerSecond(
      _rewardPerSecond: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setRewardPerSecond(uint256)"(
      _rewardPerSecond: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updatePool(overrides?: Overrides): Promise<BigNumber>;

    "updatePool()"(overrides?: Overrides): Promise<BigNumber>;

    userInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "userInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    chef(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "chef()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lpToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lpToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onReward(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onReward(address,uint256)"(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingReward(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pendingReward(address,uint256)"(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "poolInfo()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reclaimTokens(
      token: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "reclaimTokens(address,uint256,address)"(
      token: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    rewardPerSecond(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rewardPerSecond()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rewardToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setRewardPerSecond(
      _rewardPerSecond: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setRewardPerSecond(uint256)"(
      _rewardPerSecond: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updatePool(overrides?: Overrides): Promise<PopulatedTransaction>;

    "updatePool()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "userInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
