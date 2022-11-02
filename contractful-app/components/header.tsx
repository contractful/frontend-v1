import * as React from "react"

import {
    Link, AppBar, Toolbar, Typography, Container, Alert, Stack, Grid
} from '@mui/material'

import SecurityIcon from '@mui/icons-material/Security'

import { ConnectWalletButton } from './ConnectWalletButton'

export default class ContractfulHeader extends React.Component {

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

                <AppBar
                    position="static"
                >
                    <Toolbar>
                        <Container>
                            <Grid container>
                                <Grid item xs={4}>
                                    <Stack direction="row" spacing={1}>
                                        <SecurityIcon />
                                        <Typography variant="h6">
                                            contractful Hiring Agreement
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                </Grid>
                                <Grid item xs>
                                    {this.props.withWalletConnect &&
                                        <ConnectWalletButton />
                                    }
                                </Grid>
                            </Grid>
                        </Container>
                    </Toolbar>
                </AppBar>
                <Alert severity="info">
                        Note: This is a beta implementation deployed to the Polygon Mumbai testnet. If you want to use this in production on mainnet, please visit <Link href="https://github.com/contractful" target="_new">https://github.com/contractful</Link> to get in touch.
                </Alert>
            </>
        )
    }

    // Set default props
    static defaultProps = {
        withWalletConnect: true
    }

}
