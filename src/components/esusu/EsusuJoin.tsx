import { useHistory } from 'react-router';
import { Button, Box } from '@material-ui/core';
import styled from 'styled-components';

import { InputFigure } from '../inputfields';
import BackIcon from '../../assets/images/esusu/left-arrow.png';

const EsusuJoin = () => {
    const history = useHistory();
    const handleBackToMain = () => {
        history.push('/esusu');
    }
    const handleNextStep = () => {
        history.push('/esusu-contributions');
    }
    return (
        <EsusuContainer>
            <Box className='right-action'>
                <Button className='primary-outlined h11' variant='outlined' onClick={() => handleBackToMain()}>
                    <Box component='span'><Box component='img' {...{alt:''}} {...{src:BackIcon}} /></Box>
                    <Box ml={4} component='span'>Back</Box>
                </Button>
            </Box>
            <Box className='paper group-details text-center' mt={3} >
                <Box className='title h5' component='span'>
                    Join {'{{Group Name}}'}
                </Box>
                <Box mt={7} className='detail-wrapper'>
                    <Box className='info text-left h8'>
                        <Box component='article'>Payout Interval:</Box>
                        <Box mb={3} component='article'>2 Days</Box>
                        <Box component='article'>Max. No. of Slot</Box>
                        <Box mb={3} component='article'>10 slots remaining</Box>
                        <Box component='article'>Start Date</Box>
                        <Box mb={3} component='article'>Wed, 22 Sep. 2020 09:00 UTC</Box>
                        <Box component='article'>Estimated APY</Box>
                        <Box component='article'>Up to 15.68%</Box>
                    </Box>
                    <Box className='action'>
                        <Box>
                            <Box mb={5} component='table'>
                                <tbody>
                                    <tr className='h8'>
                                        <td>50.00 DAI</td>
                                        <td>0.000 DAI</td>
                                    </tr>
                                    <tr className='h11'>
                                        <td>Contribution Amount</td>
                                        <td>Available balance</td>
                                    </tr>
                                </tbody>
                            </Box>
                            <InputFigure placeholder='50.00000' unit='DAI' />
                            <Box mt={5} className='sunset-contained'>
                                <Button className='h8' variant='contained' onClick={() => handleNextStep()}>
                                    Join Esusu
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box p={2}></Box>
        </EsusuContainer>
    );
}

export default EsusuJoin;

const EsusuContainer = styled.div`
    line-height: 1;
    & * {
        color         : grey;
        text-transform: none;
    }
    height        : 100%;
    max-height    : 100%;
    background    : rgb(251, 251, 251);
    position      : relative;
    flex          : 1;
    padding-top   : 10px;
    padding-left  : 5% !important;
    padding-bottom: 100px;
    padding-right : 5% !important;

    .group-details {
        .title {
            background             : -webkit-linear-gradient(0deg, #2042B8 30%, #FF6600 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight            : 600;
        }

        .detail-wrapper {
            display        : flex;
            justify-content: space-around;

            .info {
                article:nth-child(odd) {
                    color      : #808080;
                    line-height: 150%;
                }

                article:nth-child(even) {
                    color      : black;
                    font-weight: 700;
                    line-height: 150%;
                }
            }

            .action {
                align-items: center;
                display    : flex;

                table {
                    width: 100%;

                    tr:nth-child(1) td {
                        color      : black;
                        font-weight: 500;
                    }

                    tr:nth-child(2) td {
                        color: #A2A2A2;
                    }
                }
            }
        }
    }

    .save-groups {
        padding: 20px 38px;

        .title {
            font-weight: 500;
            color         : black;
            text-transform: uppercase;
        }

        .group-tab {
            .MuiButtonBase-root {
                min-width: 50px;
            }

            .MuiTab-root:nth-child(1) .MuiTab-wrapper {
                transform: translate(-10px, 0px);
            }

            .Mui-selected {
                .MuiTab-wrapper {
                    color      : #263238;
                    font-weight: 500;
                }
            }

            .MuiTabs-indicator {
                height          : 3px;
                transform       : translate(0px, -5px);
                background-image: linear-gradient(to right, #2042B8, #FF6600);
            }
        }

        .esusu-panel {
            display       : flex;
            padding:24px 0px 5px 0px;
            margin-bottom: 50px;
            overflow-x:auto;

            table {
                border-collapse: collapse;
                border-bottom  : 1px solid #C4C4C4;
                flex           : 1;

                thead tr {
                    background     : #F5F5F5;
                    border-collapse: collapse;
                    font-weight   : 400 !important;

                    th {
                        color       : #8C8C8C;
                        padding     : 5px 0px;
                        padding-left: 3px;
                    }
                }

                tbody tr td {
                    padding: 10px 0px;
                    color  : black;
                }

                tbody tr td:nth-child(4) {
                    color: #0F9A0C;
                }

                tbody tr td:nth-child(6) {
                    color: #A2A2A2;
                }
            }
        }
    }
`;
