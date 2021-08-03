import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Box, Button } from '@material-ui/core';

import { esusu } from '../../../methods/sdk';
import { CycleBadge } from '../../badges';
import { monthNames } from '../../../months';

import BackIcon from '../../../assets/images/common/left-arrow.png';

function EsusuCycleJoin({ match }: any) {
    const history = useHistory();
    const [curCycle, setCurCycle] = React.useState([]);
    const init = async (mounted:any) => {
        const cycle: any = await esusu.info(match.params.id);
        if(mounted) setCurCycle(cycle);
    }
    const handleGoBack = () => {
        history.goBack();
    }
    const handleJoinCycle = async () => {
        const result = await esusu.join(curCycle[0]);
        console.log(result);
    }
    const returnDateFormat = (date: any) => {
        return (monthNames[date.getMonth()]) + ' ' + date.getDate() + ', ' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ' ' + (date.getHours() >= 12 ? 'pm' : 'am');
    }
    React.useEffect(() => {
        let mounted = true;
        init(mounted);
        return () => {
            mounted = false
        };
    }, [])
    return (
        <Container>
            <Box className='right-action'>
                <Box className='btn-primary h5' onClick={() => handleGoBack()}>
                    <Box component='img' {...{ src: BackIcon }} />
                    <Box component='span' mt={0.3} ml={1}>Back</Box>
                </Box>
            </Box>
            <Box className='group-card-container' mt={3}>
                <Box className='paper'>
                    <Box className='paper-title h13'>Join {localStorage.getItem('curGroupName')}</Box>
                    <Box className='paper-status' mt={2}>
                        <Box component='span' color='rgb(200,200,200)' className='h4' mr={2}>Status</Box>
                        <CycleBadge pos='free' status='pending' />
                    </Box>
                    <Box mt={1}>
                        <Box className='h4'>Not Member</Box>
                    </Box>
                    <Box className='figure-grid' mt={3}>
                        <Box>
                            <Box>
                                <Box>Start Time</Box>
                                <Box mt={1}>{returnDateFormat(new Date(parseInt(curCycle[9])))}</Box>
                            </Box>
                            <Box mt={2}>
                                <Box>No.of Slots</Box>
                                <Box mt={1}>10 slots remaining</Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Box>Payout Interval</Box>
                                <Box mt={1}>{curCycle[2]} secs</Box>
                            </Box>
                            <Box mt={2}>
                                <Box>Estimated APY</Box>
                                <Box mt={1}>Up to 15.68%</Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className='paper'>
                    <Box>
                        <Box className='figure-grid'>
                            <Box>
                                <Box>
                                    <Box>Contribution Amount</Box>
                                    <Box mt={1}>{curCycle[1]/Math.pow(10,18)} BUSD</Box>
                                </Box>
                                <Box mt={2}>
                                    <Box>Total withdrawable amount</Box>
                                    <Box mt={1}>{curCycle[1]/Math.pow(10,18)} BUSD</Box>
                                </Box>
                            </Box>
                            <Box>
                                <Box>
                                    <Box>Available balance</Box>
                                    <Box mt={1}>{curCycle[10]} BUSD</Box>
                                </Box>
                                <Box mt={2}>
                                    <Box>Payout Date</Box>
                                    <Box mt={1}>{curCycle[2]} secs</Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='join-action' mt={3}>
                        <Box>
                            <Box className='input-group'>
                                <input type='text' />
                                <Box component='span'>BUSD</Box>
                            </Box>
                            <Box className='sunset-contained join-cycle-btn' mt={1}>
                                <Button className='h22' onClick={() => handleJoinCycle()}>Join Esusu</Button>
                            </Box>
                            <Box mt={3}>
                                <Box component='span' mr={0.5}>NB:</Box> You need a minimum of 2 members to start a cycle.
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box p={9}></Box>
        </Container>
    );
}

export default EsusuCycleJoin;

const Container = styled.div`
    line-height: 1;
    height        : 100%;
    max-height    : 100%;
    background    : rgb(251, 251, 251);
    position      : relative;
    flex          : 1;
    padding-top   : 10px;
    padding-left  : 1% !important;
    padding-bottom: 20px;
    padding-right : 1% !important;
    & * {
        color         : grey;
        text-transform: none;
        font-weight   : 500 !important;
    }

    & .right-action {
        display:flex;
        .btn-primary {
            display: flex;
            align-items: center;
        }
        .btn-primary+.btn-primary {
            margin-left:20px;
        }
    }
    & .group-card-container {
        &>.paper:first-of-type {
            display: flex;
            flex-direction: column;
            >.paper-title {
                font-weight:650 !important;
                background: linear-gradient(90deg,#2042B8 25%,#FF6600 75%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                display:flex;
                justify-content: center;
            }
            >.paper-status {
                display:flex;
                align-items:center;
                justify-content:center;
            }
            >div:nth-of-type(3) {
                display:flex;
                justify-content:center;
                >.h4 {
                    color:grey;
                    background-color:rgb(230,230,230);
                    border-radius:20px;
                    width:fit-content;
                    padding:3px 10px;
                }
            }
        }
        &>.paper:last-of-type {
            display:flex;
            flex-direction:column;
            >div {
                flex:1;
                * {
                    font-size:11px;
                }
            }
            >.personal-1 {
                >div:first-of-type {
                    color:rgb(170,170,170);
                }
                >div:last-of-type {
                    color:rgb(54,54,54);
                    font-weight:700 !important;
                }
            }
            >.personal-2 {
                display:flex;
                flex-direction:column;
                justify-content: space-between;
                >div {
                    flex:1;
                    >div:first-of-type {
                        color:rgb(170,170,170);
                    }
                    >div:last-of-type {
                        color:rgb(54,54,54);
                        font-weight:700 !important;
                    }    
                }
            }
            >.join-action {
                display:flex;
                justify-content:center;
                >div {
                    width:75%;
                    >.input-group {
                        position:relative;
                        >input {
                            background:rgb(240,240,240);
                            width: calc(100% - 24px);
                            border:1px solid rgb(104,104,104);
                            outline:none;
                            border-radius:25px;
                            padding:7px 10px;
                        }
                        >span {
                            position: absolute;
                            right:10px;
                            top:50%;
                            transform:translate(0%,-50%);
                        }
                    }
                    >div:last-of-type {
                        display:flex;
                        justify-content:center;
                        font-size:8px;
                        font-style:italic;
                        span {
                            color: rgb(54,54,54);
                            font-style:italic;
                            font-size:8px;
                        }
                    }
                }
            }
        }
        .paper+.paper {
            margin-top:15px;
        }
    }
    .join-cycle-btn {
        >button {
            padding:6px 8px !important;
        }
    }
    .figure-grid {
        display:flex;
        * {
            font-size:11px;
        }
        >div:first-of-type {
            flex:2;
        }
        >div:last-of-type {
            flex:1;
        }
        >div >div{
            >div:first-of-type {
                color:rgb(170,170,170);
            }
            >div:last-of-type {
                color:rgb(54,54,54);
                font-weight:700 !important;
            }
        }
    }
`;