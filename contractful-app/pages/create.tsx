import type { NextPage } from "next";
import * as React from "react";

import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Select,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import WalletIcon from "@mui/icons-material/Wallet";
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';

import Diversity3Icon from "@mui/icons-material/Diversity3";
import TocIcon from "@mui/icons-material/Toc";
import { BigNumber, ethers } from "ethers";
import { FormEvent, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Address } from "../../utils/types";
import CreateAgreementStatus from "../components/CreateAgreement/CreateAgreementStatus";
import ContractfulFooter from "../components/Footer";
import SnackbarAlert from "../components/general/SnackbarAlert";
import ContractfulHeader from "../components/Header";
import ContractfulHtmlHead from "../components/HtmlHead";
import { deployments } from "../deployments";
import useCoordinateCreateAgreement from "../hooks/useCoordinateCreateAgreement";

const CreateHiringAgreement: NextPage = () => {
  // hard-coded for now
  const { address } = useAccount();
  const [selectedToken, setSelectedToken] = useState<Address>(
    "0x10055ef62E88eF68b5011F4c7b5Ab9B99f00BB40"
  );
  const [openStatusesDialog, setOpenStatusesDialog] = useState<boolean>(false);
  const [openSnackbarAlert, setOpenSnackbarAlert] = useState<boolean>(false);
  const [snackbarAlertSeverity, setSnackbarAlertSeverity] = useState<
    "success" | "info" | "warning" | "error"
  >();

  const {
    coordinateCreateAgreement,
    reset,
    isError,
    errorMessage,
    isTokenApprovePendingSignature,
    isTokenApproveMining,
    isTokenApproveSuccess,
    isCreateAgreementPendingSignature,
    isCreateAgreementMining,
    isCreateAgreementSuccess,
  } = useCoordinateCreateAgreement();

  const manager = deployments.contracts.Manager;

  const handleCreateAgreementSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    reset();
    if (!address) {
      setSnackbarAlertSeverity("error");
      setOpenSnackbarAlert(true);
      return;
    }

    setOpenStatusesDialog(true);

    // deconstruct form data
    const {
      acceptancePeriod,
      beginningDate,
      engagementPeriod,
      paymentCycleDuration,
      hourlyRate,
      contractor,
    } = e.target as typeof e.target & {
      acceptancePeriod: { value: string };
      beginningDate: { value: string };
      engagementPeriod: { value: string };
      paymentCycleDuration: { value: string };
      hourlyRate: { value: string };
      contractor: { value: Address };
    };

    console.log("beginningDate", beginningDate.value);
    coordinateCreateAgreement(
      selectedToken,
      {
        acceptanceDeadline: BigNumber.from(
          Math.round(
            Date.now() / 1000 + parseInt(acceptancePeriod.value) * 86400
          ) // days
        ),
        beginningDate: BigNumber.from(
          Math.round(Date.parse(beginningDate.value) / 1000)
        ),
        maturityDate: BigNumber.from(
          Math.round(
            Date.now() / 1000 + parseInt(engagementPeriod.value) * 86400 * 30
          ) // months
        ),
        paymentCycleDuration: BigNumber.from(
          Math.round(parseInt(paymentCycleDuration.value))
        ),
        paymentCycleAmount: BigNumber.from(
          Math.round(
            parseInt(hourlyRate.value) * parseInt(paymentCycleDuration.value)
          )
        ),
        underlayingToken: selectedToken,
        contractor: contractor.value,
        descriptionURI: "IPFS",
      },
      manager.address,
      ethers.constants.MaxUint256
    );
  };

  const handleCloseCreateAgreementStatuses = (e) => {
    if (isError || isCreateAgreementSuccess || !address) {
      setOpenStatusesDialog(false);
    }
  };

  useEffect(() => {
    if (isError) {
      setSnackbarAlertSeverity("error");
      setOpenSnackbarAlert(true);
    }
    if (isCreateAgreementSuccess) {
      setSnackbarAlertSeverity("success");
      setOpenSnackbarAlert(true);
    }
  }, [isCreateAgreementSuccess, isError]);

  // Helper (e.g. completion state of the Stepper)

  const isWalletConnected = () => {
    return address !== undefined;
  };

  // Model constants

  const PAYMENT_TERMS_2WEEKS = 14 * 24 * 60 * 60;

  // State of ConfirmDialog

  const [betaDialogOpen, setBetaDialogOpen] = React.useState(false);
  const betaDialogOk = () => {
    setBetaDialogOpen(false);
  };
  const showBetaDialog = () => {
    setBetaDialogOpen(true);
  };

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
        <Typography variant="h6">👋 Welcome - start here to create and deploy a Hiring Agreement.</Typography>
      </Container>

      <form onSubmit={(e) => handleCreateAgreementSubmit(e)}>
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
              <StepLabel>
                Your Wallet
              </StepLabel>
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
                            Please proceed to securely create a Hiring Agreement.
                          </Typography>
                        </Stack>

                      ) : (
                      <Stack direction="row" spacing={1}>
                        <LocalPoliceIcon />
                        <Typography>
                            Please connect your Wallet to securely create a Hiring Agreement.
                        </Typography>
                      </Stack>
                    )}
                    </Stack>

                  </Grid>
                </Grid>
              </StepContent>
            </Step>

            <Step key="2" active={isWalletConnected()} completed={false}>
              <StepLabel>
                Contract
              </StepLabel>
              <StepContent>
                <Grid container pt={2} pl={3}>
                  <Grid item xs>

                    <Stack direction="row" spacing={1} mb={4}>
                      <StickyNote2OutlinedIcon />
                      <Typography>
                        Please fill in the details of the Hiring Agreement.
                      </Typography>
                    </Stack>

                    <Paper elevation={12} sx={{
                        mb: 4
                      }}
                    >
                      <FormControl
                        variant="standard"
                        onSubmit={(e) => handleCreateAgreementSubmit(e)}
                      >
                        <Box
                          px={4}
                          pt={4}
                        >
                          <WalletIcon
                            sx={{
                              color: "action.active",
                              mr: 1,
                              mt: 2
                            }}
                          />
                          <TextField
                            id="input-service-provider-addr"
                            label="Ethereum public address or ENS name of your service provider"
                            variant="outlined"
                            sx={{
                              width: "80vh",
                            }}
                            name="contractor"
                          />
                        </Box>

                        <Box
                          px={4}
                          pt={4}
                        >
                          <TocIcon
                            sx={{
                              color: "action.active",
                              mr: 1,
                              mt: 2
                            }}
                          />
                          <TextField
                            id="contract-description"
                            name="description"
                            label="Detailed work and service deliverable description (plain text)"
                            multiline
                            rows={4}
                            sx={{
                              width: "80vh",
                            }}
                          />
                        </Box>

                        <Stack
                          px={4}
                          pt={4}
                          direction="row"
                        >
                          <Diversity3Icon
                            sx={{
                              color: "action.active",
                              mr: 1,
                              mt: 2
                            }}
                          />
                            <Card
                              sx={{
                                width: "80vh",
                              }}
                              variant="outlined"
                            >
                              <CardContent>
                                <Typography
                                  sx={{
                                    mb: 1.5
                                  }}
                                  color="text.secondary"
                                  variant="h6"
                                >
                                  The Hiring Agreement aims for a long-term
                                  collaboration relationship.
                                </Typography>
                                <Typography variant="body2">
                                  <ul>
                                    <li>
                                      The arrangement is planned for several
                                      months (usually 1-3, up to 6 and even more
                                      months).
                                    </li>
                                    <li>
                                      The project is organized in 2 weeks sprint
                                      iterations.
                                    </li>
                                    <li>
                                      Payment will be handled correspondingly by
                                      the smart contract.
                                    </li>
                                  </ul>
                                </Typography>

                                <Divider />

                                <Typography
                                  sx={{
                                    my: 1.5,
                                  }}
                                  color="text.secondary"
                                  variant="h6"
                                >
                                  Contractual details of the arrangement:
                                </Typography>

                                <Stack
                                  direction="row"
                                  sx={{
                                    alignItems: "flex-end",
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      width: "30%",
                                    }}
                                    variant="body2"
                                  >
                                    Engagement period:
                                  </Typography>
                                  <TextField
                                    id="input-engagement-period"
                                    name="engagementPeriod"
                                    inputProps={{
                                      inputMode: "numeric",
                                      pattern: "[0-9]*",
                                    }}
                                    defaultValue="3"
                                    label="Months"
                                    type="number"
                                    variant="standard"
                                  />
                                </Stack>

                                <Stack
                                  direction="row"
                                  sx={{
                                    alignItems: "flex-end",
                                  }}
                                  pt={4}
                                >
                                  <Typography
                                    sx={{
                                      width: "30%",
                                    }}
                                    variant="body2"
                                  >
                                    Engagement begins on:
                                  </Typography>
                                  <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                  >
                                    <DesktopDatePicker
                                      label="Date"
                                      inputFormat="MM/DD/YYYY"
                                      value={"11/20/2022"}
                                      onChange={() => {}}
                                      renderInput={(params) => (
                                        <TextField
                                          name="beginningDate"
                                          {...params}
                                          variant="standard"
                                        />
                                      )}
                                    />
                                  </LocalizationProvider>
                                </Stack>

                                <Stack
                                  direction="row"
                                  sx={{
                                    alignItems: "flex-end",
                                  }}
                                  pt={4}
                                >
                                  <Typography
                                    sx={{
                                      width: "30%",
                                    }}
                                    variant="body2"
                                  >
                                    Working hours:
                                  </Typography>

                                  <FormControl sx={{ width: "50%" }}>
                                    <InputLabel id="label-select-commitment">
                                      Commitment
                                    </InputLabel>
                                    <Select
                                      labelId="label-select-commitment"
                                      id="select-commitment"
                                      label="Commitment"
                                      variant="standard"
                                      defaultValue={40}
                                      onChange={(e) => {
                                        e.target.value !== 40 &&
                                          showBetaDialog();
                                      }}
                                      type="number"
                                    >
                                      <MenuItem value={40}>
                                        Full-time: 40 hours per week
                                      </MenuItem>
                                      <MenuItem value={20}>
                                        Part-time: 20 hours per week
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </Stack>

                                <Stack
                                  direction="row"
                                  sx={{
                                    alignItems: "flex-end",
                                  }}
                                  mt={4}
                                >
                                  <Typography
                                    sx={{
                                      width: "30%",
                                    }}
                                    variant="body2"
                                  >
                                    Acceptance period:
                                  </Typography>
                                  <TextField
                                    id="acceptance-period"
                                    name="acceptancePeriod"
                                    inputProps={{
                                      inputMode: "numeric",
                                      pattern: "[0-9]*",
                                    }}
                                    defaultValue="3"
                                    label="Days"
                                    variant="standard"
                                    type="number"
                                  />
                                </Stack>
                              </CardContent>
                            </Card>
                        </Stack>

                        <Stack
                          p={4}
                          direction="row"
                        >
                          <RequestQuoteIcon
                            sx={{
                              color: "action.active",
                              mr: 1,
                              mt: 4
                            }}
                          />
                          <Card
                            sx={{
                              width: "80vh",
                            }}
                            variant="outlined"
                          >
                            <CardContent>
                              <Typography
                                sx={{
                                  my: 1.5,
                                }}
                                color="text.secondary"
                                variant="h6"
                              >
                                Financial arrangement of the Hiring Agreement:
                              </Typography>

                              <Stack
                                direction="row"
                                sx={{
                                  alignItems: "flex-end",
                                }}
                              >
                                <Typography
                                  sx={{
                                    width: "30%",
                                  }}
                                  variant="body2"
                                >
                                  Compensation:
                                </Typography>

                                <TextField
                                  id="input-service-provider-addr"
                                  name="hourlyRate"
                                  label="Hourly rate"
                                  variant="standard"
                                  sx={{
                                    width: "15vh",
                                  }}
                                />
                                <Typography pl={4}>US$ (in DAI)</Typography>
                              </Stack>

                              <Stack
                                direction="row"
                                sx={{
                                  alignItems: "flex-end",
                                }}
                                py={4}
                              >
                                <Typography
                                  sx={{
                                    width: "30%",
                                  }}
                                  variant="body2"
                                >
                                  Payment terms:
                                </Typography>

                                <FormControl sx={{ width: "70%" }}>
                                  <InputLabel id="label-select-commitment">
                                    Terms
                                  </InputLabel>
                                  <Select
                                    labelId="label-select-commitment"
                                    id="select-commitment"
                                    name="paymentCycleDuration"
                                    label="Commitment"
                                    variant="standard"
                                    type="number"
                                    defaultValue={14 * 60}
                                    onChange={(e) => {
                                      e.target.value !== 14 * 60 &&
                                        showBetaDialog();
                                    }}
                                  >
                                    <MenuItem value={14 * 60}>
                                      <b style={{ color: "#d32f2f" }}>
                                        TESTING:
                                      </b>{" "}
                                      Payment in 14 minutes (imitating 2 weeks)
                                    </MenuItem>
                                    <MenuItem value={PAYMENT_TERMS_2WEEKS}>
                                      Payment every 2 weeks (after successful
                                      sprint review)
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Stack>

                              <Divider />

                              <Stack
                                direction="row"
                                sx={{
                                  alignItems: "flex-end",
                                }}
                                pt={4}
                              >
                                <Typography
                                  sx={{
                                    width: "30%",
                                  }}
                                  variant="body2"
                                >
                                  Resulting contract budget:
                                </Typography>

                                <TextField
                                  id="input-service-provider-addr"
                                  label="Budget"
                                  inputProps={{
                                    readOnly: true,
                                  }}
                                  defaultValue={12345.67}
                                  variant="standard"
                                  type="number"
                                  sx={{
                                    width: "15vh",
                                  }}
                                />
                                <Typography pl={4}>DAI</Typography>
                              </Stack>
                            </CardContent>
                          </Card>
                        </Stack>
                      </FormControl>
                    </Paper>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>

            <Step key="3" active={isWalletConnected()} completed={false}>
              <StepLabel>Create and deploy the Agreement to make it available</StepLabel>
              <StepContent>
                <Grid container pt={4} pl={3}>
                  <Grid item xs={9}>
                    <Alert severity="info">
                      <AlertTitle>Please review all details of the Hiring Agreement carefully.</AlertTitle>
                      If all details are correct, you can continue to create the
                      Agreement. The Agreement will then be deployed to Polygon and made available to your service provider.
                    </Alert>
                    <Stack pt={2}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<DriveFileRenameOutlineIcon />}
                        fullWidth
                        type="submit"
                      >
                        Create Agreement
                      </Button>
                    </Stack>
                  </Grid>
                  <Grid item xs></Grid>
                </Grid>
              </StepContent>
            </Step>
          </Stepper>
        </Container>
      </form>

      <CreateAgreementStatus
        open={openStatusesDialog}
        onClose={(e) => handleCloseCreateAgreementStatuses(e)}
        isTokenApprovePendingSignature={isTokenApprovePendingSignature}
        isTokenApproveMining={isTokenApproveMining}
        isTokenApproveSuccess={isTokenApproveSuccess}
        isCreateAgreementPendingSignature={isCreateAgreementPendingSignature}
        isCreateAgreementMining={isCreateAgreementMining}
        isCreateAgreementSuccess={isCreateAgreementSuccess}
      />

      <Box maxWidth={300}>
        <SnackbarAlert
          open={openSnackbarAlert}
          onClose={() => setOpenSnackbarAlert(false)}
          severity={snackbarAlertSeverity}
          message={
            errorMessage
              ? errorMessage.split("(")[0]
              : !address
              ? "Connect your wallet first"
              : "Your Agreement has been created! You can review it on your agreements page."
          }
        />
      </Box>

      <ContractfulFooter />

      <Dialog
        open={betaDialogOpen}
        onClose={betaDialogOk}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          contractful Hiring Agreement beta note
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Note: This is a beta implementation deployed to the Polygon Mumbai
            testnet. If you want to use this in production on mainnet, please
            visit{" "}
            <Link href="https://github.com/contractful" target="_new">
              https://github.com/contractful
            </Link>{" "}
            to get in touch.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={betaDialogOk} variant="text" autoFocus>
            Ok, thanks for the information
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateHiringAgreement;
