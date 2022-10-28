import type { NextPage } from "next"

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

import { 
    CssBaseline, Button, Container, Grid, Typography, Paper, Divider
} from "@mui/material"

import { styled } from '@mui/system'

import WalletIcon from '@mui/icons-material/Wallet'
import BrushIcon from '@mui/icons-material/Brush';

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
                    <Typography>
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
                        <Typography>
                            Please fill in the details of the Hiring Agreement.
                    </Typography>
                </Grid>
            </Grid>
        </Container>

        <Container maxWidth="md">
            <Grid container pt={2}>
                <Grid item xs>
                    <Paper elevation={24}>
                        <Typography p={4}>
                            <p>Hello World</p>
                        </Typography>
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
