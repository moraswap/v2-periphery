/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Vesting } from "../Vesting";

export class Vesting__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _mora: string,
    _recipient: string,
    _vestingAmount: BigNumberish,
    _begin: BigNumberish,
    _cliff: BigNumberish,
    _end: BigNumberish,
    overrides?: Overrides
  ): Promise<Vesting> {
    return super.deploy(
      _mora,
      _recipient,
      _vestingAmount,
      _begin,
      _cliff,
      _end,
      overrides || {}
    ) as Promise<Vesting>;
  }
  getDeployTransaction(
    _mora: string,
    _recipient: string,
    _vestingAmount: BigNumberish,
    _begin: BigNumberish,
    _cliff: BigNumberish,
    _end: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _mora,
      _recipient,
      _vestingAmount,
      _begin,
      _cliff,
      _end,
      overrides || {}
    );
  }
  attach(address: string): Vesting {
    return super.attach(address) as Vesting;
  }
  connect(signer: Signer): Vesting__factory {
    return super.connect(signer) as Vesting__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Vesting {
    return new Contract(address, _abi, signerOrProvider) as Vesting;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_mora",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_vestingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_begin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cliff",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_end",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "begin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cliff",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "end",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpdate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mora",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "recipient",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "setRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vestingAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161091f38038061091f833981810160405260c081101561003357600080fd5b508051602082015160408301516060840151608085015160a090950151939492939192909160006100626101d3565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350428310156100f6576040805162461bcd60e51b81526020600482015260126024820152712b32b9ba34b7339d102120a2102122a3a4a760711b604482015290519081900360640190fd5b82821015610140576040805162461bcd60e51b81526020600482015260126024820152712b32b9ba34b7339d102120a21021a624a32360711b604482015290519081900360640190fd5b818111610187576040805162461bcd60e51b815260206004820152601060248201526f15995cdd1a5b99ce881090510811539160821b604482015290519081900360640190fd5b600180546001600160a01b039788166001600160a01b031991821617909155600280549690971695169490941790945560039190915560048190556005929092556006556007556101d7565b3390565b610739806101e66000396000f3fe608060405234801561001057600080fd5b50600436106100b35760003560e01c806366d003ac1161007157806366d003ac14610136578063715018a61461013e5780638da5cb5b14610146578063c04637111461014e578063efbe1c1c14610156578063f2fde38b1461015e576100b3565b8062728f76146100b85780630e3e22df146100d257806313d033c0146100f65780631bce6ff3146100fe5780633bbed4a0146101065780634e71d92d1461012e575b600080fd5b6100c0610184565b60408051918252519081900360200190f35b6100da61018a565b604080516001600160a01b039092168252519081900360200190f35b6100c0610199565b6100c061019f565b61012c6004803603602081101561011c57600080fd5b50356001600160a01b03166101a5565b005b61012c61023b565b6100da6103f3565b61012c610402565b6100da6104c0565b6100c06104cf565b6100c06104d5565b61012c6004803603602081101561017457600080fd5b50356001600160a01b03166104db565b60035481565b6001546001600160a01b031681565b60055481565b60045481565b6101ad6105ef565b6001600160a01b03166101be6104c0565b6001600160a01b031614610219576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b0392909216919091179055565b600554421015610285576040805162461bcd60e51b815260206004820152601060248201526f56657374696e673a204e4f54204e4f5760801b604482015290519081900360640190fd5b600154604080516370a0823160e01b8152306004820152905160009283926001600160a01b03909116916370a0823191602480820192602092909190829003018186803b1580156102d557600080fd5b505afa1580156102e9573d6000803e3d6000fd5b505050506040513d60208110156102ff57600080fd5b505160045460065460075460035493945061032a9392909103916103249142036105f3565b90610655565b9150808211156103655780915061035660035461032460045460065403846105f390919063ffffffff16565b6007540160078190555061036a565b426007555b6001546002546040805163a9059cbb60e01b81526001600160a01b039283166004820152602481018690529051919092169163a9059cbb9160448083019260209291908290030181600087803b1580156103c357600080fd5b505af11580156103d7573d6000803e3d6000fd5b505050506040513d60208110156103ed57600080fd5b50505050565b6002546001600160a01b031681565b61040a6105ef565b6001600160a01b031661041b6104c0565b6001600160a01b031614610476576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b60075481565b60065481565b6104e36105ef565b6001600160a01b03166104f46104c0565b6001600160a01b03161461054f576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b0381166105945760405162461bcd60e51b81526004018080602001828103825260268152602001806106bd6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b6000826106025750600061064f565b8282028284828161060f57fe5b041461064c5760405162461bcd60e51b81526004018080602001828103825260218152602001806106e36021913960400191505060405180910390fd5b90505b92915050565b60008082116106ab576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b8183816106b457fe5b04939250505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a264697066735822122038d1f768ce479d58ad82089eb99995c42ca666a9498c02f35fe83e92ab61f32664736f6c634300060c0033";
