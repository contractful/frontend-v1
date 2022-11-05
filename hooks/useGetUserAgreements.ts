import { useContractRead } from "wagmi";
import { deployments } from "../deployments";
import { Address } from "../utils/types";

const useGetUserAgreements = (address: Address | undefined) => {
  const manager = deployments.contracts.Manager;

  return useContractRead({
    address: manager.address,
    abi: manager.abi,
    functionName: "getUserAgreements",
    // Since we are using the enabled flag, we can pass undefined as the param. However to make use of typescript
    // we cast undefined as Address
    args: [address ? address : (address as unknown as Address)],
    enabled: address ? true : false,
  });
};

export default useGetUserAgreements;
