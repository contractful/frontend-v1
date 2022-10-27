import { Box } from "@mui/material";
import ActivateAgreement from "../../components/agreement/ActivateAgreement";
import CreateAgreement from "../../components/agreement/CreateAgreement";
import AgreementParameters from "../../components/AgreementParameters";
import { ConnectWalletButton } from "../../components/connectWalletButton";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <ConnectWalletButton />
      <Box
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "6rem",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "3rem",
          }}
          justifyContent="center"
          alignItems="center"
        >
          <CreateAgreement />
          <ActivateAgreement />
        </Box>
        <AgreementParameters />
      </Box>
    </>
  );
};

export default index;
