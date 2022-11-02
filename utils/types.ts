import { BigNumber } from "ethers";

export type Address = `0x${string}`;

export interface AgreementCreationParams {
  acceptanceDeadline: BigNumber;
  maturityDate: BigNumber;
  paymentCycleDuration: BigNumber;
  paymentCycleAmount: BigNumber;
  underlayingToken: Address;
  contractor: Address;
}

export type AgreementParams = {
  acceptanceDeadline: BigNumber;
  activationDate: BigNumber;
  contractee: Address;
  contractor: Address;
  establishmentFeeRate_: BigNumber;
  maturityDate: BigNumber;
  paymentCycleAmount: BigNumber;
  paymentCycleDuration: BigNumber;
  penalizationAmount_: BigNumber;
  underlayingToken: Address;
};
