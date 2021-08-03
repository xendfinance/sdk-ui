import React from 'react';
import { useHistory } from 'react-router';
import { Box, Button } from '@material-ui/core';
import styled from 'styled-components';

import { esusu } from '../../../methods/sdk';
import { ModalCooperativeNewGroup } from '../../modals';

import GroupIcon from '../../icons/GroupIcon';
import BackIcon from '../../../assets/images/common/left-arrow.png';

const CooperativeGroup = () => {
    const history = useHistory();
    const [totalCycleLen, setTotalCycleLen] = React.useState([]);
    const [groups, setGroups] = React.useState([]);
    const [open, setOpen] = React.useState(false);

    const handleCreateGroup = () => {
        setOpen(true);
    };
    const handleShowCycles = (gId: any) => {
        history.push(`/cooperative/group/${gId}`);
    };
    const handleGoBack = () => {
        history.goBack();
    }
    const init = async (mounted:any) => {
        const groups: any = await esusu.getGroups();

        let totalCycleLengths: any = [];
        for (let i = 0; i < groups.length; i++) {
            const cycles: any = await esusu.cyclesInGroup(groups[i][0]);
            totalCycleLengths.push(cycles.length);
        }

        if(mounted) {
            setGroups(groups);
            setTotalCycleLen(totalCycleLengths);
        }
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
                <Box className='h1'>My Cooperative Groups</Box>
                <Box className='sunset-contained create-cooperative'>
                    <Button className='h3' onClick={() => handleCreateGroup()}>Create Cooperative Group</Button>
                </Box>
            </Box>
            <Box className='group-card-container' mt={3}>
                {groups.map((each: any, i) => {
                    return (
                        <Box key={i} className='paper'>
                            <Box>
                                <GroupIcon gName='tgp' fullName={each[1]} bgColor='rgb(28,72,154)' fontColor='white' />
                            </Box>
                            <Box mt={3} mb={5} pl={3} pr={1}>
                                <Box>
                                    <Box>Total</Box>
                                    <Box>Active</Box>
                                </Box>
                                <Box>
                                    <Box>{totalCycleLen[i]}</Box>
                                    <Box>0</Box>
                                </Box>
                            </Box>
                            <Box>
                                <Box className='sunset-outlined'>
                                    <Button className='h1' variant='outlined' onClick={() => handleShowCycles(each[0])}>
                                        Open
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    );
                })}
            </Box>
            <ModalCooperativeNewGroup open={open} setOpen={setOpen} init={init}/>
            <Box p={9}></Box>
        </Container>
    )
}

export default CooperativeGroup;

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
            >div:nth-of-type(2) {
                display: flex;
                * {
                    font-weight:400 !important;
                }
                flex-direction: row;
                >div:first-of-type {
                    flex: 1;
                    * {
                        color: lightgrey;
                    }
                }
                >div {
                    * {
                        color: gray;
                    }
                    display: flex;
                    flex-direction: column;
                }
                div+div {
                    margin-top:10px;
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
`;