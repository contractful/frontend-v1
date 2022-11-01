import {
    Paper, Box, Typography, Stack, TextField, Card, CardContent, Divider
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
                <Card sx={{
                    width: '80vh'
                    }}
                    variant="outlined"
                >
                    <CardContent>
                    <Stack sx={{
                            variant:"outlined"
                        }}
                    >
                        <Typography variant="body2">
                            Public Ethereum address of your client that has created this Hiring Agreement:
                        </Typography>
                        <Typography variant="h6" pt={1}>
                            {data['clientAddr']}
                        </Typography>
                    </Stack>
                    </CardContent>
                </Card>
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
                        Detailed description of work and service deliverables:
                    </Typography>

                    <Divider />
                    
                    <Typography variant="body1" sx={{
                            minHeight: '15vh',
                            maxHeight: '15vh',
                            overflow: 'auto',
                            whiteSpace: 'pre-line',
                            backgroundColor: 'rgba(0, 0, 0, 0.04)'
                        }}
                        pt={2}
                    >
                        {data['descriptionTxt']}
                    </Typography>

                    </CardContent>
                </Card>
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
                        Long-term Hiring Agreement - collaboration model:
                    </Typography>

                    <Divider />

                    <Stack direction="row" pt={2}>
                        <Typography variant="body2" sx={{
                                width:'20vh',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            Engagement period:
                        </Typography>
                        <Typography variant="h6">
                            {data['engagementMonths']} months
                        </Typography>
                    </Stack>

                    <Stack direction="row" pt={1}>
                        <Typography variant="body2" sx={{
                                width:'20vh',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            Engagement begins on:
                        </Typography>
                        <Typography variant="h6">
                            {data['engagementStartDate']}
                        </Typography>
                    </Stack>

                    <Stack direction="row" pt={1}>
                        <Typography variant="body2" sx={{
                                width:'20vh',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            Commitment:
                        </Typography>
                        <Typography variant="h6">
                            {data['workingCommitment']}
                        </Typography>
                    </Stack>
                </CardContent>
                </Card>
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

                    <Divider />

                    <Stack direction="row" pt={2}>
                        <Typography variant="body2" sx={{
                                width:'20vh',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            Hourly rate:
                        </Typography>
                        <Typography variant="h6">
                            {data['hourlyRate']} US$ (paid in DAI)
                        </Typography>
                    </Stack>

                    <Stack direction="row" pt={1}>
                        <Typography variant="body2" sx={{
                                width:'20vh',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            Payment terms:
                        </Typography>
                        <Typography variant="h6">
                            {data['paymentTerms']}
                        </Typography>
                    </Stack>

                    <Stack direction="row" pt={1}>
                        <Typography variant="body2" sx={{
                                width:'20vh',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            Budget:
                        </Typography>
                        <Typography variant="h6">
                            {data['resultingBudget']} DAI
                        </Typography>
                    </Stack>
                    </CardContent>
                </Card>
            </Box>
        </Paper>
        </>
    )
}

export default ContractfulAgreementSummary
