import type { NextPage } from "next";
import {
  CssBaseline
} from "@material-ui/core";

import ContractfulHeader from "../components/header"
import ContractfulHtmlHead from "../components/html-head"

const HiringAgreementHome: NextPage = () => {
  return (
    <>
      <ContractfulHtmlHead />
      <main>
        <CssBaseline />
        <ContractfulHeader />

        <h1>HiringAgreementHome</h1>
      </main>
    </>
  );
};

export default HiringAgreementHome;
