/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Multicall2 } from "../Multicall2";

export class Multicall2__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Multicall2> {
    return super.deploy(overrides || {}) as Promise<Multicall2>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Multicall2 {
    return super.attach(address) as Multicall2;
  }
  connect(signer: Signer): Multicall2__factory {
    return super.connect(signer) as Multicall2__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Multicall2 {
    return new Contract(address, _abi, signerOrProvider) as Multicall2;
  }
}

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall2.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "aggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "returnData",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall2.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "blockAndAggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall2.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [
      {
        internalType: "address",
        name: "coinbase",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockDifficulty",
    outputs: [
      {
        internalType: "uint256",
        name: "difficulty",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "gaslimit",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
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
        name: "addr",
        type: "address",
      },
    ],
    name: "getEthBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "requireSuccess",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall2.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "tryAggregate",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall2.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "requireSuccess",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall2.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "tryBlockAndAggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall2.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506109d6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806372425d9d1161007157806372425d9d1461013a57806386d516e814610140578063a8b0574e14610146578063bce38bd714610154578063c3077fa914610174578063ee82ac5e1461018757600080fd5b80630f28c97d146100b9578063252dba42146100ce57806327e86d6e146100ef578063399542e9146100f757806342cbb15c146101195780634d2301cc1461011f575b600080fd5b425b6040519081526020015b60405180910390f35b6100e16100dc36600461069c565b610199565b6040516100c5929190610810565b6100bb610321565b61010a6101053660046106d9565b610334565b6040516100c59392919061087a565b436100bb565b6100bb61012d36600461067a565b6001600160a01b03163190565b446100bb565b456100bb565b6040514181526020016100c5565b6101676101623660046106d9565b61034c565b6040516100c591906107fd565b61010a61018236600461069c565b610506565b6100bb61019536600461072e565b4090565b8051439060609067ffffffffffffffff8111156101b8576101b861098a565b6040519080825280602002602001820160405280156101eb57816020015b60608152602001906001900390816101d65790505b50905060005b835181101561031b5760008085838151811061020f5761020f610974565b6020026020010151600001516001600160a01b031686848151811061023657610236610974565b60200260200101516020015160405161024f91906107e1565b6000604051808303816000865af19150503d806000811461028c576040519150601f19603f3d011682016040523d82523d6000602084013e610291565b606091505b5091509150816102e85760405162461bcd60e51b815260206004820181905260248201527f4d756c746963616c6c206167677265676174653a2063616c6c206661696c656460448201526064015b60405180910390fd5b808484815181106102fb576102fb610974565b60200260200101819052505050808061031390610943565b9150506101f1565b50915091565b600061032e6001436108fc565b40905090565b4380406060610343858561034c565b90509250925092565b6060815167ffffffffffffffff8111156103685761036861098a565b6040519080825280602002602001820160405280156103ae57816020015b6040805180820190915260008152606060208201528152602001906001900390816103865790505b50905060005b82518110156104ff576000808483815181106103d2576103d2610974565b6020026020010151600001516001600160a01b03168584815181106103f9576103f9610974565b60200260200101516020015160405161041291906107e1565b6000604051808303816000865af19150503d806000811461044f576040519150601f19603f3d011682016040523d82523d6000602084013e610454565b606091505b509150915085156104b657816104b65760405162461bcd60e51b815260206004820152602160248201527f4d756c746963616c6c32206167677265676174653a2063616c6c206661696c656044820152601960fa1b60648201526084016102df565b60405180604001604052808315158152602001828152508484815181106104df576104df610974565b6020026020010181905250505080806104f790610943565b9150506103b4565b5092915050565b6000806060610516600185610334565b9196909550909350915050565b80356001600160a01b038116811461053a57600080fd5b919050565b600082601f83011261055057600080fd5b8135602067ffffffffffffffff8083111561056d5761056d61098a565b8260051b61057c8382016108cb565b8481528381019087850183890186018a101561059757600080fd5b600093505b8684101561066d578035858111156105b357600080fd5b89016040601f19828d0381018213156105cb57600080fd5b6105d36108a2565b6105de8a8501610523565b815282840135898111156105f157600080fd5b8085019450508d603f85011261060657600080fd5b898401358981111561061a5761061a61098a565b61062a8b84601f840116016108cb565b92508083528e8482870101111561064057600080fd5b808486018c85013760009083018b0152808a0191909152855250506001939093019291850191850161059c565b5098975050505050505050565b60006020828403121561068c57600080fd5b61069582610523565b9392505050565b6000602082840312156106ae57600080fd5b813567ffffffffffffffff8111156106c557600080fd5b6106d18482850161053f565b949350505050565b600080604083850312156106ec57600080fd5b823580151581146106fc57600080fd5b9150602083013567ffffffffffffffff81111561071857600080fd5b6107248582860161053f565b9150509250929050565b60006020828403121561074057600080fd5b5035919050565b600082825180855260208086019550808260051b84010181860160005b848110156107a857858303601f1901895281518051151584528401516040858501819052610794818601836107b5565b9a86019a9450505090830190600101610764565b5090979650505050505050565b600081518084526107cd816020860160208601610913565b601f01601f19169290920160200192915050565b600082516107f3818460208701610913565b9190910192915050565b6020815260006106956020830184610747565b600060408201848352602060408185015281855180845260608601915060608160051b870101935082870160005b8281101561086c57605f1988870301845261085a8683516107b5565b9550928401929084019060010161083e565b509398975050505050505050565b8381528260208201526060604082015260006108996060830184610747565b95945050505050565b6040805190810167ffffffffffffffff811182821017156108c5576108c561098a565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156108f4576108f461098a565b604052919050565b60008282101561090e5761090e61095e565b500390565b60005b8381101561092e578181015183820152602001610916565b8381111561093d576000848401525b50505050565b60006000198214156109575761095761095e565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122098cc04d3bccfa5dd16ead5395617ad4c5c2c2295e30fe0185aed0cd01a80199164736f6c63430008070033";
