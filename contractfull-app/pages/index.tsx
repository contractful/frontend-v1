import type { NextPage } from "next";
import Head from "next/head";

import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { AccountBalanceWallet, Brush, Security } from "@material-ui/icons";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contractful</title>
        <meta
          name="description"
          content="Trustless and decentralized contracting solution"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CssBaseline />

        <AppBar position="static">
          <Toolbar>
            <Grid container justifyContent="center">
              <Security></Security>
              <Typography variant="h6" color="inherit">
                contractful Hiring Agreement
              </Typography>
            </Grid>
          </Toolbar>
        </AppBar>

        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={1}>
              <Avatar>JD</Avatar>
            </Grid>
            <Grid item xs>
              <h1>👋 Welcome</h1>
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
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            startIcon={<Brush />}
          >
            Sign contract to hire 0xjohndoedeveloper.eth
          </Button>
        </Container>
      </main>
    </>
  );
};

export default Home;
