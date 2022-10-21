import { 
    Link, AppBar, Toolbar, Grid, Typography, Container
} from "@material-ui/core";
import { 
    Security
} from "@material-ui/icons";

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

            <AppBar position="static">
                <Toolbar>
                <Container maxWidth="md">
                    <Security style={{
                            float: "left"
                        }}
                    />
                    <Typography variant="h6" color="inherit">
                    contractful Hiring Agreement
                    </Typography>
                </Container>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default ContractfulHeader
