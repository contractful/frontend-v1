import { useContractRead } from "wagmi";
import { deployments } from "../deployments";
import { Address } from "../utils/types";
import { BigNumber } from "ethers";

const useGetUserAgreements = (address: Address | undefined, onSuccessFn: ( data: readonly BigNumber[] ) => void) => {
  const manager = deployments.contracts.Manager;

  return useContractRead({
    address: manager.address,
    abi: manager.abi,
    functionName: "getUserAgreements",
    // Since we are using the enabled flag, we can pass undefined as the param. However to make use of typescript
    // we cast undefined as Address
    args: [address ? address : (address as unknown as Address)],
    enabled: address ? true : false,
    onSuccess: (data) => {
      onSuccessFn(data);
    }
  });
};

export default useGetUserAgreements;
