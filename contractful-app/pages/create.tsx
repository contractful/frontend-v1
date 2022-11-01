import type { NextPage } from "next"

import { 
    CssBaseline, Button, Container, Grid, Typography, Paper, FormControl, TextField,
    Card, CardContent, RadioGroup, Radio, FormControlLabel, Chip,
    Select, MenuItem, InputLabel, Divider, Stack, Box
} from "@mui/material"

import { useAccount } from 'wagmi'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'

import WalletIcon from '@mui/icons-material/Wallet'
import BrushIcon from '@mui/icons-material/Brush'
import TocIcon from '@mui/icons-material/Toc'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'

import ContractfulHtmlHead from "../components/HtmlHead"
import ContractfulHeader from "../components/Header"
import ContractfulFooter from "../components/Footer"
import StepNumberCircle from "../components/StepNumberCircle"

let dateEngagementStarts = new Date()

const CreateHiringAgreement: NextPage = () => {

    const PAYMENT_TERMS_2WEEKS = (14*24*60*60)

    const { address } = useAccount()
    const userPublicAddr = (address !== undefined) ? address : "Unknown user"

    return (
        <>
        <ContractfulHtmlHead />
        <CssBaseline />
        <ContractfulHeader />

        <Container>
            <Grid container pt={8}>
                <Grid item xs={1}>
                    <StepNumberCircle>
                        1
                    </StepNumberCircle>
                </Grid>
                <Grid item xs>
                    <Stack direction="row">
                      <Typography variant="h6">
                          👋 Welcome
                      </Typography>
                      <Chip label={userPublicAddr} variant="outlined" sx={{
                          ml:2
                        }}
                      />
                    </Stack>
                    <Typography pt={1}>
                        {(address !== undefined) ? 
                          "Wallet connected. Please proceed with the creating a Hiring Agreement."
                          : "Please connect your Wallet to start creating a Hiring Agreement."}
                    </Typography>
                </Grid>
            </Grid>
        </Container>

        <Container>
            <Grid container pt={4}>
                <Grid item xs={1}>
                    <StepNumberCircle>
                        2
                    </StepNumberCircle>
                </Grid>
                <Grid item xs>

                    <Typography variant="h6">
                        📝 Create Hiring Agreement
                    </Typography>
                    <Typography pt={1} pb={4}>
                        Please fill in the details of the Hiring Agreement.
                    </Typography>

                    <Paper elevation={24}>

                      <FormControl
                        variant="standard"
                      >
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                          }}
                          px={4}
                          pt={4}
                        >
                          <WalletIcon sx={{
                              color: 'action.active',
                              mr: 1,
                              my: 0.5
                            }}
                          />
                          <TextField
                            id="input-service-provider-addr"
                            label="Ethereum public address or ENS name of your service provider"
                            variant="outlined"
                            sx={{
                              width: '80vh'
                            }}
                          />
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                          }}
                          px={4}
                          pt={4}
                        >
                          <TocIcon sx={{
                              color: 'action.active',
                              mr: 1,
                              my: 0.5
                            }}
                          />
                          <TextField
                            id="contract-description"
                            label="Detailed work and service deliverable description (plain text)"
                            multiline
                            rows={4}
                            sx={{
                              width: '80vh'
                            }}
                          />

                        </Box>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                          }}
                          px={4}
                          pt={4}
                        >
                          <Diversity3Icon sx={{
                              color: 'action.active',
                              mr: 1,
                              my: 0.5
                            }}
                          />
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="longterm"
                            name="radio-buttons-group"
                          >
                            <Card sx={{
                                width: '80vh'
                              }}
                              variant="outlined"
                            >
                              <CardContent>
                                <FormControlLabel
                                  value="longterm"
                                  control={<Radio />}
                                  label="Long-term Agreement" 
                                />
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                  The Hiring Agreement aims for a long-term collaboration relationship.
                                </Typography>
                                <Typography variant="body2">
                                  <ul>
                                    <li>
                                      The arrangement is planned for several months (usually 1-3, up to 6 and even more months).
                                    </li>
                                    <li>
                                      The project is organized in 2 weeks sprint iterations.
                                    </li>
                                    <li>
                                      Payment will be handled correspondingly by the smart contract.
                                    </li>
                                  </ul>
                                </Typography>
                                
                                <Divider />

                                <Typography sx={{
                                    my: 1.5
                                  }}
                                  color="text.secondary"
                                >
                                  Contractual details of the arrangement:
                                </Typography>

                                <Stack direction="row" sx={{
                                    alignItems: 'flex-end'
                                  }}
                                >
                                  <Typography sx={{
                                      width:'30%'
                                    }}
                                    variant="body2"
                                  >
                                    Engagement period:
                                  </Typography>
                                  <TextField
                                    id="input-engagement-period"
                                    inputProps={{
                                        inputMode: 'numeric',
                                        pattern: '[0-9]*' 
                                      }}
                                    defaultValue="3"
                                    label="Months"
                                    variant="standard"
                                  />
                                </Stack>

                                <Stack direction="row" sx={{
                                    alignItems: 'flex-end'
                                  }}
                                  pt={4}
                                >
                                  <Typography sx={{
                                      width: '30%'
                                    }}
                                    variant="body2"
                                  >
                                    Engagement begins on:
                                  </Typography>
                                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DesktopDatePicker
                                      label="Date"
                                      inputFormat="MM/DD/YYYY"
                                      value={dateEngagementStarts}
                                      onChange={() => {}}
                                      renderInput={(params) =>
                                        <TextField
                                          {...params}
                                          variant="standard"
                                        />
                                      }
                                    />
                                  </LocalizationProvider>
                                </Stack>

                                <Stack direction="row" sx={{
                                    alignItems: 'flex-end'
                                  }}
                                  pt={4}
                                >
                                  <Typography sx={{
                                      width:'30%'
                                    }}
                                    variant="body2"
                                  >
                                    Working hours:
                                  </Typography>

                                  <FormControl sx={{ width: '50%' }}>
                                    <InputLabel id="label-select-commitment">
                                      Commitment
                                    </InputLabel>
                                    <Select
                                      labelId="label-select-commitment"
                                      id="select-commitment"
                                      label="Commitment"
                                      variant="standard"
                                      defaultValue={40}
                                    >
                                      <MenuItem value={40}>
                                        Full-time: 40 hours per week
                                      </MenuItem>
                                      <MenuItem value={20}>
                                        Part-time: 20 hours per week
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </Stack>
                              </CardContent>
                            </Card>

                            <Card sx={{
                                width: '80vh',
                                mt: 1
                              }}
                              variant="outlined"                              
                            >
                              <CardContent>
                                <FormControlLabel
                                  value="shortterm"
                                  control={<Radio />}
                                  label="Short-term Agreement" 
                                />
                              </CardContent>
                            </Card>
                          </RadioGroup>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                          }}
                          p={4}
                        >
                          <RequestQuoteIcon sx={{
                              color: 'action.active',
                              mr: 1,
                              my: 0.5
                            }}
                          />
                            <Card sx={{
                                width: '80vh'
                              }}
                              variant="outlined"
                            >
                              <CardContent>

                                <Typography sx={{
                                      my: 1.5
                                    }}
                                    color="text.secondary"
                                >
                                  Financial details of the Hiring Agreement:
                                </Typography>

                                <Stack direction="row" sx={{
                                    alignItems: 'flex-end'
                                  }}
                                >
                                  <Typography sx={{
                                      width:'30%'
                                    }}
                                    variant="body2"
                                  >
                                    Compensation:
                                  </Typography>

                                  <TextField
                                    id="input-service-provider-addr"
                                    label="Hourly rate"
                                    variant="standard"
                                    sx={{
                                      width: '15vh'
                                    }}
                                  />
                                  <Typography pl={4}>
                                    US$ (in DAI)
                                  </Typography>
                                </Stack>

                                <Stack direction="row" sx={{
                                    alignItems: 'flex-end'
                                  }}
                                  py={4}
                                >
                                  <Typography sx={{
                                      width:'30%'
                                    }}
                                    variant="body2"
                                  >
                                    Payment terms:
                                  </Typography>

                                  <FormControl sx={{ width: '70%' }}>
                                    <InputLabel id="label-select-commitment">
                                      Terms
                                    </InputLabel>
                                    <Select
                                      labelId="label-select-commitment"
                                      id="select-commitment"
                                      label="Commitment"
                                      variant="standard"
                                      defaultValue={1*60}
                                    >
                                      <MenuItem value={1*60}>
                                        Payment in 14 minutes representing 2 weeks (TESTING ONLY)
                                      </MenuItem>
                                      <MenuItem value={PAYMENT_TERMS_2WEEKS}>
                                        Payment every 2 weeks (after successful sprint review)
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </Stack>

                                <Divider />
                                  
                                <Stack direction="row" sx={{
                                    alignItems: 'flex-end'
                                  }}
                                  pt={4}
                                >
                                  <Typography sx={{
                                      width:'30%'
                                    }}
                                    variant="body2"
                                  >
                                    Resulting contract budget:
                                  </Typography>

                                  <TextField
                                    id="input-service-provider-addr"
                                    label="Budget"
                                    inputProps={{
                                      readOnly: true
                                    }}
                                    defaultValue={12345.67}
                                    variant="standard"
                                    sx={{
                                      width: '15vh'
                                    }}
                                  />
                                  <Typography pl={4}>
                                    DAI
                                  </Typography>
                                </Stack>
                              </CardContent>
                            </Card>
                        </Box>
                      </FormControl>
                    </Paper>
                </Grid>
            </Grid>
        </Container>

        <Container>
            <Grid container pt={4}>
                <Grid item xs={1}>
                    <StepNumberCircle>
                        3
                    </StepNumberCircle>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs>
                    <Typography py={1} sx={{
                        textAlign: 'center'
                    }}>
                        Please review your contract carefully.<br />If all details are correct, please proceed to sign the Agreement.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<BrushIcon />}
                        fullWidth
                        >
                        Sign Agreement
                    </Button>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </Container>

        <ContractfulFooter />
        </>
    )
}

export default CreateHiringAgreement;
