import {
    Paper, Grid, Container, Divider, Box, Typography, Stack, TextField, Card, CardContent
} from "@mui/material";

import WalletIcon from '@mui/icons-material/Wallet'
import TocIcon from '@mui/icons-material/Toc'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'

import TrafficLight from './TrafficLight'

const ContractfulAgreementSummary = (props) => {

    const { data } = props

    return (
        <>
        <Paper elevation={24}>

            <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}
                px={4}
                pt={4}
            >
                <WalletIcon sx={{
                    color: 'action.active',
                    mr: 1,
                    my: 0.5
                }}
                />
                <Stack sx={{
                        variant:"outlined"
                    }}
                >
                    <Typography variant="body2">
                        Public Ethereum address of the client that has created this Hiring Agreement:
                    </Typography>
                    <Typography variant="h6">
                        {data['clientAddr']}
                    </Typography>
                </Stack>
            </Box>

            <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}
                px={4}
                pt={4}
            >
                <TocIcon sx={{
                    color: 'action.active',
                    mr: 1,
                    my: 0.5
                    }}
                />
                <Stack sx={{
                        variant:"outlined"
                    }}
                >
                    <Typography variant="body2">
                        Detailed description of work and service deliverables:
                    </Typography>

                    <TextField
                        multiline
                        readonly
                        value={data['descriptionTxt']}
                        rows={4}
                        sx={{
                            width: '80vh'
                        }}
                    />
                </Stack>
            </Box>

            <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}
                px={4}
                pt={4}
            >
                <Diversity3Icon sx={{
                    color: 'action.active',
                    mr: 1,
                    my: 0.5
                    }}
                />
                <Stack sx={{
                        variant:"outlined"
                    }}
                >
                    <Typography variant="body2">
                        Long-term Hiring Agreement - collaboration:
                    </Typography>

                    <Typography variant="h6">
                        <ul style={{
                                margin: '0'
                            }}
                        >
                            <li>Engagement period: {data['engagementMonths']} months</li>
                            <li>Engagement begins on: {data['engagementStartDate']}</li>
                            <li>{data['workingCommitment']}</li>
                        </ul>
                    </Typography>
                </Stack>
            </Box>

            <Box sx={{
                display: 'flex',
                alignItems: 'center'
                }}
                p={4}
            >
                <RequestQuoteIcon sx={{
                    color: 'action.active',
                    mr: 1,
                    my: 0.5
                }}
                />
                <Card sx={{
                    width: '80vh'
                    }}
                    variant="outlined"
                >
                    <CardContent>

                    <Typography sx={{
                            my: 1.5
                        }}
                        color="text.secondary"
                    >
                        Financial details of the Hiring Agreement:
                    </Typography>

                    <Typography variant="h6">
                        <ul style={{
                                margin: '0'
                            }}
                        >
                            <li>Hourly rate: {data['hourlyRate']} US$ (paid in DAI)</li>
                            <li>{data['paymentTerms']}</li>
                            <li>Budget: {data['resultingBudget']} DAI</li>
                        </ul>
                    </Typography>

                    </CardContent>
                </Card>
            </Box>
        </Paper>

        <span>🗓️ 1st November 2022</span>
        <span>🕘 14:00 (GMT+2)</span>
        </>
    )
}

export default ContractfulAgreementSummary
