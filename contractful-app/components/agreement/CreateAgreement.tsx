import { Button, CircularProgress } from "@mui/material";
import { BigNumber } from "ethers";
import { parseEther } from "ethers/lib/utils";
import { AgreementCreationParams } from "../../../utils/types";
import { networkConfig } from "../../helper.config";
import useCoordinateCreateAgreement from "../../hooks/useCoordinateCreateAgreement";

type Props = {};

const CreateAgreement = (props: Props) => {
  // The owner needs to have enough fDAI
  // You can mint some test fDAI at https://mumbai.polygonscan.com/address/0x10055ef62E88eF68b5011F4c7b5Ab9B99f00BB40#writeContract
  const agreementCreationParams: AgreementCreationParams = {
    acceptanceDeadline: BigNumber.from(1698159887),
    maturityDate: BigNumber.from(1698159887),
    paymentCycleDuration: BigNumber.from(24 * 60 * 60 * 30),
    paymentCycleAmount: parseEther("1"),
    underlayingToken: networkConfig.mumbai.fDAI ?? "0x0",
    contractor: "0x9bB59188F4A0D8981E2b982a75B51b2DdE671054",
  } as const;

  const {
    coordinateCreateAgreement,
    isTokenApprovePendingSignature,
    isTokenApproveMining,
    isTokenApproveSuccess,
    isCreateAgreementPendingSignature,
    isCreateAgreementMining,
    isCreateAgreementSuccess,
  } = useCoordinateCreateAgreement();

  const handleCreateAgreement = async () => {
    coordinateCreateAgreement(
      networkConfig.mumbai.fDAI ?? "0x0",
      agreementCreationParams
    );
  };

  return (
    <Button
      variant="contained"
      size="large"
      color="primary"
      onClick={() => handleCreateAgreement?.()}
    >
      {isTokenApprovePendingSignature ||
      isTokenApproveMining ||
      isTokenApproveSuccess ||
      isCreateAgreementPendingSignature ||
      isCreateAgreementMining ||
      isCreateAgreementSuccess ? (
        <CircularProgress color="secondary" />
      ) : (
        "Create Agreement"
      )}
    </Button>
  );
};

export default CreateAgreement;
