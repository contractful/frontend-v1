import { BigNumber } from "ethers";

export type Address = `0x${string}`;

export interface AgreementCreationParams {
  beginningDate: BigNumber;
  maturityDate: BigNumber;
  paymentCycleDuration: BigNumber;
  paymentCycleAmount: BigNumber;
  underlayingToken: Address;
  contractor: Address;
  descriptionURI: string;
}

export type AgreementParams = {
  beginningDate: BigNumber;
  contractee: Address;
  contractor: Address;
  establishmentFeeRate_: BigNumber;
  maturityDate: BigNumber;
  paymentCycleAmount: BigNumber;
  paymentCycleDuration: BigNumber;
  penalizationAmount_: BigNumber;
  underlayingToken: Address;
  descriptionURI: string;
};

export type AgreementState = {
  escrowedFunds: BigNumber;
  active: boolean;
  closed: boolean;
};
