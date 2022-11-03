import type { NextPage } from "next"
import Router from 'next/router'

import { 
    CssBaseline,
    Button,
    Container,
    Grid,
    Typography,
    Paper,
    Divider,
    Stack,
    Avatar,
    Box
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
import imgForClient from "../public/static/for-client-avatar.png"
import imgForServiceProvider from "../public/static/for-serviceprovider-avatar.png"

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
                                color: '#666',
                                fontSize: 'smaller'
                            }}
                        >
                            If you are already familiar with contractful, please use the following quick links to get started.
                        </Typography>
                    </Grid>
                    <Grid item xs></Grid>
                    <Grid item xs={4} px={2}>
                        <Typography sx={{ 
                                color: '#666',
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
                                color: '#666',
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
                            </Stack>
                            <Stack direction="row" spacing={4}>
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
                                        Automated payments.
                                    </Typography>
                                    <Typography sx={{ 
                                        color: '#666',
                                        fontSize: 'smaller'
                                    }}>
                                        Fair, safe and secure on-chain automated payment processing.
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
                                        Full budget control.
                                    </Typography>
                                    <Typography sx={{ 
                                        color: '#666',
                                        fontSize: 'smaller'
                                    }}>
                                        The Agreement ensures clean budget planning that matches your product development roadmap.
                                    </Typography>
                                </Paper>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>                
            </Container>

            <Container sx={{
                pt:4
            }}>
                <Typography variant="h1" sx={{
                        width: '100%',
                        textAlign: 'center'
                    }}
                >
                    How it works?
                </Typography>
            </Container>
            
            <Container>
                <Typography variant="h3">
                    <ol>
                        <li style={{ paddingBottom: 32 }}>Build your team: Come to individual Agreements (off-chain).</li>
                        <li style={{ paddingBottom: 32 }}>Formulate all details of the Agreement and use contractful to deploy them on-chain.</li>
                        <li style={{ paddingBottom: 32 }}>Manage budget and payments automatically for a long-term collaboration relationship.</li>
                    </ol>
                </Typography>
            </Container>
        </IntroBg>

        <Container>
            <Grid container pt={4}>
                <Grid item xs={6} p={4}>
                    <Stack>
                        <div style={{
                                width: '100%',                             
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Avatar sx={{
                                    width: '150px',
                                    height: '150px',
                                    border: "1px solid #bbb"
                                }}
                                src={imgForClient.src}
                            >
                            </Avatar>
                        </div>
                        <Paper elevation={12} style={{
                                marginTop: '-45px'
                            }}
                        >
                            <Typography variant="h4" pt={7} pl={4}>
                                Build your team
                            </Typography>
                            <Typography px={4} pt={1}>
                                <b>As a client:</b> Ready to use contractful to create a Hiring Agreement.
                            </Typography>
                            <Box pt={1} px={4} pb={4} sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Button
                                    onClick={(e) => handleClick(e, '/create')}
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    startIcon={<NoteAddIcon />}
                                    sx={{
                                        width: '75%'
                                    }}
                                >
                                    Create Hiring Agreement
                                </Button>
                            </Box>
                        </Paper>
                    </Stack>
                </Grid>
                <Grid item xs p={4}>
                    <Stack>
                        <div style={{
                                width: '100%',                             
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Avatar sx={{
                                    width: '150px',
                                    height: '150px',
                                    border: "1px solid #bbb"
                                }}
                                src={imgForServiceProvider.src}
                            >
                            </Avatar>
                        </div>
                        <Paper elevation={12} style={{
                                marginTop: '-45px'
                            }}
                        >
                            <Typography variant="h4" pt={7} pl={4}>
                                Start your collaboration
                            </Typography>
                            <Typography px={4} pt={1}>
                                <b>As a service provider:</b> Review and consent to an Agreement prepared for you.
                            </Typography>
                            <Box pt={1} px={4} pb={4} sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Button
                                    onClick={(e) => handleClick(e, '/review')}
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    startIcon={<BrushIcon />}
                                    sx={{
                                        width: '75%'
                                    }}
                                >
                                    Sign existing Agreement
                                </Button>
                            </Box>
                        </Paper>
                    </Stack>
                </Grid>
            </Grid>
        </Container>

        <ContractfulFooter withImageCredits={true} />
        </>
    )
}

export default HiringAgreementHome;
