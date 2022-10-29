import type { NextPage } from "next"

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

import { 
    CssBaseline, Button, Container, Grid, Typography, Paper, FormControl, TextField,
    Card, CardContent, RadioGroup, Radio, FormControlLabel,
    Select, MenuItem, InputLabel
} from "@mui/material"

import { styled } from '@mui/system'

import WalletIcon from '@mui/icons-material/Wallet'
import BrushIcon from '@mui/icons-material/Brush'
import TocIcon from '@mui/icons-material/Toc'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'

import ContractfulHtmlHead from "../components/html-head"
import ContractfulHeader from "../components/header"
import ContractfulFooter from "../components/footer"


const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

function VerticalLinearStepper() {

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={0} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={() => {}}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={() => {}}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}



const StepNumberCircle = styled('div')({
    width: '8vh',
    height: '8vh',
    lineHeight: '8vh',
    backgroundColor: '#1976d2',
    borderRadius: '50%',
    color: '#fff',
    fontSize: 'xx-large',
    textAlign: 'center',
    verticalAlign: 'middle'
})



const ReviewHiringAgreement: NextPage = () => {
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
                <Grid item xs={7}>
                    <Typography variant="h6">
                        👋 Welcome
                    </Typography>
                    <Typography pt={1}>
                        Please connect your Wallet to start creating a Hiring Agreement.
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<WalletIcon />}
                        fullWidth
                        >
                        Connect Wallet
                    </Button>
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
                            📝 Contract
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
                            alignItems: 'flex-end'
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
                            variant="standard"
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
                            label="Detailed work and service deliverable description"
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
                                  label="Long-term arrangement" 
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
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                  Contractual details of the arrangement:
                                </Typography>

                                <InputLabel id="engagement-length-select-label">
                                  TODO Length of engagement
                                </InputLabel>
                                <Select
                                  labelId="engagement-length-select-label"
                                  id="engagement-length-select"
                                  label="Length of engagement"
                                >
                                  <MenuItem value={1}>1 month</MenuItem>
                                  <MenuItem value={2}>2 months</MenuItem>
                                  <MenuItem value={3}>3 months</MenuItem>
                                  <MenuItem value={4}>4 months</MenuItem>
                                  <MenuItem value={5}>5 months</MenuItem>
                                  <MenuItem value={6}>6 months</MenuItem>
                                </Select>


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
                                  label="Short-term arrangement" 
                                />
                              </CardContent>
                            </Card>


                          </RadioGroup>
                        </Box>


                        <Box sx={{
                            display: 'flex',
                            alignItems: 'flex-end'
                          }}
                          px={4}
                          pt={4}
                        >
                          <RequestQuoteIcon sx={{
                              color: 'action.active',
                              mr: 1,
                              my: 0.5
                            }}
                          />
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
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'flex-end'
                          }}
                          px={4}
                          pt={4}
                        >
                          <RequestQuoteIcon sx={{
                              color: 'action.active',
                              mr: 1,
                              my: 0.5
                            }}
                          />
                          <Typography pl={4}>
                            Resulting budget for the first payment cycle.
                          </Typography>
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

export default ReviewHiringAgreement;
