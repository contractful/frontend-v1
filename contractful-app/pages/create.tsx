import type { NextPage } from "next";

import {
    CssBaseline, Container, Grid, Button, Divider, Link, Avatar, TextField, FormControl, InputLabel, MenuItem, Select
} from "@material-ui/core";

import {
    AccountBalanceWallet, Brush
} from "@material-ui/icons";

import ContractfulHeader from "../components/header";
import ContractfulHtmlHead from "../components/html-head"

const CreateHiringAgreement: NextPage = () => {
    return (
        <>
        <ContractfulHtmlHead />
        <main>
          <CssBaseline />
          <ContractfulHeader />
  
          <Container maxWidth="md">
            <Grid container>
              <Grid item xs={1}>
                <Avatar>JD</Avatar>
              </Grid>
              <Grid item xs>
                <h1>👋 Welcome - connect your wallet to create a Hiring Agreement</h1>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<AccountBalanceWallet />}
                  fullWidth
                >
                  Connect Wallet
                </Button>
              </Grid>
            </Grid>
  
            <Divider></Divider>
          </Container>
  
          <Container maxWidth="md">
            <Grid container>
              <Grid item xs>
                <h2>Service provider:</h2>
              </Grid>
              <Grid item xs={8}>
                0xjohndoedeveloper.eth
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs>
                <h2>Client:</h2>
              </Grid>
              <Grid item xs={8}>
                <Link href="#">Please connect your wallet</Link>
              </Grid>
            </Grid>
  
            <Divider></Divider>
          </Container>
  
          <Container maxWidth="md">
            <h1>Contracting details (assignment description):</h1>
            <TextField
              placeholder="Please type in the detailed assignment description ..."
              multiline
              minRows={2}
              maxRows={4}
              variant="outlined"
              fullWidth
            />
          </Container>
  
          <Container maxWidth="md">
            <h2>Terms:</h2>
            <Grid container>
              <Grid item xs>
                <h3>Engagement:</h3>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="engagement-length-select-label">
                    Length of engagement
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
                </FormControl>
              </Grid>
  
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="engagement-begins-select-label">
                    Engagement begins
                  </InputLabel>
                  <Select
                    labelId="engagement-begins-select-label"
                    id="engagement-begins-select"
                    label="Engagement begins"
                  >
                    <MenuItem value={0}>Tue, 10-18-2022</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Container>
  
          <Container maxWidth="md">
            <Grid container>
              <Grid item xs>
                <h3>Type:</h3>
              </Grid>
              <Grid item xs={8}>
                <FormControl fullWidth>
                  <InputLabel id="engagement-type-select-label">
                    Type of engagement
                  </InputLabel>
                  <Select
                    labelId="engagement-type-select-label"
                    id="engagement-type-select"
                    label="Type of engagement"
                  >
                    <MenuItem value={40}>Full-time (40 hrs / week)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Container>
  
          <Container maxWidth="md">
            <Grid container>
              <Grid item xs>
                <h3>Hourly rate:</h3>
              </Grid>
              <Grid item xs={8}>
                $140.00 (payable in DAI or ETH)
              </Grid>
            </Grid>
          </Container>
  
          <Container maxWidth="md">
            <Grid container>
              <Grid item xs>
                <h3>Payment:</h3>
              </Grid>
              <Grid item xs={8}>
                <FormControl fullWidth>
                  <InputLabel id="payment-select-label">Payment terms</InputLabel>
                  <Select
                    labelId="payment-select-label"
                    id="payment-select"
                    label="Payment terms"
                  >
                    <MenuItem value={2}>
                      2 weeks (with successful sprint review)
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Container>
  
          <Container maxWidth="md">
            <Grid container>
              <Grid item xs>
                <h3>Budget 1st cycle:</h3>
              </Grid>
              <Grid item xs={8}>
                15,680.00 DAI (12.2 ETH)
              </Grid>
            </Grid>
          </Container>
  
          <Container maxWidth="sm">
            <div>
                ℹ️ Your Hiring Agreement is complete. Please proceed creating the Hiring Agreement for 0xjohndoedeveloper.eth to review.
            </div>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              startIcon={<Brush />}
            >
              Create Hiring Agreement
            </Button>
          </Container>
        </main>
      </>
      )
}

export default CreateHiringAgreement
