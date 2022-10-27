import { BigNumber } from "ethers";
import { useContractRead } from "wagmi";
import { deployments } from "../deployments";

const useGetAgreementParameters = (agreementId: BigNumber | undefined) => {
  const manager = deployments.contracts.Manager;

  return useContractRead({
    address: manager.address,
    abi: manager.abi,
    functionName: "getAgreementParameters",
    // Since we are using the enabled flag, we can pass undefined as the param. However to make use of typescript
    // we cast undefined as BigNumber
    args: [agreementId ? agreementId : (agreementId as unknown as BigNumber)],
    enabled: agreementId ? true : false,
  });
};

export default useGetAgreementParameters;
