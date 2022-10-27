import { Box } from "@material-ui/core";
import ActivateAgreement from "../../components/agreement/ActivateAgreement";
import CreateAgreement from "../../components/agreement/CreateAgreement";
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
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
        justifyContent="center"
        alignItems="center"
      >
        <CreateAgreement />
        <ActivateAgreement />
      </Box>
    </>
  );
};

export default index;
