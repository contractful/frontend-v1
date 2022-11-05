import type { NextPage } from "next";
import { useRouter } from "next/router";

import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Chip,
  Container,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

import ContractfulFooter from "../../components/Footer";
import ContractfulHeader from "../../components/Header";
import ContractfulHtmlHead from "../../components/HtmlHead";

import { BigNumber } from "ethers";
import { useEffect, useState } from "react";
import { useAccount, useWaitForTransaction } from "wagmi";

import ActivateAgreementStatus from "../../components/ActivateAgreement/ActivateAgreementStatus";
import ContractfulAgreementSummary from "../../components/AgreementSummary";
import SnackbarAlert from "../../components/general/SnackbarAlert";
import ActionSection from "../../components/Review/ActionSection";
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AutorenewIcon from '@mui/icons-material/Autorenew';

import useActivateAgreement from "../../hooks/useActivateAgreement";
import useGetAgreementParameters from "../../hooks/useGetAgreementParameters";
import useGetAgreementState from "../../hooks/useGetAgreementState";

enum AgreementStatus {
  ReadyToConsent,
  ActiveForServiceProvider,
  ActiveForClient,
  DueToBeExtended,
  Challenged
}

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

  const { agreementId } = router.query;

  const { data: agreementParameters } = useGetAgreementParameters(
    agreementId ? BigNumber.from(agreementId) : undefined
  );

  const { data: agreementState } = useGetAgreementState(
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
    return address !== undefined;
  };

  // State of ConfirmDialog

  const [confirmOpen, setConfirmOpen] = useState<{
    dialogTitle: string;
    dialogBody: string;
    cancelCaption: string;
    okCaption: string;
    okFunc: () => {};
  }>();

  const confirmDialogCancel = () => {
    setConfirmOpen(undefined);
  };
  const confirmDialogOk = () => {
    setConfirmOpen(undefined);
    confirmOpen?.["okFunc"]();
  };
  const showConfirmDialog = (data: any) => {
    setConfirmOpen(data);
  };

  // Status of the Agreement

  // TODO infer status from (1) connected Wallet with (2) contract data from blockchain
  const agreementStatus: AgreementStatus = AgreementStatus.ReadyToConsent;

  return (
    <>
      <ContractfulHtmlHead />
      <CssBaseline />
      <ContractfulHeader />

      <Container
          sx={{
            mt: 4
          }}
        >
        <Typography variant="h6">👋 Welcome - please go ahead to review Hiring Agreement and take action, if needed.</Typography>
      </Container>

      <Container
        sx={{
          mt: 4,
        }}
      >
        <Stepper
          activeStep={isWalletConnected() ? 1 : 0}
          orientation="vertical"
        >
          <Step key="1" active={true} completed={isWalletConnected()}>
            <StepLabel>Your Wallet</StepLabel>
            <StepContent>
              <Grid container pt={2} pl={3}>
                <Grid item xs>
                  <Stack direction="column">
                      {isWalletConnected() ? (
                        
                        <Stack direction="column" spacing={1}>
                          <Stack direction="row" spacing={1}>
                            <VerifiedUserIcon />
                            <Typography>
                              Connected
                            </Typography>
                            <Chip
                              label={address}
                              variant="outlined"
                              sx={{
                                mb:1
                              }}
                            />
                          </Stack>
                          <Typography>
                            Please proceed to review your Hiring Agreement.
                          </Typography>
                        </Stack>

                      ) : (
                      <Stack direction="row" spacing={1}>
                        <LocalPoliceIcon />
                        <Typography>
                            Please connect your Wallet to review your Hiring Agreement.
                        </Typography>
                      </Stack>
                    )}
                    </Stack>
                </Grid>
              </Grid>
            </StepContent>
          </Step>
          <Step key="2" active={isWalletConnected()} completed={false}>
            <StepLabel>Contract</StepLabel>
            <StepContent>

              <Stack direction="row" spacing={1} pt={2} pl={3}>
                <AutorenewIcon />
                <Typography>
                  Please review the status of your Hiring Agreement and take action if needed.
                </Typography>
              </Stack>
              
              <Grid container pt={2} pl={3}>
                <Grid item xs={9}>

                  {(agreementStatus === AgreementStatus.ReadyToConsent) && (
                    <>
                    <Alert severity="error">
                      <AlertTitle sx={{ pb:2 }}>Status summary of your Hiring Agreement</AlertTitle>
                      <Stack direction="column" spacing={1}>
                        <Typography>
                            ✅ Funds have been committed to this Hiring Agreement by your client.
                        </Typography>
                        <Typography>
                            ❌ You have not consented to the Hiring Agreement yet.
                        </Typography>
                        <Typography sx={{ pt:2 }}>
                          <b>What's next?</b>
                        </Typography>
                        <Typography>
                            👉 Go ahead to review all details of the Hiring Agreement below. You can then choose to consent to it.
                        </Typography>
                      </Stack>
                    </Alert>
                    </>
                  )}

                  {(agreementStatus === AgreementStatus.ActiveForServiceProvider) && (
                    <>
                    <Alert severity="success">
                      <AlertTitle sx={{ pb:2 }}>Status summary of your Hiring Agreement</AlertTitle>
                      <Stack direction="column" spacing={1}>
                        <Typography>
                          ✅ Funds have been committed to this Hiring Agreement by your client.
                        </Typography>
                        <Typography>
                         ✅ You have consented to the Hiring Agreement.
                       </Typography>
                       <Typography
                         variant="h6"
                         sx={{
                          pt:2,
                        }}
                        >
                        🎉 Well done. Nothing to do. Enjoy your collaboration.
                       </Typography>
                      </Stack>
                    </Alert>
                    </>
                  )}

                  {(agreementStatus === AgreementStatus.ActiveForClient) && (
                    <>
                    <Alert severity="success">
                      <AlertTitle sx={{ pb:2 }}>Status summary of your Hiring Agreement</AlertTitle>
                      <Stack direction="column" spacing={1}>
                        <Typography>
                          ✅ Funds have been committed to this Hiring Agreement by your client.
                        </Typography>
                        <Typography>
                         ✅ Your service provider has consented to the Hiring Agreement.
                       </Typography>
                       <Typography>
                        👉 In case of a critical violation of the Agreement, you are able to review and challenge it.
                       </Typography>
                      </Stack>
                    </Alert>
                    </>
                  )}


                </Grid>
              </Grid>

              <Box pt={2} pl={3}>
                <ContractfulAgreementSummary
                      {...(agreementParameters ? agreementParameters : undefined)}
                    />
              </Box>

            </StepContent>
          </Step>
          <Step key="3" active={isWalletConnected()} completed={false}>
            {/* challengeDuration is hardcoded for now */}
            <ActionSection
              agreementParameters={agreementParameters}
              agreementState={agreementState}
              challengeDuration={BigNumber.from(24 * 60 * 60 * 5)}
              showConfirmDialog={showConfirmDialog}
              handleConsentToAgreement={handleConsentToAgreement}
            />
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

      <Dialog
        open={confirmOpen ? true : false}
        onClose={confirmDialogCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {confirmOpen?.["dialogTitle"]}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {confirmOpen?.["dialogBody"]}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={confirmDialogCancel}
            variant="contained"
            color="error"
            autoFocus
          >
            {confirmOpen?.["cancelCaption"]}
          </Button>
          <Button onClick={confirmDialogOk}>
            {confirmOpen?.["okCaption"]}
          </Button>
        </DialogActions>
      </Dialog>

      <ContractfulFooter />
    </>
  );
};

export default ReviewHiringAgreement;
