import type { NextPage } from "next"
import Router from 'next/router'

import { 
    CssBaseline, Button, Container, Grid, Typography, Paper, Divider, Link, Stack,
} from "@mui/material"

import { styled } from '@mui/system'

import NoteAddIcon from '@mui/icons-material/NoteAdd'
import BrushIcon from '@mui/icons-material/Brush';
import GppGoodTwoToneIcon from '@mui/icons-material/GppGoodTwoTone';
import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';
import PieChartTwoToneIcon from '@mui/icons-material/PieChartTwoTone';

import imgBgStructureIntro from '../public/static/bg-structure-intro.png'
import imgMoodImage from '../public/static/mood-image.png'
import imgIconChainlink from '../public/static/icon-Chainlink.png'
import imgIconPolygon from '../public/static/icon-Polygon.png'

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
                            Fair and automated contracting
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
                            onClick={(e) => handleClick(e, '/review')}
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
                            Peer-2-peer safe and secure Hiring Agreements for everyone to use.
                        </Typography>
                    </Grid>
                    <Grid item>
                    </Grid>
                </Grid>
            </Container>


            <Container>
                <Grid container pt={4} sx={{
                            background: 'url(' + imgMoodImage.src + ') no-repeat',
                            height: '564px'
                        }}
                    >
                    <Grid items xs={6}>
                    </Grid>
                    <Grid items xs>
                        <Stack direction="column" spacing={4} pt={4}>
                            <Stack direction="row" spacing={4}>
                                <Paper
                                    elevation={6}
                                    sx={{
                                        p: 2,
                                        width: '100%'
                                    }}                                
                                >
                                    <GppGoodTwoToneIcon sx={{
                                            width:'48px',
                                            height:'48px'
                                        }}
                                    />
                                    <Typography variant="h6">
                                        Safe on a global scale.
                                    </Typography>
                                    <Typography sx={{ 
                                        color: '#666',
                                        fontSize: 'smaller'
                                    }}>
                                        The Agreement is powered by a Smart Contract that works as an escrow to the hiring budget.
                                    </Typography>
                                </Paper>
                                <Paper
                                    elevation={6}
                                    sx={{
                                        p: 2,
                                        width: '100%'
                                    }}                                
                                >
                                    <SmartToyTwoToneIcon sx={{
                                            width:'48px',
                                            height:'48px'
                                        }}
                                    />
                                    <Typography variant="h6">
                                        Fully automated.
                                    </Typography>
                                    <Typography sx={{ 
                                        color: '#666',
                                        fontSize: 'smaller'
                                    }}>
                                        Fair, safe and secure on-chain aotomated payment processing.
                                    </Typography>
                                </Paper>
                            </Stack>
                            <Stack direction="row" spacing={4}>
                                <Paper
                                    elevation={6}
                                    sx={{
                                        p: 2,
                                        width: '100%'
                                    }}                                
                                >
                                    <Stack direction="row">
                                        <img src={imgIconPolygon.src} alt="Polygon Logo" width="48px" />
                                        <Typography variant="h6" px={1} pt={1}>
                                            +
                                        </Typography>
                                        <img src={imgIconChainlink.src} alt="Chainlink Logo" width="48px" />
                                    </Stack>
                                    
                                    <Typography variant="h6">
                                        Secured by the Polygon blockchain and Chainlink Oracles.
                                    </Typography>
                                    <Typography sx={{ 
                                        color: '#666',
                                        fontSize: 'smaller'
                                    }}>
                                        100% trust minimized Agreements.
                                    </Typography>
                                </Paper>
                                <Paper
                                    elevation={6}
                                    sx={{
                                        p: 2,
                                        width: '100%'
                                    }}                                
                                >
                                    <PieChartTwoToneIcon sx={{
                                            width:'48px',
                                            height:'48px'
                                        }}
                                    />
                                    <Typography variant="h6">
                                        Budget in control.
                                    </Typography>
                                    <Typography sx={{ 
                                        color: '#666',
                                        fontSize: 'smaller'
                                    }}>
                                        TODO
                                    </Typography>
                                </Paper>
                            </Stack>
                        </Stack>
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

        <Container>
            <Typography variant="caption">
                Image credits: <Link href="https://www.vecteezy.com/members/fatmawatilauda70555">fatmawatilauda70555 on vecteezy.com</Link>.
            </Typography>
        </Container>
        <ContractfulFooter />
        </>
    )
}

export default HiringAgreementHome;
