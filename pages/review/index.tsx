import type { NextPage } from "next";
import useGetUserAgreements from "../../hooks/useGetUserAgreements";
import { useAccount } from "wagmi";
import Router from "next/router";
import { BigNumber } from "ethers";

import {
    CircularProgress,
    Container,
    Typography,
    Stack,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Grid,
    Chip,
} from "@mui/material";

import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";

const StartReviewHiringAgreement: NextPage = () => {

    const { address } = useAccount();

    const isWalletConnected = () => {
        return address !== undefined;
    };
    
    const redirectToReview = (data: readonly BigNumber[]) => {
        console.log("data = " + JSON.stringify(data));
        const allAgreementIds = data.map((x) => x.toNumber());
        Router.push('/review/' + allAgreementIds[allAgreementIds.length-1]);
    }
    useGetUserAgreements(address, redirectToReview);

    return (
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
                    <Grid item xs>
                        <Stack direction="row">
                            <CircularProgress />
                            <Typography variant="h4" ml={4}>
                                Reading your latest Hiring Agreement, please wait ...
                            </Typography>
                        </Stack>
                    </Grid>
                  </Grid>
                </StepContent>
              </Step>
            </Stepper>
          </Container>
        </>
    )

};

export default StartReviewHiringAgreement;
