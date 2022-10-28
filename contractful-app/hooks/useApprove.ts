import { BigNumber, ethers } from "ethers";
import { erc20ABI, useContractWrite, usePrepareContractWrite } from "wagmi";
import { Address } from "../../utils/types";

const useApprove = (
  tokenAddress: Address,
  spenderAddress: Address,
  amount: BigNumber = ethers.constants.MaxUint256
) => {
  const {
    config,
    isError: isPrepareError,
    error: prepareError,
  } = usePrepareContractWrite({
    address: tokenAddress,
    abi: erc20ABI,
    functionName: "approve",
    args: [spenderAddress, amount],
  });

  const { data, error, isError, isLoading, write, reset } =
    useContractWrite(config);

  return {
    prepareError,
    isPrepareError,
    data,
    error,
    isError,
    isLoading,
    write,
    reset,
  };
};

export default useApprove;
