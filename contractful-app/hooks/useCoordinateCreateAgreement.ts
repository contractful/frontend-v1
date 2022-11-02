import { BigNumber, ethers } from "ethers";
import { useEffect, useRef, useState } from "react";
import { useWaitForTransaction } from "wagmi";
import { Address, AgreementCreationParams } from "../../utils/types";
import { deployments } from "../deployments";
import { networkConfig } from "../helper.config";
import useApprove from "./useApprove";
import useCreateAgreement from "./useCreateAgreement";

const useCoordinateCreateAgreement: () => {
  coordinateCreateAgreement: (
    _tokenAddress: Address,
    _agreementCreationParams: AgreementCreationParams,
    _spenderAddress?: Address,
    _amount?: BigNumber
  ) => void;
  isError: boolean;
  errorMessage: string | undefined;
  reset: () => void;
  isTokenApprovePendingSignature: boolean;
  isTokenApproveMining: boolean;
  isTokenApproveSuccess: boolean;
  isCreateAgreementPendingSignature: boolean;
  isCreateAgreementMining: boolean;
  isCreateAgreementSuccess: boolean;
} = () => {
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isError, setIsError] = useState<boolean>(false);

  const agreementCreationParams = useRef<AgreementCreationParams>();
  const tokenAddress = useRef<Address>();
  const spenderAddress = useRef<Address>();
  const amount = useRef<BigNumber>();

  const manager = deployments.contracts.Manager;

  // useApprove
  const {
    isLoading: isTokenApprovePendingSignature,
    prepareError: approveTokenPrepareError,
    error: approveTokenError,
    isPrepareError: isApprovePrepareError,
    isError: isApproveTokenError,
    data: approveData,
    write: approveToken,
    reset: resetApproveToken,
  } = useApprove(networkConfig.mumbai.fDAI ?? "0x0", manager.address);

  const { isLoading: isTokenApproveMining, isSuccess: isTokenApproveSuccess } =
    useWaitForTransaction({
      hash: approveData?.hash,
    });

  // useCreateAgreement
  const {
    prepareError: createAgreementPrepareError,
    error: createAgreementError,
    isPrepareFetched: isCreateAgreementPrepareFetch,
    isLoading: isCreateAgreementPendingSignature,
    isPrepareError: isCreateAgreementPrepareError,
    isError: isCreateAgreementError,
    isIdle: isCreateAgreementIdle,
    data: createAgreementData,
    write: createAgreement,
    reset: resetCreateAgreement,
  } = useCreateAgreement(
    agreementCreationParams.current,
    isTokenApproveSuccess && agreementCreationParams.current !== undefined
  );

  const {
    isSuccess: isCreateAgreementSuccess,
    isLoading: isCreateAgreementMining,
  } = useWaitForTransaction({
    hash: createAgreementData?.hash,
  });

  // handle results
  useEffect(() => {
    if (
      isCreateAgreementError ||
      isCreateAgreementPrepareError ||
      isApproveTokenError ||
      isApprovePrepareError
    ) {
      setErrorMessage(
        (
          approveTokenError ||
          approveTokenPrepareError ||
          createAgreementError ||
          createAgreementPrepareError
        )?.message
      );
      setIsError(true);
    }
  }, [
    isCreateAgreementError,
    isCreateAgreementPrepareError,
    isApproveTokenError,
    isApprovePrepareError,
    approveTokenError,
    approveTokenPrepareError,
  ]);

  // create agreement
  useEffect(() => {
    if (isTokenApproveSuccess && isCreateAgreementPrepareFetch) {
      createAgreement?.();
    }
  }, [isTokenApproveSuccess, isCreateAgreementPrepareFetch]);

  const reset = () => {
    resetApproveToken();
    resetCreateAgreement();
    setErrorMessage(undefined);
    setIsError(false);
  };

  // set state + approve token
  const coordinateCreateAgreement = (
    _tokenAddress: Address,
    _agreementCreationParams: AgreementCreationParams,
    _spenderAddress: Address = manager.address,
    _amount = ethers.constants.MaxUint256
  ) => {
    tokenAddress.current = _tokenAddress;
    agreementCreationParams.current = _agreementCreationParams;
    spenderAddress.current = _spenderAddress;
    amount.current = _amount;
    approveToken?.();
  };

  return {
    coordinateCreateAgreement,
    isError,
    errorMessage,
    reset,
    isTokenApprovePendingSignature,
    isTokenApproveMining,
    isTokenApproveSuccess,
    isCreateAgreementPendingSignature,
    isCreateAgreementMining,
    isCreateAgreementSuccess,
  };
};

export default useCoordinateCreateAgreement;
