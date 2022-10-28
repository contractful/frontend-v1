import { Box, Typography } from "@mui/material";
import { useAccount } from "wagmi";
import useGetAgreementParameters from "../hooks/useGetAgreementParameters";
import useGetUserAgreements from "../hooks/useGetUserAgreements";

type Props = {};

const AgreementParameters = (props: Props) => {
  const { address } = useAccount();
  const { data: userAgreements } = useGetUserAgreements(address);
  const { data: agreementsParameters } = useGetAgreementParameters(
    userAgreements?.at(-1)
  );

  return (
    <Box>
      <Typography variant="h2">Agreement Parameters</Typography>
      {JSON.stringify(agreementsParameters)}
    </Box>
  );
};

export default AgreementParameters;
