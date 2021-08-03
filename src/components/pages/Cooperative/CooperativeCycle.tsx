import React from 'react';
import { useHistory } from 'react-router';
import { Box, Button } from '@material-ui/core';
import styled from 'styled-components';

import { esusu } from '../../../methods/sdk';
import { ModalCooperativeNewCycle } from '../../modals';

import GroupIcon from '../../icons/GroupIcon';
import BackIcon from '../../../assets/images/common/left-arrow.png';
import BUSDIcon from '../../../assets/images/personal/coin1.png';

import { monthNames } from '../../../months';

interface GroupInfo {
    groupName: string;
}

const CooperativeCycle = ({ match }: any) => {
    const history = useHistory();
    const [curGroup, setCurGroup] = React.useState<GroupInfo>({ groupName: '' });
    const [cycles, setCycles] = React.useState([]);
    const [open, setOpen] = React.useState(false);

    const handleJoinCycle = (id: any) => {
        history.push(`/cooperative/join/${id}`);
    }
    const handleCreateCycle = () => {
        setOpen(true);
    };
    const handleGoBack = () => {
        history.goBack();
    }
    const init = async (mounted:any) => {
        const groups: any = await esusu.getGroups();
        const cycles: any = await esusu.cyclesInGroup(match.params.id);

        if(mounted) {
            if(groups.length > 0)
                localStorage.setItem('curGroupName',groups.filter((each: any) => each[0] === match.params.id)[0][1]);

            setCurGroup(groups.filter((each: any) => each[0] === match.params.id)[0]);
            setCycles(cycles);
        }
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
    }, []);
    return (
        <Container>
            <Box className='right-action'>
                <Box className='btn-primary h5' onClick={() => handleGoBack()}>
                    <Box component='img' {...{ src: BackIcon }} />
                    <Box component='span' mt={0.3} ml={1}>Back</Box>
                </Box>
            </Box>
            <Box className='group-action' mt={3}>
                <Box className='h1'>{localStorage.getItem('curGroupName')}</Box>
                <Box className='sunset-contained create-cooperative'>
                    <Button className='h3' onClick={() => handleCreateCycle()}>Create Cycle</Button>
                </Box>
            </Box>
            <Box className='group-card-container' mt={3}>
                {cycles.map((each: any, i) => {
                    return (
                        <Box key={i} className='paper'>
                            <Box>
                                <Box>
                                    <GroupIcon gName='tgp' bgColor='rgb(28,72,154)' fontColor='white' />
                                    <Box component='img' {...{ src: BUSDIcon }} width='40px' height='40px' />
                                </Box>
                            </Box>
                            <Box mt={4} mb={5} >
                                <Box>
                                    <Box>Deposit Amount</Box>
                                    <Box><Box component='span'>{each.DepositAmount / Math.pow(10, 18)}</Box> BUSD</Box>
                                </Box>
                                <Box>
                                    <Box>Payout interval Per Member</Box>
                                    <Box>{each.PayoutIntervalSeconds} secs</Box>
                                </Box>
                                <Box>
                                    <Box>Estimated APY</Box>
                                    <Box className='cycle-status'>up to 15%</Box>
                                </Box>
                                <Box>
                                    <Box>Start Date</Box>
                                    <Box>{returnDateFormat(new Date(parseInt(each[9])))}</Box>
                                </Box>
                            </Box>
                            <Box>
                                <Box className='sunset-outlined'>
                                    <Button className='h1' variant='outlined' onClick={() => handleJoinCycle(each.CycleId)}>
                                        Open
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    );
                })}
            </Box>
            <ModalCooperativeNewCycle open={open} setOpen={setOpen} curGroup={curGroup} init={init} />
            <Box p={9}></Box>
        </Container>
    )
}

export default CooperativeCycle;

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
    & .group-action {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &>.h1 {
            font-size:18px !important;
        }
        
        &>.create-cooperative {
            &>button {
                padding: 3px 20px !important;

                & .MuiButton-label: {
                    color: white !important;
                    font-weight: 500;
                }
            }
        }
    }
    & .group-card-container {
        &>.paper {
            display: flex;
            flex-direction: column;
            >div:first-of-type div {
                display: flex;
                justify-content: space-between;
            }
            >div:nth-of-type(2) {
                display: flex;
                * {
                    font-weight:400 !important;
                }
                flex-direction: column;
                >div {
                    display:flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    >div:first-of-type {
                        font-size:16px;
                        color:rgb(200,200,200);
                    }
                    >div:last-of-type {
                        color:grey;
                        text-align: right;
                    }
                }
                >div+div {
                    margin-top:5px;
                }
            }
            >div:last-of-type {
                display: flex;
                justify-content: flex-end;
                & >.sunset-outlined {
                    width: fit-content !important;
                }
            }
        }
        .paper+.paper {
            margin-top:15px;
        }
    }
    & .cycle-status {
        color: green !important;
    }
`;