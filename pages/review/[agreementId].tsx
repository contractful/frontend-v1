import SecurityIcon from "@mui/icons-material/Security";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
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

import { BigNumber } from "ethers";
import { useEffect, useState } from "react";
import { useAccount, useWaitForTransaction } from "wagmi";

import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ActivateAgreementStatus from "../../components/ActivateAgreement/ActivateAgreementStatus";
import ContractfulAgreementSummary from "../../components/AgreementSummary";
import SnackbarAlert from "../../components/general/SnackbarAlert";
import ActionSection from "../../components/Review/ActionSection";

import TransactionStatus from "../../components/general/TransactionStatus";
import ContractfulHtmlHead from "../../components/HtmlHead";
import useActivateAgreement from "../../hooks/useActivateAgreement";
import useCancelAgreement from "../../hooks/useCancellAgreement";
import useChallengeAgreement from "../../hooks/useChallengeAgreement";
import useGetAgreementParameters from "../../hooks/useGetAgreementParameters";
import useGetAgreementState from "../../hooks/useGetAgreementState";

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
  const [transactionState, setTransactionState] = useState({
    title: "",
    open: false,
  });

  enum AgreementProcessedState {
    inactive,
    closed,
    challenged,
    active,
    confidential,
  }

  const [agreementProcessedState, setAgreementProcessedState] =
    useState<AgreementProcessedState>();

  const { agreementId } = router.query;

  const { data: agreementParameters, refetch: refetchAgreementParameters } =
    useGetAgreementParameters(
      agreementId ? BigNumber.from(agreementId) : undefined
    );

  const { data: agreementState, refetch: refetchAgreementState } =
    useGetAgreementState(agreementId ? BigNumber.from(agreementId) : undefined);

  // in the smart contract an agreement can have multiple states at the same time, so the order of the if statements is important
  useEffect(() => {
    if (agreementParameters && agreementState && address) {
      if (
        ![
          agreementParameters.contractor,
          agreementParameters.contractee,
        ].includes(address)
      ) {
        setAgreementProcessedState(AgreementProcessedState.confidential);
      } else if (agreementState.closed) {
        setAgreementProcessedState(AgreementProcessedState.closed);
      } else if (agreementState.challenged) {
        setAgreementProcessedState(AgreementProcessedState.challenged);
      } else if (agreementState.active) {
        setAgreementProcessedState(AgreementProcessedState.active);
      } else if (!agreementState.active) {
        if (
          new Date(Date.now()) >
          new Date(
            parseInt(agreementParameters.beginningDate.toString()) * 1000
          )
        ) {
          setAgreementProcessedState(AgreementProcessedState.closed);
        } else {
          setAgreementProcessedState(AgreementProcessedState.inactive);
        }
      }
    }
  }, [
    agreementState,
    agreementParameters,
    address,
    agreementProcessedState,
    AgreementProcessedState,
  ]);

  // Activate agreement
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
      refetchAgreementParameters();
      refetchAgreementState();
    }
  }, [
    isActivateAgreementSuccess,
    isActivateAgreementError,
    refetchAgreementParameters,
    refetchAgreementState,
  ]);

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

  // Cancel Agreement
  const {
    data: cancelAgreementData,
    write: cancelAgreement,
    reset: resetCancelAgreement,
    isPrepareError: isCancelAgreementPrepareError,
    isError: isCancelAgreementError,
    isLoading: isCancelAgreementPendingSignature,
    error: cancelAgreementError,
    refetchPrepare: refetchPrepareCancelAgreement,
  } = useCancelAgreement(agreementId ? BigNumber.from(agreementId) : undefined);

  const {
    isLoading: isCancelAgreementMining,
    isSuccess: isCancelAgreementSuccess,
  } = useWaitForTransaction({
    hash: cancelAgreementData?.hash,
  });

  const handleCancelAgreement = () => {
    if (isCancelAgreementPrepareError) {
      refetchPrepareCancelAgreement();
    }
    resetCancelAgreement();
    if (!address) {
      setSnackbarAlertSeverity("error");
      setOpenSnackbarAlert(true);
      return;
    }
    setTransactionState({
      ...transactionState,
      title: "Cancel Agreement",
      open: true,
    });
    cancelAgreement?.();
  };

  useEffect(() => {
    if (isCancelAgreementError) {
      setSnackbarAlertSeverity("error");
      setOpenSnackbarAlert(true);
    }
    if (isCancelAgreementSuccess) {
      setSnackbarAlertSeverity("success");
      setOpenSnackbarAlert(true);
      refetchAgreementParameters();
      refetchAgreementState();
    }
  }, [
    isCancelAgreementSuccess,
    isCancelAgreementError,
    refetchAgreementParameters,
    refetchAgreementState,
  ]);

  const handleCloseActivateAgreementStatuses = () => {
    if (
      isActivateAgreementPrepareError ||
      isActivateAgreementError ||
      isActivateAgreementSuccess
    ) {
      setOpenActivateAgreementStatusDialog(false);
    }
  };

  const handleCloseTransactionStatuses = () => {
    if (
      isCancelAgreementPrepareError ||
      isCancelAgreementError ||
      isCancelAgreementSuccess ||
      isChallengeAgreementError ||
      isChallengeAgreementSuccess ||
      isChallengeAgreementPrepareError
    ) {
      setTransactionState({
        ...transactionState,
        open: false,
      });
    }
  };

  // Challenge Agreement
  const {
    data: challengeAgreementData,
    write: challengeAgreement,
    reset: resetChallengeAgreement,
    isPrepareError: isChallengeAgreementPrepareError,
    isError: isChallengeAgreementError,
    isLoading: isChallengeAgreementPendingSignature,
    error: challengeAgreementError,
    refetchPrepare: refetchPrepareChallengeAgreement,
  } = useChallengeAgreement(
    agreementId ? BigNumber.from(agreementId) : undefined
  );

  const {
    isLoading: isChallengeAgreementMining,
    isSuccess: isChallengeAgreementSuccess,
  } = useWaitForTransaction({
    hash: challengeAgreementData?.hash,
  });

  const handleChallengeAgreement = () => {
    if (isChallengeAgreementPrepareError) {
      refetchPrepareChallengeAgreement();
    }
    resetChallengeAgreement();
    if (!address) {
      setSnackbarAlertSeverity("error");
      setOpenSnackbarAlert(true);
      return;
    }
    setTransactionState({
      ...transactionState,
      title: "Challenge Agreement",
      open: true,
    });
    challengeAgreement?.();
  };

  useEffect(() => {
    if (isChallengeAgreementError) {
      setSnackbarAlertSeverity("error");
      setOpenSnackbarAlert(true);
    }
    if (isChallengeAgreementSuccess) {
      setSnackbarAlertSeverity("success");
      setOpenSnackbarAlert(true);
      refetchAgreementParameters();
      refetchAgreementState();
    }
  }, [
    isChallengeAgreementSuccess,
    isChallengeAgreementError,
    refetchAgreementParameters,
    refetchAgreementState,
  ]);

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

  // Stepper step 3 logic

  const renderStep3 = () => {
    if (
      [
        AgreementProcessedState.closed,
        AgreementProcessedState.challenged,
      ].includes(agreementProcessedState as AgreementProcessedState) &&
      agreementProcessedState
    ) {
      return;
    }

    if (
      address === agreementParameters?.contractor &&
      agreementProcessedState === AgreementProcessedState.active
    ) {
      return;
    }

    return (
      <Step key="3" active={isWalletConnected()} completed={false}>
        {/* challengeDuration is hardcoded for now */}
        <ActionSection
          agreementParameters={agreementParameters}
          agreementState={agreementState}
          challengeDuration={BigNumber.from(24 * 60 * 60 * 5)}
          showConfirmDialog={showConfirmDialog}
          handleConsentToAgreement={handleConsentToAgreement}
          handleCancelAgreement={handleCancelAgreement}
          handleChallengeAgreement={handleChallengeAgreement}
        />
      </Step>
    );
  };

  // Status of the Agreement

  const renderAgreement = () => {
    if (!agreementParameters) {
      return (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CircularProgress size={100} />
        </Box>
      );
    }
    if (
      ![
        agreementParameters.contractor,
        agreementParameters.contractee,
      ].includes(address)
    ) {
      return (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <SecurityIcon sx={{ fontSize: 120 }} />
            <Typography variant="h1" component="span">
              Confidential
            </Typography>
          </Stack>
        </Box>
      );
    }

    return (
      <>
        <>
          <Container
            sx={{
              mt: 4,
            }}
          >
            <Typography variant="h6">
              👋 Welcome - please go ahead to review Hiring Agreement and take
              action, if needed.
            </Typography>
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
                              <Typography>Connected</Typography>
                              <Chip
                                label={address}
                                variant="outlined"
                                sx={{
                                  mb: 1,
                                }}
                              />
                            </Stack>
                            <Typography>
                              You can proceed to review your Hiring Agreement.
                            </Typography>
                          </Stack>
                        ) : (
                          <Stack direction="row" spacing={1}>
                            <LocalPoliceIcon />
                            <Typography>
                              Please connect your Wallet to review your Hiring
                              Agreement.
                            </Typography>
                          </Stack>
                        )}
                      </Stack>
                    </Grid>
                  </Grid>
                </StepContent>
              </Step>
              <Step key="2" active={isWalletConnected()} completed={false}>
                <StepLabel>Contract Summary</StepLabel>
                <StepContent>
                  <Grid container pt={2} pl={3}>
                    <Grid item xs={12}>
                      {agreementParameters?.contractor === address ? (
                        <>
                          <Alert
                            severity={
                              [
                                AgreementProcessedState.closed,
                                AgreementProcessedState.inactive,
                                AgreementProcessedState.challenged,
                              ].includes(
                                agreementProcessedState as AgreementProcessedState
                              )
                                ? "error"
                                : "success"
                            }
                          >
                            <AlertTitle sx={{ pb: 2 }}>
                              Status summary of your Hiring Agreement
                            </AlertTitle>
                            {agreementProcessedState ==
                            AgreementProcessedState.closed ? (
                              <Typography>
                                ❌ The agreement is closed
                              </Typography>
                            ) : agreementProcessedState ==
                              AgreementProcessedState.challenged ? (
                              <>
                                <Typography sx={{ pb: 2 }}>
                                  ❌ The agreement has been challenged
                                </Typography>
                                <Typography>
                                  The Contractful DAO will review the agreement
                                  and split the fund accordingly.
                                </Typography>
                              </>
                            ) : (
                              <Stack direction="column" spacing={1}>
                                <Typography>
                                  ✅ Funds have been committed to this Hiring
                                  Agreement by your client.
                                </Typography>
                                {agreementProcessedState ==
                                AgreementProcessedState.inactive ? (
                                  <>
                                    <Typography>
                                      ❌ You have not consented to the Hiring
                                      Agreement yet.
                                    </Typography>
                                    <Typography sx={{ pt: 2 }}>
                                      <b>What&apos;s next?</b>
                                    </Typography>
                                    <Typography>
                                      👉 Go ahead to review all details of the
                                      Hiring Agreement below. You can then
                                      choose to consent to it.
                                    </Typography>
                                  </>
                                ) : (
                                  <>
                                    <Typography>
                                      ✅ You have consented to the Hiring
                                      Agreement.
                                    </Typography>
                                    <Typography
                                      variant="h6"
                                      sx={{
                                        pt: 2,
                                      }}
                                    >
                                      🎉 Well done. Nothing to do. Enjoy your
                                      collaboration.
                                    </Typography>
                                  </>
                                )}
                              </Stack>
                            )}
                          </Alert>
                        </>
                      ) : (
                        agreementParameters?.contractee === address && (
                          <>
                            <Alert
                              severity={
                                [
                                  AgreementProcessedState.closed,
                                  AgreementProcessedState.inactive,
                                ].includes(
                                  agreementProcessedState as AgreementProcessedState
                                )
                                  ? "error"
                                  : "success"
                              }
                            >
                              <AlertTitle sx={{ pb: 2 }}>
                                Status summary of your Hiring Agreement
                              </AlertTitle>
                              <Stack direction="column" spacing={1}>
                                {agreementProcessedState !==
                                  AgreementProcessedState.closed && (
                                  <Typography>
                                    ✅ Agreement created and funds secured.
                                  </Typography>
                                )}
                                {agreementProcessedState ==
                                AgreementProcessedState.closed ? (
                                  <Typography>
                                    ❌ The agreement is closed
                                  </Typography>
                                ) : agreementProcessedState ==
                                  AgreementProcessedState.inactive ? (
                                  <Typography>
                                    ❌ The service provider has not consented to
                                    the agreement yet.
                                  </Typography>
                                ) : (
                                  <>
                                    <Typography>
                                      ✅ Your service provider has consented to
                                      the Hiring Agreement.
                                    </Typography>
                                    <Typography>
                                      👉 In case of a critical violation of the
                                      Agreement, you are able to review and
                                      challenge it.
                                    </Typography>
                                  </>
                                )}
                              </Stack>
                            </Alert>
                          </>
                        )
                      )}
                    </Grid>
                  </Grid>

                  <Box pt={2} pl={3}>
                    <ContractfulAgreementSummary
                      {...(agreementParameters
                        ? agreementParameters
                        : undefined)}
                    />
                  </Box>
                </StepContent>
              </Step>

              {renderStep3()}
            </Stepper>
          </Container>
        </>
        <ActivateAgreementStatus
          open={openActivateAgreementStatusDialog}
          onClose={(e) => handleCloseActivateAgreementStatuses(e)}
          isActivateAgreementPendingSignature={
            isActivateAgreementPendingSignature
          }
          isActivateAgreementMining={isActivateAgreementMining}
          isActivateAgreementSuccess={isActivateAgreementSuccess}
        />
        <TransactionStatus
          open={transactionState.open}
          onClose={(e) => handleCloseTransactionStatuses(e)}
          isTransactionPendingSignature={
            isCancelAgreementPendingSignature ||
            isChallengeAgreementPendingSignature
          }
          isTransactionMining={
            isCancelAgreementMining || isChallengeAgreementMining
          }
          isTransactionSuccess={
            isCancelAgreementSuccess || isChallengeAgreementSuccess
          }
          title={transactionState.title}
        />
        <Box maxWidth={300}>
          <SnackbarAlert
            open={openSnackbarAlert}
            onClose={() => setOpenSnackbarAlert(false)}
            severity={snackbarAlertSeverity}
            message={
              isActivateAgreementError ||
              isCancelAgreementError ||
              isChallengeAgreementError
                ? // We don't check for the prepare error because if the user is not the allowed contractor it will spam the

                  // user with errors
                  (
                    activateAgreementError ||
                    cancelAgreementError ||
                    challengeAgreementError
                  )?.message?.split("(")[0]
                : !address
                ? "Connect your wallet first"
                : isActivateAgreementSuccess
                ? "Your agreement is active! You can review it in your agreements page"
                : isCancelAgreementSuccess
                ? "Your agreement has been cancelled"
                : isCancelAgreementSuccess
                ? "Your agreement has been challenged"
                : ""
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
      </>
    );
  };

  return (
    <>
      <ContractfulHtmlHead />
      {renderAgreement()};
    </>
  );
};

export default ReviewHiringAgreement;
