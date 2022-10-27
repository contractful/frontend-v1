import { Box, Button, CircularProgress } from "@material-ui/core";
import { useAccount, useWaitForTransaction } from "wagmi";
import useActivateAgreement from "../../hooks/useActivateAgreement";
import useGetUserAgreements from "../../hooks/useGetUserAgreements";

type Props = {};

const ActivateAgreement = (props: Props) => {
  const { address } = useAccount();
  const { data: userAgreements } = useGetUserAgreements(address);

  console.log("lastAgreement", userAgreements?.at(-1));
  const {
    prepareError: activateAgreementPrepareError,
    isPrepareError: isActivateAgreementPrepareError,
    data: activateAgreementData,
    error: activateAgreementError,
    isError: isActivateAgreementError,
    isLoading: isActivateAgreementPendingSignature,
    write: activateAgreement,
    refetchPrepare: refetchActivateAgreementPrepare,
    reset,
  } = useActivateAgreement(userAgreements?.at(-1)); // activates last agreement

  const {
    isLoading: isActivateAgreementMining,
    isSuccess: isActivateAgreementSuccess,
  } = useWaitForTransaction({
    hash: activateAgreementData?.hash,
  });

  const handleActivateAgreement = async () => {
    if (isActivateAgreementPrepareError) {
      await refetchActivateAgreementPrepare();
    }
    // msg.sender must be the approved contractor
    activateAgreement?.();
  };

  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => handleActivateAgreement()}
      >
        {isActivateAgreementPendingSignature || isActivateAgreementMining ? (
          <CircularProgress />
        ) : (
          "Activate Agreement"
        )}
      </Button>
      The agreement must be created but not activated.
    </Box>
  );
};

export default ActivateAgreement;
