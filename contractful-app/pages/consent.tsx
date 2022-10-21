import type { NextPage } from "next";

import {
    CssBaseline, Grid, Button, Container, Avatar
} from "@material-ui/core";

import {
    AccountBalanceWallet, Brush
} from "@material-ui/icons";

import ContractfulHeader from "../components/header"
import ContractfulHtmlHead from "../components/html-head"

const ConsentAgreementHome: NextPage = () => {
  return (
    <>
        <ContractfulHtmlHead />
        <main>
            <CssBaseline />
            <ContractfulHeader />

            <h1>ConsentAgreementHome</h1>
        </main>      
    </>
  );
};

export default ConsentAgreementHome;
