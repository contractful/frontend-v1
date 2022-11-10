import { useContractRead } from "wagmi";
import { deployments } from "../deployments";

const useGetPenalizationAmount = () => {
  const manager = deployments.contracts.Manager;

  return useContractRead({
    address: manager.address,
    abi: manager.abi,
    functionName: "penalizationAmount",
  });
};

export default useGetPenalizationAmount;
