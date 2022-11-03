import { NotInterested } from "@mui/icons-material";
import BrushIcon from "@mui/icons-material/Brush";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Grid,
  List,
  ListItem,
  Stack,
  StepContent,
  StepLabel,
  Typography,
} from "@mui/material";
import { BigNumber, ethers } from "ethers";
import { formatEther } from "ethers/lib/utils";
import { useAccount } from "wagmi";
import { AgreementParams } from "../../../utils/types";

type Props = {
  agreementParameters: AgreementParams;
  challengeDuration: BigNumber;
  showConfirmDialog: ({}) => void;
  handleConsentToAgreement: () => void;
};

const ActionSection = (props: Props) => {
  const {
    agreementParameters,
    challengeDuration,
    showConfirmDialog,
    handleConsentToAgreement,
  } = props;

  const { address } = useAccount();

  if (
    !agreementParameters ||
    agreementParameters.contractee === ethers.constants.AddressZero
  ) {
    return <></>;
  }

  const { activationDate, contractor } = agreementParameters;

  if (activationDate.toString() == "0" && address == contractor) {
    return (
      <>
        <StepLabel>{"Consent to the Hiring Agreement"}</StepLabel>
        <StepContent>
          <Grid container pt={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs>
              <Alert severity="info">
                <AlertTitle>Please review the Agreement carefully.</AlertTitle>
                If all details are correct, you can continue to consent to the
                Agreement.
                <br />
              </Alert>
              {
                <Stack pt={2} spacing={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<BrushIcon />}
                    fullWidth
                    onClick={() => {
                      showConfirmDialog({
                        dialogTitle:
                          "Are you sure you want to consent to the Hiring Agreement?",
                        dialogBody:
                          "The underlying Smart Contract becomes active by consenting to the Agreement. The Agreement is binding for both parties.",
                        cancelCaption: "Cancel",
                        okCaption: "Consent to Agreement",
                        okFunc: () => {
                          handleConsentToAgreement();
                        },
                      });
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
                        dialogTitle:
                          "Are you sure you want to decline the Hiring Agreement?",
                        dialogBody:
                          "Declining the Hiring Agreement invalidates the Smart Contract to which the budget has been transfered. Be very sure you really want to decline the Hiring Agreement.",
                        cancelCaption: "Cancel",
                        okCaption: "Really decline Agreement",
                        okFunc: () => {
                          console.log("DEBUG In okFunc");
                        },
                      });
                    }}
                  >
                    Decline Agreement
                  </Button>
                </Stack>
              }
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </StepContent>
      </>
    );
  }

  const { maturityDate, paymentCycleDuration, contractee, paymentCycleAmount } =
    agreementParameters;

  const agreementDuration = maturityDate.sub(activationDate);
  const migrations = agreementDuration.div(paymentCycleDuration);

  let validChallengePeriod = false;
  const reminder =
    agreementDuration.mod(paymentCycleDuration).toString() !== "0";
  for (let i = 0; i < parseInt(migrations.toString()); i++) {
    const migrationPeriod = activationDate.add(
      paymentCycleDuration.mul(BigNumber.from(i + 1))
    );

    if (BigNumber.from(Date.now()) >= migrationPeriod) {
      if (
        BigNumber.from(Date.now()) <= migrationPeriod.add(challengeDuration)
      ) {
        validChallengePeriod = true;
        break;
      }
    } else {
      break;
    }
  }
  if (!validChallengePeriod) {
    if (reminder) {
      if (
        BigNumber.from(Date.now()) >= maturityDate &&
        BigNumber.from(Date.now()) <= maturityDate.add(challengeDuration)
      ) {
        validChallengePeriod = true;
      }
    }
  }

  if (address == contractee) {
    return (
      <>
        <StepLabel>{"Cancel or Challenge Agreement"}</StepLabel>
        <StepContent>
          <Grid container pt={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs>
              <Alert severity="error">
                <AlertTitle>
                  These actions are final and cannot be undone.
                </AlertTitle>
                {activationDate.toString() === "0" ? (
                  "Since the Contractor has not consented to the Agreement yet, you can cancel the Agreement without being penalized. The agreement will be invalidated and the budget will be returned to you."
                ) : (
                  <List>
                    <ListItem>
                      <Box>
                        <Typography variant="subtitle2">
                          Cancel Agreement
                        </Typography>
                        If you cancel the agreement the budget for the days
                        worked will be transferred to the contractor and you
                        will be penalized. The rest of the budget will be
                        returned to you.
                        <br />
                        <br />
                      </Box>
                    </ListItem>
                    <ListItem>
                      <Box>
                        <Typography variant="subtitle2">
                          Challenge Agreement
                        </Typography>
                        Once the actual sprint is done you will have 5 days to
                        challenge the contractor's work. The dispute will be
                        submitted to the Contractful DAO and the most justice
                        course of action will be taken.
                      </Box>
                    </ListItem>
                  </List>
                )}
              </Alert>
              {
                <Stack pt={2} spacing={2}>
                  <Button
                    variant="contained"
                    color="error"
                    size="large"
                    startIcon={<NotInterested />}
                    fullWidth
                    onClick={() => {
                      showConfirmDialog({
                        dialogTitle:
                          "Are you sure you want to cancel the agreement?",
                        dialogBody:
                          activationDate.toString() === "0"
                            ? `This action is final. A total of ${formatEther(
                                paymentCycleAmount
                              )} DAI will be returned to you.`
                            : "The budget for the days worked will be transferred to the contractor and you will be penalized.",
                        cancelCaption: "Keep Agreement",
                        okCaption: "Cancel Agreement",
                        okFunc: () => {
                          handleConsentToAgreement();
                        },
                      });
                    }}
                  >
                    Cancel agreement
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="large"
                    startIcon={<NotInterested />}
                    fullWidth
                    disabled={!validChallengePeriod}
                    onClick={() => {
                      showConfirmDialog({
                        dialogTitle:
                          "Are you sure you want challenge the sprint?",
                        dialogBody:
                          "The dispute will be submitted to the Contractful DAO. Both parties will have the opportunity to present their case. At the end the most justice course of action will be taken.",
                        cancelCaption: "Cancel",
                        okCaption: "Challenge Sprint",
                        okFunc: () => {
                          console.log("DEBUG In okFunc");
                        },
                      });
                    }}
                  >
                    Challenge sprint
                  </Button>
                </Stack>
              }
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </StepContent>
      </>
    );
  }
  return <></>;
};

export default ActionSection;
