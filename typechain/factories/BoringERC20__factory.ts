/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BoringERC20 } from "../BoringERC20";

export class BoringERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BoringERC20> {
    return super.deploy(overrides || {}) as Promise<BoringERC20>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BoringERC20 {
    return super.attach(address) as BoringERC20;
  }
  connect(signer: Signer): BoringERC20__factory {
    return super.connect(signer) as BoringERC20__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoringERC20 {
    return new Contract(address, _abi, signerOrProvider) as BoringERC20;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "IERC20",
      },
    ],
    name: "safeDecimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101e761003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c806372a58ae11461003a575b600080fd5b61004d610048366004610123565b610063565b60405160ff909116815260200160405180910390f35b60408051600481526024810182526020810180516001600160e01b031663313ce56760e01b1790529051600091829182916001600160a01b038616916100a99190610153565b600060405180830381855afa9150503d80600081146100e4576040519150601f19603f3d011682016040523d82523d6000602084013e6100e9565b606091505b50915091508180156100fc575080516020145b61010757601261011b565b8080602001905181019061011b919061018e565b949350505050565b60006020828403121561013557600080fd5b81356001600160a01b038116811461014c57600080fd5b9392505050565b6000825160005b81811015610174576020818601810151858301520161015a565b81811115610183576000828501525b509190910192915050565b6000602082840312156101a057600080fd5b815160ff8116811461014c57600080fdfea26469706673582212208a95b24de94263822f6db841959b82378e0dbc4c59163af5cce3347836a9711764736f6c634300080c0033";
