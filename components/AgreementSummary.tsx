import {
  Box,
  Card,
  CardContent,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { useState } from "react";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import TocIcon from "@mui/icons-material/Toc";
import WalletIcon from "@mui/icons-material/Wallet";

import { BigNumber } from "ethers";
import { formatEther } from "ethers/lib/utils";
import { useAccount } from "wagmi";
import { AgreementParams } from "../utils/types";

const ContractfulAgreementSummary = (props: AgreementParams) => {
  const { address } = useAccount();
  const {
    beginningDate,
    contractee,
    contractor,
    establishmentFeeRate_,
    maturityDate,
    paymentCycleAmount,
    paymentCycleDuration,
    penalizationAmount_,
    underlayingToken,
    descriptionURI
  } = props;

  const [description, setDescription] = useState<string>();

  const retrieveDesc = fetch('/api/getDesc', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({cid: descriptionURI}),
    headers: {'Content-Type': 'application/json'} 
  });
  
  retrieveDesc
  .then((response) => {
    if (!response.ok) 
    { 
      console.error("Error ", response.status);
    }
    else if (response.status >= 400) 
    {
      console.error('HTTP Error: ' + response.status + ' - ' + response.json());
    }
    else
    {
      return response.json();
    }
  })
  .then((data) => {
    setDescription(data.desc);
  });

  const amountFormatter = new Intl.NumberFormat("en-US", {
    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <>
      <Paper elevation={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          px={4}
          pt={4}
        >
          <WalletIcon
            sx={{
              color: "action.active",
              mr: 1,
              my: 0.5,
            }}
          />
          <Card
            sx={{
              width: "80vh",
            }}
            variant="outlined"
          >
            <CardContent>
              <Stack
                sx={{
                  variant: "outlined",
                }}
              >
                <Typography variant="body2">
                  {address === contractor
                    ? "Wallet address of your client that has created this Hiring Agreement"
                    : "Wallet address of your service provider"}
                </Typography>
                <Typography variant="h6" pt={1}>
                  {address === contractor ? contractee : contractor}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          px={4}
          pt={4}
        >
          <TocIcon
            sx={{
              color: "action.active",
              mr: 1,
              my: 0.5,
            }}
          />

          <Card
            sx={{
              width: "80vh",
            }}
            variant="outlined"
          >
            <CardContent>
              <Typography
                sx={{
                  my: 1.5,
                }}
                color="text.secondary"
              >
                Detailed description of work and service deliverables:
              </Typography>

              <Divider />

              <Typography
                variant="body1"
                sx={{
                  minHeight: "15vh",
                  maxHeight: "15vh",
                  overflow: "auto",
                  whiteSpace: "pre-line",
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                }}
                pt={2}

              >
                {description}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          px={4}
          pt={4}
        >
          <Diversity3Icon
            sx={{
              color: "action.active",
              mr: 1,
              my: 0.5,
            }}
          />

          <Card
            sx={{
              width: "80vh",
            }}
            variant="outlined"
          >
            <CardContent>
              <Typography
                sx={{
                  my: 1.5,
                }}
                color="text.secondary"
              >
                Long-term Hiring Agreement - collaboration model:
              </Typography>

              <Divider />

              <Stack direction="row" pt={1}>
                <Typography
                  variant="body2"
                  sx={{
                    width: "20vh",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Engagement begins on:
                </Typography>
                <Typography variant="h6">
                  {new Date(
                    parseInt(beginningDate?.toString()) * 1000
                  ).toLocaleDateString("en-US")}
                </Typography>
              </Stack>

              <Stack direction="row" pt={1}>
                <Typography
                  variant="body2"
                  sx={{
                    width: "20vh",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Engagement period:
                </Typography>
                <Typography variant="h6">
                  {beginningDate && maturityDate
                    ? maturityDate
                        ?.sub(beginningDate)
                        .div(BigNumber.from(24*60*60))
                        .add(BigNumber.from(1))
                        .toString()
                    : "---"}{" "}
                  days
                </Typography>
              </Stack>

              <Stack direction="row" pt={1} alignItems="center">
                <Typography
                  variant="body2"
                  component="h6"
                  sx={{ width: "20vh" }}
                >
                  Engagement ends on:
                </Typography>
                <Typography variant="h6" component="span">
                  {new Date(
                    parseInt(maturityDate?.toString()) * 1000
                  ).toLocaleDateString("en-US")}
                </Typography>
              </Stack>

              <Typography variant="h6" pt={1}>
                {""}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          p={4}
        >
          <RequestQuoteIcon
            sx={{
              color: "action.active",
              mr: 1,
              my: 0.5,
            }}
          />
          <Card
            sx={{
              width: "80vh",
            }}
            variant="outlined"
          >
            <CardContent>
              <Typography
                sx={{
                  my: 1.5,
                }}
                color="text.secondary"
              >
                Financial details of the Hiring Agreement:
              </Typography>

              <Divider />

              <Stack direction="row" pt={1}>
                <Typography
                  variant="body2"
                  sx={{
                    width: "20vh",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Payment terms:
                </Typography>
                <Typography variant="h6">
                  Every{" "}
                  {
                    (paymentCycleDuration?.lt(BigNumber.from((24 * 60 * 60))))
                    ? 
                    <>
                    {paymentCycleDuration?.div(BigNumber.from(60)).toString() + " minutes "}
                    {"("}<b style={{ color: "#d32f2f" }}>TESTING</b>{")"}
                    </>
                    : 
                    <>
                    {(paymentCycleDuration?.div(BigNumber.from(24 * 60 * 60)).toString + " days")}
                    </>
                  }
                </Typography>
              </Stack>

              <Stack direction="row" pt={1}>
                <Typography
                  variant="body2"
                  sx={{
                    width: "20vh",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Total Budget:
                </Typography>
                <Typography variant="h6">
                  {paymentCycleAmount && amountFormatter.format(Number(formatEther(paymentCycleAmount)))}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    width: "30%",
                    display: "flex",
                    alignItems: "center",
                  }}
                  pl={4}
                >
                  DAI
                </Typography>
              </Stack>

              <Stack direction="row" pt={1}>
                <Typography
                  variant="body2"
                  sx={{
                    width: "20vh",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Penalization amount
                </Typography>
                <Typography variant="h6">
                  {penalizationAmount_ && amountFormatter.format(Number(formatEther(penalizationAmount_)))}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    width: "30%",
                    display: "flex",
                    alignItems: "center",
                  }}
                  pl={4}
                >
                  DAI
                </Typography>
              </Stack>

              <Stack direction="row" pt={1}>
                <Typography
                  variant="body2"
                  sx={{
                    width: "20vh",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Establishment fee rate:
                </Typography>
                <Typography variant="h6">
                  {establishmentFeeRate_ && amountFormatter.format(Number(formatEther(establishmentFeeRate_)))}{" "}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    width: "30%",
                    display: "flex",
                    alignItems: "center",
                  }}
                  pl={4}
                >
                  DAI
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Paper>
    </>
  );
};

export default ContractfulAgreementSummary;
