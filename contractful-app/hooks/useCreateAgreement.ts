import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { deployments } from "../deployments";
import { AgreementCreationParams } from "./../../utils/types";

const useCreateAgreement = (
  // more params can be added to match the usePrepareContractWrite and useContractWrite hook optional configurations
  agreementCreationParams: AgreementCreationParams | undefined,
  enabled: boolean = true
) => {
  const manager = deployments.contracts.Manager;

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
    isFetched: isPrepareFetched,
  } = usePrepareContractWrite({
    address: manager.address,
    abi: manager.abi,
    functionName: "createAgreement",
    // Since we are using the enabled flag, we can pass undefined as the param. However to make use of typescript
    // we cast undefined as AgreementCreationParams
    args: [
      agreementCreationParams
        ? agreementCreationParams
        : (agreementCreationParams as unknown as AgreementCreationParams),
    ],
    enabled: enabled,
  });

  const { data, error, isError, isLoading, isSuccess, write, reset, isIdle } =
    useContractWrite(config);

  return {
    prepareError,
    isPrepareError,
    data,
    error,
    isError,
    isPrepareFetched,
    isLoading,
    isIdle,
    isSuccess,
    write,
    reset,
  };
};

export default useCreateAgreement;
