import type { NextPage } from "next";
import { useRouter } from "next/router";

import {
  Box,
  Button,
  Chip,
  Container,
  CssBaseline,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import BrushIcon from "@mui/icons-material/Brush";

import ContractfulFooter from "../../components/Footer";
import ContractfulHeader from "../../components/Header";
import ContractfulHtmlHead from "../../components/HtmlHead";
import StepNumberCircle from "../../components/StepNumberCircle";

import { BigNumber } from "ethers";
import { useEffect, useState } from "react";
import { useAccount, useWaitForTransaction } from "wagmi";
import ActivateAgreementStatus from "../../components/ActivateAgreement/ActivateAgreementStatus";
import ContractfulAgreementSummary from "../../components/AgreementSummary";
import SnackbarAlert from "../../components/general/SnackbarAlert";
import TrafficLight from "../../components/TrafficLight";
import useActivateAgreement from "../../hooks/useActivateAgreement";
import useGetAgreementParameters from "../../hooks/useGetAgreementParameters";

const ReviewHiringAgreement: NextPage = () => {
  const router = useRouter();
  const { address } = useAccount();
  const [
    openActivateAgreementStatusDialog,
    setOpenActivateAgreementStatusDialog,
  ] = useState<boolean>(false);
  const [snackbarAlertSeverity, setSnackbarAlertSeverity] = useState<
    "success" | "info" | "warning" | "error"
  >();
  const [openSnackbarAlert, setOpenSnackbarAlert] = useState<boolean>(false);

  const useCase =
    "useCase" in router.query ? router.query["useCase"] : "consent";

  const { agreementId } = router.query;

  const { data: agreementParameters } = useGetAgreementParameters(
    agreementId ? BigNumber.from(agreementId) : undefined
  );

  const {
    data: activateAgreementData,
    write: activateAgreement,
    reset: resetActivateAgreement,
    isPrepareError: isActivateAgreementPrepareError,
    isError: isActivateAgreementError,
    isLoading: isActivateAgreementPendingSignature,
    error: activateAgreementError,
    refetchPrepare: refetchPrepareActivateAgreement,
  } = useActivateAgreement(
    agreementId ? BigNumber.from(agreementId) : undefined
  );

  const {
    isLoading: isActivateAgreementMining,
    isSuccess: isActivateAgreementSuccess,
  } = useWaitForTransaction({
    hash: activateAgreementData?.hash,
  });

  useEffect(() => {
    if (isActivateAgreementError) {
      setSnackbarAlertSeverity("error");
      setOpenSnackbarAlert(true);
    }
    if (isActivateAgreementSuccess) {
      setSnackbarAlertSeverity("success");
      setOpenSnackbarAlert(true);
    }
  }, [isActivateAgreementSuccess, isActivateAgreementError]);

  const handleConsentToAgreement = () => {
    if (isActivateAgreementPrepareError) {
      refetchPrepareActivateAgreement();
    }
    resetActivateAgreement();
    if (!address) {
      setSnackbarAlertSeverity("error");
      setOpenSnackbarAlert(true);
      return;
    }
    setOpenActivateAgreementStatusDialog(true);
    activateAgreement?.();
  };

  const handleCloseActivateAgreementStatuses = () => {
    if (
      isActivateAgreementPrepareError ||
      isActivateAgreementError ||
      isActivateAgreementSuccess
    ) {
      setOpenActivateAgreementStatusDialog(false);
    }
  };

  return (
    <>
      <ContractfulHtmlHead />
      <CssBaseline />
      <ContractfulHeader />
      DEBUG useCase = {useCase}
      <Container>
        <Grid container pt={8}>
          <Grid item xs={1}>
            <StepNumberCircle>1</StepNumberCircle>
          </Grid>
          <Grid item xs>
            <Stack direction="row">
              <Typography variant="h6">👋 Welcome</Typography>
              <Chip
                label={address}
                variant="outlined"
                sx={{
                  ml: 2,
                }}
              />
            </Stack>
            <Typography pt={1}>
              {address !== undefined
                ? "Wallet connected. Please proceed with the creating a Hiring Agreement."
                : "Please connect your Wallet to start creating a Hiring Agreement."}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container pt={4}>
          <Grid item xs={1}>
            <StepNumberCircle>2</StepNumberCircle>
          </Grid>
          <Grid item xs>
            <Typography variant="h6">📝 Contract</Typography>
            <Stack
              direction="row"
              pt={1}
              sx={{
                width: "100%",
              }}
            >
              <TrafficLight RedOn Horizontal="false" />
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#D0021B",
                  color: "#fff",
                }}
                mx={4}
                px={2}
                variant="button"
              >
                ACTION NEEDED
              </Typography>

              <ul
                style={{
                  margin: "0",
                  padding: "0",
                  listStyleType: "none",
                }}
              >
                <li>✅ Funds have been committed to this Hiring Agreement.</li>
                <li>❌ You have not consented to the Hiring Agreement yet.</li>
              </ul>
            </Stack>
            <Typography pt={1} pb={4}>
              Please review all details of your Hiring Agreement carefully.
            </Typography>

            <ContractfulAgreementSummary
              {...(agreementParameters ? agreementParameters : undefined)}
            />
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container pt={4}>
          <Grid item xs={1}>
            <StepNumberCircle>3</StepNumberCircle>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs>
            <Typography
              py={1}
              sx={{
                textAlign: "center",
              }}
            >
              Please review your contract carefully.
              <br />
              If all details are correct, please proceed to consent to the
              Agreement.
            </Typography>
            <Stack spacing={2}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<BrushIcon />}
                fullWidth
                onClick={() => handleConsentToAgreement()}
              >
                Consent to the Agreement
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Container>
      <ActivateAgreementStatus
        open={openActivateAgreementStatusDialog}
        onClose={(e) => handleCloseActivateAgreementStatuses(e)}
        isActivateAgreementPendingSignature={
          isActivateAgreementPendingSignature
        }
        isActivateAgreementMining={isActivateAgreementMining}
        isActivateAgreementSuccess={isActivateAgreementSuccess}
      />
      <Box maxWidth={300}>
        <SnackbarAlert
          open={openSnackbarAlert}
          onClose={() => setOpenSnackbarAlert(false)}
          severity={snackbarAlertSeverity}
          message={
            isActivateAgreementError
              ? // We don't check for the prepare error because if the user is not the allowed contractor it will spam the
                // user with errors
                activateAgreementError?.message?.split("(")[0]
              : !address
              ? "Connect your wallet first"
              : "Your agreement is active! You can review it in your agreements page"
          }
        />
      </Box>
      <ContractfulFooter />
    </>
  );
};

export default ReviewHiringAgreement;
