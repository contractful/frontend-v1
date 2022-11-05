import * as React from "react";

import { Container, Divider, Grid, Link, Typography } from "@mui/material";

export default class ContractfulFooter extends React.Component<
  { withImageCredits: boolean },
  {}
> {
  render() {
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
      </>
    );
  }

  // Set default props
  static defaultProps = {
    withImageCredits: false,
  };
}
