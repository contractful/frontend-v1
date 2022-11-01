import type { NextPage } from "next"
import Router from 'next/router'

import { 
    CssBaseline, Button, Container, Grid, Typography, Paper, Divider
} from "@mui/material"

import { styled } from '@mui/system'

import NoteAddIcon from '@mui/icons-material/NoteAdd'
import BrushIcon from '@mui/icons-material/Brush';

import imgBgStructureIntro from '../public/static/bg-structure-intro.png'

import ContractfulHtmlHead from "../components/HtmlHead"
import ContractfulHeader from "../components/Header"
import ContractfulFooter from "../components/Footer"

const IntroBg = styled('div')({
    background: 'url(' + imgBgStructureIntro.src + ') no-repeat',
    backgroundSize: '100% 80%'
})

const handleClick = (e, targetUrl) => {
    e.preventDefault()
    Router.push(targetUrl)
}

const HiringAgreementHome: NextPage = () => {
    return (
        <>
        <ContractfulHtmlHead />
        <CssBaseline />
        <ContractfulHeader withWalletConnect={false} />

        <IntroBg>
            <Container>
                <Grid container pt={4}>
                    <Grid item xs={2}>
                        <Typography sx={{ 
                                fontWeight: 'light',
                                fontSize: 'smaller'
                            }}
                        >
                            If you are already familiar with contractful, please use the following quick links to get started.
                        </Typography>
                    </Grid>
                    <Grid item xs></Grid>
                    <Grid item xs={4} px={2}>
                        <Typography sx={{ 
                                fontWeight: 'light',
                                fontSize: 'smaller'
                            }}
                            py={1}
                        >
                            Fair contracting
                        </Typography>
                        <Button
                            variant="outlined"
                            startIcon={<NoteAddIcon />}
                            size="large"
                            onClick={(e) => handleClick(e, '/create')}
                            fullWidth
                        >
                            Create Hiring Agreement
                        </Button>
                    </Grid>
                    <Grid item xs={4} px={2}>
                        <Typography sx={{ 
                                fontWeight: 'light',
                                fontSize: 'smaller'
                            }}
                            py={1}
                        >
                            Safely accepting an Agreement
                        </Typography>
                        <Button
                            variant="outlined"
                            startIcon={<BrushIcon />}
                            size="large"
                            onClick={(e) => handleClick(e, '/review?useCase=consent')}
                            fullWidth
                        >
                            Sign existing Agreement
                        </Button>
                    </Grid>
                </Grid>
            </Container>

            <Container>
                <Grid container pt={8}>
                    <Grid item xs={8}>
                        <Typography variant="subtitle1">
                            What is a contractful Hiring Agreement?
                        </Typography>
                        <Divider></Divider>
                        <Typography variant="h3" pt={1}>
                            Peer-2-peer safe and fair Hiring Agreements for everyone to use.
                        </Typography>
                    </Grid>
                    <Grid item>
                    </Grid>
                </Grid>
            </Container>

            <Container>
                <Grid container pt={6}>
                    <Grid item xs={6} p={4}>
                        <Paper elevation={24}>
                            <Typography p={4}>
                                <ul>
                                    <li>✔️ Fair, safe and secure on-chain payment processing.</li>
                                    <li>✔️ Clean budget planning.</li>
                                    <li>✔️ From terms to payment: Direct contract between you and 0xjohndoedeveloper.eth. No third party involved.</li>
                                </ul>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs p={4}>
                        <Paper elevation={24}>
                            <Typography p={4}>
                                <p>Hello World</p>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            <Container maxWidth="sm">
                <Typography variant="h2">
                    <p>How it works?</p>
                </Typography>
                <Typography variant="h3">
                    <p>1. First step</p>
                    <p>2. Second step</p>
                    <p>3. Third step</p>
                </Typography>
            </Container>
        </IntroBg>

        <Container>
            <Grid container pt={4}>
                <Grid item xs={6} p={4}>
                    <Paper elevation={24}>
                        <Typography p={4}>
                            <p>For Clients</p>
                            <p>Ready to use contractful for fair contracting</p>
                            <Button
                                onClick={(e) => handleClick(e, '/create')}
                            >
                                Create Hiring Agreement
                            </Button>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs p={4}>
                    <Paper elevation={24}>
                        <Typography p={4}>
                            <p>For Service provider</p>
                            <p>Safely accepting an Agreement</p>
                            <Button
                                onClick={(e) => handleClick(e, '/review?useCase=consent')}
                            >
                                Sign existing Agreement
                            </Button>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

        </Container>

        <ContractfulFooter />
        </>
    )
}

export default HiringAgreementHome;
