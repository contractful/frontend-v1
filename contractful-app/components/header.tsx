import { 
    Link, AppBar, Toolbar, Grid, Typography
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
            <Link href="/consent">ConsentHiringAgreement</Link>

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
        </>
    );
}

export default ContractfulHeader
