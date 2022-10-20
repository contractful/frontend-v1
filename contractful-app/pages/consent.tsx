import type { NextPage } from "next";
import Head from "next/head";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Security } from "@material-ui/icons";

import Button from "@material-ui/core/Button";

import Link from 'next/link';

const ConsentAgreementHome: NextPage = () => {
  return (
    <>
        <Head>
          <title>Contractful</title>
          <meta
            name="description"
            content="Trustless and decentralized contracting solution"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <CssBaseline />

            <ul>
                <Link href="/">HiringAgreementHome</Link>
                <span>ConsentAgreementHome</span>
                <Link href="/create">CreateHiringAgreement</Link>
            </ul>

            <AppBar position="static">
                <Toolbar>
                <Grid container justifyContent="center">
                    <Security></Security>
                    <Typography variant="h6" color="inherit">
                    contractful Hiring Agreement
                    </Typography>
                </Grid>
                </Toolbar>
            </AppBar>

            <h1>ConsentAgreementHome</h1>

        </main>      
    </>
  );
};

export default ConsentAgreementHome;
