import {
    Link, AppBar, Toolbar, Typography, Container, Alert
} from '@mui/material'

import SecurityIcon from '@mui/icons-material/Security'

const ContractfulHeader = () => {
    return (
        <>
            <span>DEBUG: </span>
            <Link href="/">HiringAgreementHome</Link>
            <span> | </span>
            <Link href="/create">CreateHiringAgreement</Link>
            <span> | </span>
            <span>ReviewHiringAgreement ? </span>
            <Link href="/review?useCase=consent">consent</Link>
            <span> ? </span>
            <Link href="/review?useCase=check">check</Link>
            <span> ? </span>
            <Link href="/review?useCase=extend">extend</Link>

            <AppBar
                position="static"
            >
                <Toolbar>
                    <Container>
                        <Typography variant="h6" component="div">
                            <SecurityIcon />
                            contractful Hiring Agreement
                        </Typography>
                    </Container>
                </Toolbar>
            </AppBar>
            <Alert severity="info">
                    Note: This is a beta implementation on the blockchain testnet. If you want to use this in production, please visit <Link href="https://github.com/contractful" target="_new">https://github.com/contractful</Link> to get in touch.
            </Alert>
        </>
    );
}

export default ContractfulHeader
