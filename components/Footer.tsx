import * as React from "react";

import {
  Container,
  Divider,
  Grid,
  Link,
  Typography,
  Alert,
  Snackbar,
  Button,
  Box,
  Stack,
} from "@mui/material";

import { Cookies } from 'react-cookie';

interface FooterProps {
  withImageCredits: boolean;
  children?: React.ReactNode;
}

export default class ContractfulFooter extends React.Component<
  FooterProps,
  {
    betaAlertOpen: boolean
  }
> {

  constructor(props: FooterProps) {
    super(props);

    // Show beta alert only once per session

    const cookies = new Cookies();
    const betaAlertDisplayed = (cookies.get('betaAlertDisplayed') === 'undefined') ? false : (cookies.get('beta-alert-displayed') === 'true')

    this.state = {
      betaAlertOpen: (!betaAlertDisplayed)
    };
  }

  render() {

    const cookies = new Cookies();
    cookies.set('beta-alert-displayed', true);

    const handleBetaAlertClose = () => {
      this.setState({
        betaAlertOpen: false
      });
    };

    return (
      <>
        <Container sx={{ marginTop: "auto" }}>
          <Grid container pt={6}>
            <Grid item xs>
              <Divider />
              <Typography>
                <p>Made with ❤️ by the contractful team 2022.</p>
              </Typography>
              {this.props.withImageCredits && (
                <Typography variant="caption">
                  Image credits:{" "}
                  <Link
                    href="https://www.vecteezy.com/members/fatmawatilauda70555"
                    target="_new"
                  >
                    fatmawatilauda70555 on vecteezy.com
                  </Link>
                  .
                </Typography>
              )}
            </Grid>
          </Grid>
        </Container>

        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={this.state.betaAlertOpen}
          autoHideDuration={6000}
          onClose={handleBetaAlertClose}
        >
          <Alert severity="info">
            <Stack direction="row">
              <Box>
                Note: This is a beta implementation deployed to the Polygon Mumbai
                testnet. If you want to use this in production on mainnet, please
                visit{" "}
                <Link href="https://github.com/contractful" target="_new">
                  https://github.com/contractful
                </Link>{" "}
                to get in touch.
              </Box>
              <Button
                onClick={handleBetaAlertClose}
                sx={{
                  pl:4
                }}
              >
                Dismiss
              </Button>
            </Stack>
          </Alert>
        </Snackbar>

      </>
    );
  }

  // Set default props
  static defaultProps = {
    withImageCredits: false,
  };

}
