/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MoraMakerV2 } from "../MoraMakerV2";

export class MoraMakerV2__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _factory: string,
    _bar: string,
    _tokenTo: string,
    _weth9: string,
    overrides?: Overrides
  ): Promise<MoraMakerV2> {
    return super.deploy(
      _factory,
      _bar,
      _tokenTo,
      _weth9,
      overrides || {}
    ) as Promise<MoraMakerV2>;
  }
  getDeployTransaction(
    _factory: string,
    _bar: string,
    _tokenTo: string,
    _weth9: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _factory,
      _bar,
      _tokenTo,
      _weth9,
      overrides || {}
    );
  }
  attach(address: string): MoraMakerV2 {
    return super.attach(address) as MoraMakerV2;
  }
  connect(signer: Signer): MoraMakerV2__factory {
    return super.connect(signer) as MoraMakerV2__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MoraMakerV2 {
    return new Contract(address, _abi, signerOrProvider) as MoraMakerV2;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_bar",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenTo",
        type: "address",
      },
      {
        internalType: "address",
        name: "_weth9",
        type: "address",
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
        name: "_addr",
        type: "address",
      },
    ],
    name: "AddAuthorizedAddress",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldBridge",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "bridge",
        type: "address",
      },
    ],
    name: "LogBridgeSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "server",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountTOKEN",
        type: "uint256",
      },
    ],
    name: "LogConvert",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "RemoveAuthorizedAddress",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "SetDevAddr",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "SetDevCut",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_tokenTo",
        type: "address",
      },
    ],
    name: "SetTokenTo",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_auth",
        type: "address",
      },
    ],
    name: "addAuth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "bar",
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
    name: "boughtTokenTo",
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
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "bridgeFor",
    outputs: [
      {
        internalType: "address",
        name: "bridge",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "slippage",
        type: "uint256",
      },
    ],
    name: "convert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "token0",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "token1",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "slippage",
        type: "uint256",
      },
    ],
    name: "convertMultiple",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "devAddr",
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
    name: "devCut",
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
    name: "factory",
    outputs: [
      {
        internalType: "contract IMoraswapV2Factory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getAuth",
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
    name: "lenAuth",
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
    inputs: [
      {
        internalType: "address",
        name: "_auth",
        type: "address",
      },
    ],
    name: "removeAuth",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "bridge",
        type: "address",
      },
    ],
    name: "setBridge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "setDevAddr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "setDevCut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenTo",
        type: "address",
      },
    ],
    name: "setTokenToAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenTo",
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
];

