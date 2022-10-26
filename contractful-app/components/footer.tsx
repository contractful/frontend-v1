import { 
    Container, Divider, Typography, Grid
} from "@mui/material";

const ContractfulFooter = () => {
    return (
        <>
        <Container>
            <Grid container pt={6}>
                <Grid item xs>
                    <Divider />
                    <Typography>
                        <p>Made with ❤️ by the contractful team 2022.</p>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}

export default ContractfulFooter
