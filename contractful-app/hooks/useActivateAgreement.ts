import { BigNumber } from "ethers";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { deployments } from "../deployments";

const useActivateAgreement = (agreementId: BigNumber | undefined) => {
  const manager = deployments.contracts.Manager;

  console.log("agreementId", agreementId?.toString());
  console.log("enabled", agreementId ? true : false);
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
    refetch: refetchPrepare,
  } = usePrepareContractWrite({
    address: manager.address,
    abi: manager.abi,
    functionName: "activateAgreement",
    // Since we are using the enabled flag, we can pass undefined as the param. However to make use of typescript
    // we cast undefined as BigNumber
    args: [agreementId ? agreementId : (agreementId as unknown as BigNumber)],
    enabled: agreementId ? true : false,
    overrides: {
      gasLimit: BigNumber.from(1000000),
    },
  });

  const { data, error, isError, isLoading, write, reset } =
    useContractWrite(config);

  return {
    prepareError,
    isPrepareError,
    refetchPrepare,
    data,
    error,
    isError,
    isLoading,
    write,
    reset,
  };
};

export default useActivateAgreement;
