import type { NextPage } from "next";
import Router from 'next/router'

import {
  CssBaseline, Container, Grid, Avatar, Divider, Button, Link
} from "@material-ui/core";

import {
  Brush
} from "@material-ui/icons";

import ContractfulHeader from "../components/header"
import ContractfulFooter from "../components/footer";
import ContractfulHtmlHead from "../components/html-head"

const BtnCreateHiringAgreement = () => {

  const handleClick = (e) => {
    e.preventDefault()
    Router.push('/create')
  }

  return (
    <>
        <Container maxWidth="sm">
          <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                startIcon={<Brush />}
                onClick={handleClick}
              >
              Create Hiring Agreement
          </Button>
        </Container>
    </>
  )
}

const HiringAgreementHome: NextPage = () => {
  return (
    <>
      <ContractfulHtmlHead />
      <main>
        <CssBaseline />
        <ContractfulHeader />

        <Container maxWidth="md">
            <Grid container>
                <Grid item xs>
                    <h1>👋 Welcome to your contractful Hiring Agreement with 0xjohndoedeveloper.eth</h1>        
                </Grid>
                <Grid item xs={1}>
                    <Avatar>JD</Avatar>
                </Grid>
            </Grid>
        </Container>

        <BtnCreateHiringAgreement />

        <Container maxWidth="md">
          <Divider />
          
          <ul>
            <li>✔️ Fair, safe and secure on-chain payment processing.</li>
            <li>✔️ Clean budget planning.</li>
            <li>✔️ From terms to payment: Direct contract between you and 0xjohndoedeveloper.eth. No third party involved.</li>
          </ul>

          <Divider />
        </Container>

        <Container maxWidth="md">
          <h1>Ready to work with 0xjohndoedeveloper.eth?</h1>
        </Container>

        <BtnCreateHiringAgreement />

        <Container maxWidth="md">
          <Divider />

          <h1>Already got an active Agreement?</h1>
          <Link href="/review?useCase=check">Check status of Hiring Agreement</Link>
        </Container>

        <ContractfulFooter />
      </main>
    </>
  );
};

export default HiringAgreementHome;
