import { useContractRead } from "wagmi";
import { deployments } from "../deployments";

const useGetEstablishmentFeeRate = () => {
  const manager = deployments.contracts.Manager;

  return useContractRead({
    address: manager.address,
    abi: manager.abi,
    functionName: "establishmentFeeRate",
  });
};

export default useGetEstablishmentFeeRate;
