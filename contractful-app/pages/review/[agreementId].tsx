import * as React from 'react';
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
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Alert,
  AlertTitle,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@mui/material";

import BrushIcon from "@mui/icons-material/Brush";
import NotInterested from "@mui/icons-material/NotInterested"

import ContractfulFooter from "../../components/Footer";
import ContractfulHeader from "../../components/Header";
import ContractfulHtmlHead from "../../components/HtmlHead";

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

  // Helper (e.g. completion state of the Stepper)
  
  const isWalletConnected = () => {
    return (address !== undefined)
  }

  // State of ConfirmDialog

  const [confirmOpen, setConfirmOpen] = React.useState(false)
  const confirmDialogCancel = () =>{
    setConfirmOpen(false)
  }
  const confirmDialogOk = () => {
    setConfirmOpen(false)
    confirmOpen['okFunc']()
  }
  const showConfirmDialog = (data) => {
    setConfirmOpen(data)
  }

  return (
    <>
      <ContractfulHtmlHead />
      <CssBaseline />
      <ContractfulHeader />
      DEBUG useCase = {useCase}
      <Container sx={{
          mt:4
        }}
      >

        <Stepper
          activeStep={isWalletConnected() ? 1 : 0}
          orientation="vertical"
        >
          <Step
            key="1"
            active={true}
            completed={isWalletConnected()}
          >
            <StepLabel>
              Connect Wallet
            </StepLabel>
            <StepContent>
              <Grid container pt={2} pl={3}>
                <Grid item xs>
                  <Stack direction="row">
                    <Typography variant="h6">👋 Welcome</Typography>
                    {isWalletConnected() &&
                    <Chip
                      label={address}
                      variant="outlined"
                      sx={{
                        ml: 2,
                      }}
                    />}
                  </Stack>
                  <Typography pt={1}>
                    {address !== undefined
                      ? "Wallet connected. Please proceed with the creating a Hiring Agreement."
                      : "Please connect your Wallet to start creating a Hiring Agreement."}
                  </Typography>
                </Grid>
              </Grid>
            </StepContent>
          </Step>

          <Step
            key="2"
            active={isWalletConnected()}
            completed={false}
          >
            <StepLabel>
              Review Hiring Agreement
            </StepLabel>
            <StepContent>
              <Grid container pt={2} pl={3}>
                <Grid item xs>
                  <Typography variant="h6">📝 Contract status</Typography>
                  <Stack
                    direction="row"
                    pt={1}
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TrafficLight RedOn Horizontal={true} />
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
            </StepContent>
          </Step>

          <Step
            key="3"
            active={isWalletConnected()}
            completed={false}
          >
            <StepLabel>
              {"Choose to consent to the Hiring Agreement"}
            </StepLabel>
            <StepContent>
              <Grid container pt={2}>
                <Grid item xs={2}></Grid>
                <Grid item xs>
                  <Alert severity="info">
                    <AlertTitle>Please review the Agreement carefully.</AlertTitle>
                    If all details are correct, you can continue to consent to the
                    Agreement.
                  </Alert>
                  <Stack pt={2} spacing={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      startIcon={<BrushIcon />}
                      fullWidth
                      onClick={() => {
                        showConfirmDialog({
                          dialogTitle: 'Are you sure you want to consent to the Hiring Agreement?',
                          dialogBody: 'The underlying Smart Contract becomes active by consenting to the Agreement. The Agreement is binding for both parties.',
                          cancelCaption: 'Cancel',
                          okCaption: 'Consent to Agreement',
                          okFunc: (() => {
                            handleConsentToAgreement()
                          })
                        })
                        }}
                    >
                      Consent to the Agreement
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        size="large"
                        startIcon={<NotInterested />}
                        fullWidth
                        onClick={() => {
                          showConfirmDialog({
                            dialogTitle: 'Are you sure you want to decline the Hiring Agreement?',
                            dialogBody: 'Declining the Hiring Agreement invalidates the Smart Contract to which the budget has been transfered. Be very sure you really want to decline the Hiring Agreement.',
                            cancelCaption: 'Cancel',
                            okCaption: 'Really decline Agreement',
                            okFunc: (() => {
                              console.log('DEBUG In okFunc')
                            })
                          })
                          }}
                        >
                        Decline Agreement
                    </Button>
                  </Stack>
                </Grid>
                <Grid item xs={3}></Grid>
              </Grid>
            </StepContent>
          </Step>
        </Stepper>
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

      <Dialog
          open={confirmOpen}
          onClose={confirmDialogCancel}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            {confirmOpen['dialogTitle']}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {confirmOpen['dialogBody']}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={confirmDialogCancel} variant="contained" color="error" autoFocus>
                {confirmOpen['cancelCaption']}
            </Button>
            <Button onClick={confirmDialogOk}>
                {confirmOpen['okCaption']}
            </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ReviewHiringAgreement;
