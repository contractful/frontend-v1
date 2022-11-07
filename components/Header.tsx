import * as React from "react";

import {
  AppBar,
  Container,
  Grid,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";

import { ConnectWalletButton } from "./ConnectWalletButton";

export default class ContractfulHeader extends React.Component<
  { withWalletConnect: boolean },
  {}
> {

  render() {
    return (
      <>
        <span>DEBUG: </span>
        <Link href="/">HiringAgreementHome</Link>
        <span> | </span>
        <Link href="/create">CreateHiringAgreement</Link>
        <span> | </span>
        <span>ReviewHiringAgreement ? </span>
        <Link href="/review/123456789?useCase=consent">consent</Link>
        <span> ? </span>
        <Link href="/review/123456789?useCase=check">check</Link>
        <span> ? </span>
        <Link href="/review/123456789?useCase=extend">extend</Link>
        <span> | </span>
        <Link href="/examples">/examples</Link>

        <AppBar position="static">
          <Toolbar>
            <Container>
              <Grid container>
                <Grid item xs={4}>
                  <Stack direction="row" spacing={1}>
                    <StickyNote2OutlinedIcon />
                    <Typography variant="h6">
                      contractful Hiring Agreement
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs>
                  {this.props.withWalletConnect && <ConnectWalletButton />}
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </>
    );
  }

  // Set default props
  static defaultProps = {
    withWalletConnect: true,
  };

}
