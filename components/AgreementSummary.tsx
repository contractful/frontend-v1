import {
  Box,
  Card,
  CardContent,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import Diversity3Icon from "@mui/icons-material/Diversity3";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import TocIcon from "@mui/icons-material/Toc";
import WalletIcon from "@mui/icons-material/Wallet";

import { BigNumber } from "ethers";
import { formatEther } from "ethers/lib/utils";
import { AgreementParams } from "../utils/types";

const ContractfulAgreementSummary = (props: AgreementParams) => {
  const {
    acceptanceDeadline,
    beginningDate,
    contractee,
    contractor,
    establishmentFeeRate_,
    maturityDate,
    paymentCycleAmount,
    paymentCycleDuration,
    penalizationAmount_,
    underlayingToken,
  } = props;

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
                  Public Ethereum address of your client that has created this
                  Hiring Agreement:
                </Typography>
                <Typography variant="h6" pt={1}>
                  {contractor}
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

              <Stack direction="row" pt={2}>
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
                  {maturityDate
                    ?.sub(
                      beginningDate.toString() !== "0"
                        ? beginningDate
                        : acceptanceDeadline
                    )
                    .div(BigNumber.from(24 * 60 * 60 * 30))
                    .toString()}{" "}
                  months
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
                  Engagement begins on:
                </Typography>
                <Typography variant="h6">
                  {new Date(
                    parseInt(beginningDate?.toString()) * 1000
                  ).toLocaleDateString("en-US")}
                </Typography>
              </Stack>

              {acceptanceDeadline?.toString() !== "0" && (
                <Stack direction="row" pt={2}>
                  <Typography
                    variant="body2"
                    sx={{
                      width: "20vh",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Acceptance deadline:
                  </Typography>
                  <Typography variant="h6">
                    {new Date(
                      parseInt(acceptanceDeadline?.toString()) * 1000
                    ).toLocaleDateString("en-US")}
                  </Typography>
                </Stack>
              )}

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

              <Stack direction="row" pt={2}>
                <Typography
                  variant="body2"
                  sx={{
                    width: "20vh",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Hourly rate:
                </Typography>
                <Typography variant="h6">
                  {paymentCycleAmount &&
                    paymentCycleDuration.toNumber() &&
                    formatEther(
                      paymentCycleAmount
                        ?.div(paymentCycleDuration)
                        .mul(BigNumber.from(60 * 60))
                    )}{" "}
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
                  Payment terms:
                </Typography>
                <Typography variant="h6">
                  Every{" "}
                  {paymentCycleDuration
                    ?.div(BigNumber.from(24 * 60 * 60))
                    .toString()}{" "}
                  days
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
                  Budget:
                </Typography>
                <Typography variant="h6">
                  {paymentCycleAmount && formatEther(paymentCycleAmount)} DAI
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
