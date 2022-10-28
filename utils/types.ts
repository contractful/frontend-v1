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
