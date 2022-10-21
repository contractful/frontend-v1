import type { NextPage } from "next";

import {
  CssBaseline, Container, Grid, Avatar, Divider, Button
} from "@material-ui/core";

import ContractfulHeader from "../components/header"
import ContractfulFooter from "../components/footer";
import ContractfulHtmlHead from "../components/html-head"

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

            <Divider />
        </Container>
        
        <ContractfulFooter />
      </main>
    </>
  );
};

export default HiringAgreementHome;
