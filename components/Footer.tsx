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

export default class ContractfulFooter extends React.Component<
  { withImageCredits: boolean },
  {}
> {

  constructor(props) {
    super(props);
    this.state = {
      betaAlertOpen: false
    };
  }

  render() {

    // Show beta alert only once per session
    
    const cookies = new Cookies();

    const betaAlertDisplayed = (cookies.get('betaAlertDisplayed') === 'undefined') ? false : (cookies.get('beta-alert-displayed') === 'true')
    this.state.betaAlertOpen = !betaAlertDisplayed;
    cookies.set('beta-alert-displayed', true);

    const handleBetaAlertClose = () => {
      this.setState({
        betaAlertOpen: false
      });
    };

    return (
      <>
        <Container>
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
                pl={4}
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
