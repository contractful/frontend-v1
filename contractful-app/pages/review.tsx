import type { NextPage } from "next"
import { useRouter } from 'next/router'

import {
    CssBaseline, Grid, Button, Container, Divider
} from "@mui/material";

import WalletIcon from '@mui/icons-material/Wallet'
import BrushIcon from '@mui/icons-material/Brush';
import NotInterestedIcon from '@mui/icons-material/NotInterested'

import ContractfulHeader from "../components/header"
import ContractfulFooter from "../components/footer"
import ContractfulHtmlHead from "../components/html-head"
import ContractfulAgreementSummary from "../components/agreement-summary"

const ReviewHiringAgreement: NextPage = () => {
    const router = useRouter()
    const useCase = ("useCase" in router.query) ? 
        router.query['useCase']
        : "consent"
    return (
    <>
        <ContractfulHtmlHead />
        <main>
            <CssBaseline />
            <ContractfulHeader />

            DEBUG useCase = {useCase}

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
                        startIcon={<WalletIcon />}
                        fullWidth
                        >
                        Wallet connected
                        </Button>
                    </Grid>
                </Grid>
                <h1>📨 You got 1️⃣ new contract to review.</h1>

                <Divider />
            </Container>

            <ContractfulAgreementSummary />

            <Container maxWidth="sm">
            <div>
                ℹ️ Complete the review of your Hiring Agreement from 0xdavid_dao.eth by consenting.
            </div>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              startIcon={<BrushIcon />}
            >
              Consent with Hiring Agreement
            </Button>
            <div>&nbsp;</div>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              fullWidth
              startIcon={<NotInterestedIcon />}
            >
                Decline Agreement
            </Button>
          </Container>

          <ContractfulFooter />
        </main>      
    </>
  );
};

export default ReviewHiringAgreement;