const _bytecode =
  "0x60e060405260006003553480156200001657600080fd5b5060405162002ac638038062002ac6833981810160405260808110156200003c57600080fd5b508051602082015160408301516060909301519192909160006200005f6200028b565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506001600160a01b03841662000105576040805162461bcd60e51b815260206004820152601a60248201527f4d6f72614d616b657256323a205a45524f5f4144445245535330000000000000604482015290519081900360640190fd5b6001600160a01b03831662000161576040805162461bcd60e51b815260206004820152601a60248201527f4d6f72614d616b657256323a205a45524f5f4144445245535331000000000000604482015290519081900360640190fd5b6001600160a01b038216620001bd576040805162461bcd60e51b815260206004820152601a60248201527f4d6f72614d616b657256323a205a45524f5f4144445245535332000000000000604482015290519081900360640190fd5b6001600160a01b03811662000219576040805162461bcd60e51b815260206004820152601a60248201527f4d6f72614d616b657256323a205a45524f5f4144445245535333000000000000604482015290519081900360640190fd5b606084811b6001600160601b031990811660805284821b811660a052600180546001600160a01b03199081166001600160a01b038716179091559183901b1660c052600480543392168217905562000280906005906200028f602090811b62000fb917901c565b505050505062000316565b3390565b6000620002a6836001600160a01b038416620002af565b90505b92915050565b6000620002bd8383620002fe565b620002f557508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620002a9565b506000620002a9565b60009081526001919091016020526040902054151590565b60805160601c60a05160601c60c05160601c61272f6200039760003980610c0e5280610d39528061169752806116d452806117fc52806118395280611862528061189152806118ce52806118f7525080610f975280611668528061175d52806117c65280611c75525080610d6e52806110995280611c9b525061272f6000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80638da5cb5b116100ad578063c45a015511610071578063c45a015514610392578063da09c72c1461039a578063dbcc106d146103a2578063f2fde38b146103bf578063febb0f7e146103e55761012c565b80638da5cb5b146103265780639c2868371461032e5780639d22ae8c14610336578063a761a93914610364578063c17b73261461038a5761012c565b80635422224e116100f45780635422224e146102735780636ebb64a214610299578063715018a6146102bf5780637ccaacbb146102c75780637f3fd918146103005761012c565b8063159e6f07146101315780631d380d3f1461014b578063248391ff14610173578063297b4486146101a95780633feb270e146101b1575b600080fd5b6101396103ed565b60408051918252519081900360200190f35b6101716004803603602081101561016157600080fd5b50356001600160a01b03166103fe565b005b6101716004803603606081101561018957600080fd5b506001600160a01b0381358116916020810135909116906040013561050f565b61013961061a565b610171600480360360608110156101c757600080fd5b8101906020810181356401000000008111156101e257600080fd5b8201836020820111156101f457600080fd5b8035906020019184602083028401116401000000008311171561021657600080fd5b91939092909160208101903564010000000081111561023457600080fd5b82018360208201111561024657600080fd5b8035906020019184602083028401116401000000008311171561026857600080fd5b919350915035610620565b6101716004803603602081101561028957600080fd5b50356001600160a01b03166107cd565b610171600480360360208110156102af57600080fd5b50356001600160a01b03166108c2565b6101716109d3565b6102e4600480360360208110156102dd57600080fd5b5035610a7f565b604080516001600160a01b039092168252519081900360200190f35b6101716004803603602081101561031657600080fd5b50356001600160a01b0316610a94565b6102e4610b89565b610139610b98565b6101716004803603604081101561034c57600080fd5b506001600160a01b0381358116916020013516610b9e565b6102e46004803603602081101561037a57600080fd5b50356001600160a01b0316610d16565b6102e4610d5d565b6102e4610d6c565b6102e4610d90565b610171600480360360208110156103b857600080fd5b5035610d9f565b610171600480360360208110156103d557600080fd5b50356001600160a01b0316610e93565b6102e4610f95565b60006103f96005610fd7565b905090565b610406610fe2565b6001600160a01b0316610417610b89565b6001600160a01b031614610460576040805162461bcd60e51b81526020600482018190526024820152600080516020612684833981519152604482015290519081900360640190fd5b6001600160a01b0381166104bb576040805162461bcd60e51b815260206004820152601f60248201527f736574546f6b656e546f416464726573732c205a45524f5f4144445245535300604482015290519081900360640190fd5b600180546001600160a01b0383166001600160a01b0319909116811790915560408051918252517fbf32c8b1124ae0b6584a5354b035cdfbcfbbba82075e3c7bffc9bf655dc5376e9181900360200190a150565b33321461055f576040805162461bcd60e51b81526020600482015260196024820152784d6f72614d616b657256323a204d5553545f5553455f454f4160381b604482015290519081900360640190fd5b61056a600533610fe6565b6105b4576040805162461bcd60e51b815260206004820152601660248201527526b7b930a6b0b5b2b92b191d102327a92124a22222a760511b604482015290519081900360640190fd5b611388811061060a576040805162461bcd60e51b815260206004820152601e60248201527f4d6f72614d616b657256323a20544f4f5f484947485f534c4950504147450000604482015290519081900360640190fd5b610615838383610ffb565b505050565b60025481565b333214610670576040805162461bcd60e51b81526020600482015260196024820152784d6f72614d616b657256323a204d5553545f5553455f454f4160381b604482015290519081900360640190fd5b61067b600533610fe6565b6106c5576040805162461bcd60e51b815260206004820152601660248201527526b7b930a6b0b5b2b92b191d102327a92124a22222a760511b604482015290519081900360640190fd5b611388811061071b576040805162461bcd60e51b815260206004820152601e60248201527f4d6f72614d616b657256323a20544f4f5f484947485f534c4950504147450000604482015290519081900360640190fd5b83821461076f576040805162461bcd60e51b815260206004820152601e60248201527f4d6f72614d616b657256323a204241445f4152524159535f4c454e4754480000604482015290519081900360640190fd5b8360005b818110156107c4576107bc87878381811061078a57fe5b905060200201356001600160a01b03168686848181106107a657fe5b905060200201356001600160a01b031685610ffb565b600101610773565b50505050505050565b6107d5610fe2565b6001600160a01b03166107e6610b89565b6001600160a01b03161461082f576040805162461bcd60e51b81526020600482018190526024820152600080516020612684833981519152604482015290519081900360640190fd5b61083a600582610fb9565b61088b576040805162461bcd60e51b815260206004820152601f60248201527f4d6f72614d616b657256323a20414c52454144595f415554484f52495a454400604482015290519081900360640190fd5b6040516001600160a01b038216907f030e24b250019d43c83e1350821892b74b895598b35969ae338242047c815b4990600090a250565b6108ca610fe2565b6001600160a01b03166108db610b89565b6001600160a01b031614610924576040805162461bcd60e51b81526020600482018190526024820152600080516020612684833981519152604482015290519081900360640190fd5b6001600160a01b03811661097f576040805162461bcd60e51b815260206004820152601860248201527f736574446576416464722c205a45524f5f414444524553530000000000000000604482015290519081900360640190fd5b600480546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f45c73fc162405abe4471c4228f0797176ac32cb9f7be4a25a67cbd1dda6d007e9181900360200190a150565b6109db610fe2565b6001600160a01b03166109ec610b89565b6001600160a01b031614610a35576040805162461bcd60e51b81526020600482018190526024820152600080516020612684833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000610a8c6005836114df565b90505b919050565b610a9c610fe2565b6001600160a01b0316610aad610b89565b6001600160a01b031614610af6576040805162461bcd60e51b81526020600482018190526024820152600080516020612684833981519152604482015290519081900360640190fd5b610b016005826114eb565b610b52576040805162461bcd60e51b815260206004820152601b60248201527f4d6f72614d616b657256323a204e4f545f415554484f52495a45440000000000604482015290519081900360640190fd5b6040516001600160a01b038216907ff39efc52b4beccf22e624f7c591cc2dbfdb4359a0fe0801b1319d162833c0ec590600090a250565b6000546001600160a01b031690565b60035481565b610ba9600533610fe6565b610bf3576040805162461bcd60e51b815260206004820152601660248201527526b7b930a6b0b5b2b92b191d102327a92124a22222a760511b604482015290519081900360640190fd5b6001546001600160a01b03838116911614801590610c4357507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614155b8015610c615750806001600160a01b0316826001600160a01b031614155b610cb2576040805162461bcd60e51b815260206004820152601b60248201527f4d6f72614d616b657256323a20494e56414c49445f4252494447450000000000604482015290519081900360640190fd5b6001600160a01b0380831660008181526007602052604080822080548686166001600160a01b0319821681179092559151919094169392849290917f15e77ca45c8933ccd9fb9c909fd297b4ff5f8b931ba6e5d9df3edbc88f172c149190a4505050565b6001600160a01b038082166000908152600760205260409020541680610a8f57507f0000000000000000000000000000000000000000000000000000000000000000919050565b6001546001600160a01b031681565b7f000000000000000000000000000000000000000000000000000000000000000081565b6004546001600160a01b031681565b610da7610fe2565b6001600160a01b0316610db8610b89565b6001600160a01b031614610e01576040805162461bcd60e51b81526020600482018190526024820152600080516020612684833981519152604482015290519081900360640190fd5b611388811115610e58576040805162461bcd60e51b815260206004820152601760248201527f7365744465764375743a204355545f544f4f5f48494748000000000000000000604482015290519081900360640190fd5b60038190556040805182815290517f914990c75916d406c148e7fca9308486d7806a77c0ef66119c9329add5885d2e9181900360200190a150565b610e9b610fe2565b6001600160a01b0316610eac610b89565b6001600160a01b031614610ef5576040805162461bcd60e51b81526020600482018190526024820152600080516020612684833981519152604482015290519081900360640190fd5b6001600160a01b038116610f3a5760405162461bcd60e51b81526004018080602001828103825260268152602001806125ee6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000610fce836001600160a01b038416611500565b90505b92915050565b6000610a8c8261154a565b3390565b6000610fce836001600160a01b03841661154e565b600080836001600160a01b0316856001600160a01b0316141561109557604080516370a0823160e01b815230600482015290516001600160a01b038716916370a08231916024808301926020929190829003018186803b15801561105e57600080fd5b505afa158015611072573d6000803e3d6000fd5b505050506040513d602081101561108857600080fd5b505191506000905061146b565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e6a4390587876040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b031681526020019250505060206040518083038186803b15801561111557600080fd5b505afa158015611129573d6000803e3d6000fd5b505050506040513d602081101561113f57600080fd5b505190506001600160a01b03811661119e576040805162461bcd60e51b815260206004820152601960248201527f4d6f72614d616b657256323a20494e56414c49445f5041495200000000000000604482015290519081900360640190fd5b61122c81826001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156111ef57600080fd5b505afa158015611203573d6000803e3d6000fd5b505050506040513d602081101561121957600080fd5b50516001600160a01b0384169190611566565b6000866001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561127b57600080fd5b505afa15801561128f573d6000803e3d6000fd5b505050506040513d60208110156112a557600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038916916370a08231916024808301926020929190829003018186803b1580156112f357600080fd5b505afa158015611307573d6000803e3d6000fd5b505050506040513d602081101561131d57600080fd5b50516040805163226bf2d160e21b815230600482015281519293506001600160a01b038616926389afcb44926024808401939192918290030181600087803b15801561136857600080fd5b505af115801561137c573d6000803e3d6000fd5b505050506040513d604081101561139257600080fd5b5050604080516370a0823160e01b815230600482015290516114129184916001600160a01b038c16916370a08231916024808301926020929190829003018186803b1580156113e057600080fd5b505afa1580156113f4573d6000803e3d6000fd5b505050506040513d602081101561140a57600080fd5b5051906115b8565b945061146581886001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156113e057600080fd5b93505050505b600061147a8686858588611615565b6002805482019055604080518581526020810185905280820183905290519192506001600160a01b03808816929089169133917fd06b1d7ed79b664d17472c6f6997b929f1abe463ccccb4e5b6a0038f2f730c159181900360600190a4505050505050565b6000610fce83836119d3565b6000610fce836001600160a01b038416611a37565b600061150c838361154e565b61154257508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610fd1565b506000610fd1565b5490565b60009081526001919091016020526040902054151590565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610615908490611afd565b60008282111561160f576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000846001600160a01b0316866001600160a01b0316141561173557600061163d8585611bae565b6001549091506001600160a01b03888116911614156116955760015461168d906001600160a01b03167f000000000000000000000000000000000000000000000000000000000000000083611566565b80915061172f565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316876001600160a01b03161415611701576116fa7f00000000000000000000000000000000000000000000000000000000000000008285611c08565b915061172f565b600061170c88610d16565b905061171b8882843088611c96565b915061172b818284600088611615565b9250505b506119ca565b6001546001600160a01b038781169116141561179e57600154611782906001600160a01b03167f000000000000000000000000000000000000000000000000000000000000000086611566565b61179784611791878686611c08565b90611bae565b90506119ca565b6001546001600160a01b03868116911614156117fa576001546117eb906001600160a01b03167f000000000000000000000000000000000000000000000000000000000000000085611566565b61179783611791888786611c08565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316866001600160a01b0316141561188f576117977f000000000000000000000000000000000000000000000000000000000000000061188986611791897f000000000000000000000000000000000000000000000000000000000000000089308a611c96565b84611c08565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316856001600160a01b0316141561191e576117977f0000000000000000000000000000000000000000000000000000000000000000611889856117918a7f00000000000000000000000000000000000000000000000000000000000000008a308a611c96565b600061192987610d16565b9050600061193687610d16565b9050866001600160a01b0316826001600160a01b031614156119725761196b82886119648b868b308b611c96565b8888611615565b92506119c7565b876001600160a01b0316816001600160a01b031614156119a55761196b88828861199f8b868b308c611c96565b88611615565b6119c482826119b78b868b308b611c96565b61199f8b868b308c611c96565b92505b50505b95945050505050565b81546000908210611a155760405162461bcd60e51b81526004018080602001828103825260228152602001806125cc6022913960400191505060405180910390fd5b826000018281548110611a2457fe5b9060005260206000200154905092915050565b60008181526001830160205260408120548015611af35783546000198083019190810190600090879083908110611a6a57fe5b9060005260206000200154905080876000018481548110611a8757fe5b600091825260208083209091019290925582815260018981019092526040902090840190558654879080611ab757fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610fd1565b6000915050610fd1565b6060611b52826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166121629092919063ffffffff16565b80519091501561061557808060200190516020811015611b7157600080fd5b50516106155760405162461bcd60e51b815260040180806020018281038252602a8152602001806126d0602a913960400191505060405180910390fd5b600082820183811015610fce576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600354600090839015611c6057611c36612710611c306003548461217b90919063ffffffff16565b906121d4565b600454909150611c53906001600160a01b03878116911683611566565b611c5d84826115b8565b90505b6001546119ca9086906001600160a01b0316837f0000000000000000000000000000000000000000000000000000000000000000875b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e6a4390588886040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b031681526020019250505060206040518083038186803b158015611d1757600080fd5b505afa158015611d2b573d6000803e3d6000fd5b505050506040513d6020811015611d4157600080fd5b505190506001600160a01b038116611da0576040805162461bcd60e51b815260206004820152601b60248201527f4d6f72614d616b657256323a2043414e4e4f545f434f4e564552540000000000604482015290519081900360640190fd5b600080826001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015611ddc57600080fd5b505afa158015611df0573d6000803e3d6000fd5b505050506040513d6060811015611e0657600080fd5b50805160209182015160408051630dfe168160e01b815290516dffffffffffffffffffffffffffff938416965092909116935060009283926001600160a01b03881692630dfe1681926004808301939192829003018186803b158015611e6b57600080fd5b505afa158015611e7f573d6000803e3d6000fd5b505050506040513d6020811015611e9557600080fd5b50516001600160a01b038c8116911614611eb0578284611eb3565b83835b9092509050611ecc6001600160a01b038c16868b611566565b6000611f1f838d6001600160a01b03166370a08231896040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156113e057600080fd5b9050611f2c81848461223b565b96506000611f3c6127108a6115b8565b9050611f5a6305f5e100611c3083611f54868261217b565b9061217b565b611f6589858761223b565b1015611fb8576040805162461bcd60e51b815260206004820152601c60248201527f4d6f72614d616b657256323a20534c4950504147455f43415547485400000000604482015290519081900360640190fd5b50600080876001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b158015611ff557600080fd5b505afa158015612009573d6000803e3d6000fd5b505050506040513d602081101561201f57600080fd5b50516001600160a01b038f811691161461203b5788600061203f565b6000895b90925090506001600160a01b03881663022c0d9f83838e60006040519080825280601f01601f191660200182016040528015612082576020820181803683370190505b506040518563ffffffff1660e01b815260040180858152602001848152602001836001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b838110156120ea5781810151838201526020016120d2565b50505050905090810190601f1680156121175780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b15801561213957600080fd5b505af115801561214d573d6000803e3d6000fd5b50505050505050505050505095945050505050565b60606121718484600085612313565b90505b9392505050565b60008261218a57506000610fd1565b8282028284828161219757fe5b0414610fce5760405162461bcd60e51b81526004018080602001828103825260218152602001806126636021913960400191505060405180910390fd5b600080821161222a576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b81838161223357fe5b049392505050565b600080841161227b5760405162461bcd60e51b815260040180806020018281038252602c8152602001806126a4602c913960400191505060405180910390fd5b60008311801561228b5750600082115b6122c65760405162461bcd60e51b81526004018080602001828103825260298152602001806126146029913960400191505060405180910390fd5b60006122d4856103e561246f565b905060006122e2828561246f565b905060006122fc836122f6886103e861246f565b906124d2565b905080828161230757fe5b04979650505050505050565b6060824710156123545760405162461bcd60e51b815260040180806020018281038252602681526020018061263d6026913960400191505060405180910390fd5b61235d85612521565b6123ae576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106123ed5780518252601f1990920191602091820191016123ce565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461244f576040519150601f19603f3d011682016040523d82523d6000602084013e612454565b606091505b5091509150612464828286612527565b979650505050505050565b600081158061248a5750508082028282828161248757fe5b04145b610fd1576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b80820182811015610fd1576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fd5b3b151590565b60608315612536575081612174565b8251156125465782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612590578181015183820152602001612578565b50505050905090810190601f1680156125bd5780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734d6f72617377617056324c6962726172793a20494e53554646494349454e545f4c4951554944495459416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65724d6f72617377617056324c6962726172793a20494e53554646494349454e545f494e5055545f414d4f554e545361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220b592365642b0b033e74936cf9084d5b79c461ddbca1e4d3f8366cd14c5b26f6764736f6c634300060c0033";
