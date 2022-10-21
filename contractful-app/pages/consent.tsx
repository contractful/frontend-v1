import type { NextPage } from "next";

import {
    CssBaseline, Grid, Button, Container, Divider
} from "@material-ui/core";

import {
    AccountBalanceWallet, Brush, NotInterested
} from "@material-ui/icons";

import ContractfulHeader from "../components/header"
import ContractfulFooter from "../components/footer"
import ContractfulHtmlHead from "../components/html-head"

import TrafficLight from 'react-trafficlight';

const ConsentHiringAgreement: NextPage = () => {
  return (
    <>
        <ContractfulHtmlHead />
        <main>
            <CssBaseline />
            <ContractfulHeader />

            <Container maxWidth="md">
                <Grid container>
                    <Grid item xs>
                        <h1>👋 Welcome 0xjohndoedeveloper.eth</h1>        
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<AccountBalanceWallet />}
                        fullWidth
                        >
                        Wallet connected
                        </Button>
                    </Grid>
                </Grid>
                <h1>📨 You got 1️⃣ new contract to review.</h1>

                <Divider />
            </Container>

            <Container maxWidth="md">
                <Grid container>
                    <Grid item xs>
                        <h2>Hiring Agreement with 0xdavid_dao.eth</h2>
                    </Grid>
                    <Grid item xs>
                        <span>🗓️ 1st November 2022</span>
                        <span>🕘 14:00 (GMT+2)</span>
                    </Grid>
                </Grid>
            </Container>

            <Container maxWidth="md">
                <h1>Engagement summary:</h1>
                <Grid container>
                    <Grid item xs={2}>
                        <h2>Status:</h2>
                    </Grid>
                    <Grid item xs={1}>
                        <TrafficLight YellowOn />
                    </Grid>
                    <Grid item xs={1}>
                        <span
                            style={{
                                backgroundColor: '#F8E71C',
                                fontSize: 'large'
                            }}
                        >
                            TAKE<br />ACTION
                        </span>
                    </Grid>
                    <Grid item xs>
                        <ul>
                            <li>✅ Funds have been committed to this Hiring Agreement by 0xdavid_dao.eth.</li>
                            <li>❌ You have not consented with the Hiring Agreement.</li>
                        </ul>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={2}>
                        <h2>Description<br />and terms:</h2>
                    </Grid>
                    <Grid item xs>
                        <p>
                            $DESCRIPTION_TEXT
                        </p>
                        <p>
                            3 months engagement, beginning 18th Oct 2022, Full time (40 hrs / week),
hourly rate: 140.00 DAI, payment every 2 weeks (with successful sprint review).
                        </p>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={2}>
                        <h2>Budget:</h2>
                    </Grid>
                    <Grid item xs>
                        15,680.00 DAI (12.2 ETH)
                    </Grid>
                </Grid>

                <Divider />
            </Container>

            <Container maxWidth="sm">
            <div>
                ℹ️ Complete the review of your Hiring Agreement from 0xdavid_dao.eth by consenting.
            </div>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              startIcon={<Brush />}
            >
              Consent with Hiring Agreement
            </Button>
            <div>&nbsp;</div>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              fullWidth
              startIcon={<NotInterested />}
            >
                Decline Agreement
            </Button>
          </Container>

          <ContractfulFooter />
        </main>      
    </>
  );
};

export default ConsentHiringAgreement;
