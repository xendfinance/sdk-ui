import React from 'react';
import { useHistory } from 'react-router';
import { AddCircleOutlineOutlined, ExpandMore } from '@material-ui/icons';
import { Box, Button } from '@material-ui/core';
import { InputSearch } from '../inputfields';
import { ModalEsusuNew } from '../modals';
import styled from 'styled-components';

import EsusuEstimate from '../esusu/EsusuEstimate';

const Esusu = ({ }: any) => {
    const history = useHistory();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleJoin = () => {
        history.push('/esusu-join');
    };
    const handleOpenContributions = () => {
        history.push('/esusu-contributions');
    }
    return (
        <EsusuContainer>
            <Box className='right-action'>
                <Box className='sunset-outlined'>
                    <Button className='h5' variant='outlined' onClick={() => handleOpenContributions()} >
                        My Esusu Unions
                    </Button>
                </Box>
                <Box className='sunset-outlined'>
                    <Button className='h5' variant='outlined' onClick={() => handleOpenContributions()} >
                        View Contributions
                    </Button>
                </Box>
            </Box>
            <EsusuEstimate />
            <Box mt={4} mb={4} className='mode-container'>
                <InputSearch placeholder='Search Esusu Groups' type={2} />
                <Box ml={2} className='h11' component='span'>
                    Filter:
                </Box>
                <Button className='h11 filter-btn' >
                    <Box component='span'>All</Box>
                    <ExpandMore fontSize='small' />
                </Button>
                <Box className='create-side'>
                    <Box className='sunset-contained'>
                        <Button className='create-group h8' variant='contained' onClick={() => handleOpen()}>
                            <AddCircleOutlineOutlined />
                            <Box ml={0.5}>
                                <Box component='span'>Create Esusu Group</Box>
                            </Box>
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box className='paper group'>
                <Box className='paper-status h12'>
                    Pending
                </Box>
                <Box className='group-info'>
                    <Box className='group-title'>
                        <Box className='group-avatar'>
                            <Box className='h4'>
                                MG
                            </Box>
                        </Box>
                        <Box className='h7' ml={1}>Medical Students Con...</Box>
                    </Box>
                    <Box mt={2} className='main-info'>
                        <table>
                            <thead>
                                <tr className='h10'>
                                    <td>Contribution</td>
                                    <td>Payout  Interval</td>
                                    <td>Available Slots</td>
                                </tr>
                            </thead>
                            <tbody className='h6'>
                                <tr>
                                    <td>2,000 DAI</td>
                                    <td>12 hours</td>
                                    <td>0 of 3</td>
                                </tr>
                            </tbody>
                        </table>
                    </Box>
                </Box>
                <Box className='group-join'>
                    <Box className='sunset-outlined'>
                        <Button className='h2' variant='outlined' onClick={() => handleJoin()}>
                            Join
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box mt={3} className='paper group'>
                <Box className='paper-status h12'>
                    Pending
                </Box>
                <Box className='group-info'>
                    <Box className='group-title'>
                        <Box className='group-avatar'>
                            <Box className='h4'>
                                MG
                            </Box>
                        </Box>
                        <Box className='h7' ml={1}>Medical Students Con...</Box>
                    </Box>
                    <Box mt={2} className='main-info'>
                        <table>
                            <thead>
                                <tr className='h10'>
                                    <td>Contribution</td>
                                    <td>Payout  Interval</td>
                                    <td>Available Slots</td>
                                </tr>
                            </thead>
                            <tbody className='h6'>
                                <tr>
                                    <td>2,000 DAI</td>
                                    <td>12 hours</td>
                                    <td>0 of 3</td>
                                </tr>
                            </tbody>
                        </table>
                    </Box>
                </Box>
                <Box className='group-join'>
                    <Box className='sunset-outlined'>
                        <Button className='h2' variant='outlined' onClick={() => handleJoin()}>
                            Join
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box p={9}></Box>
            <ModalEsusuNew open={open} setOpen={setOpen} />
        </EsusuContainer>
    )
}

export default Esusu;

const EsusuContainer = styled.div`
    line-height: 1;
    & * {
        color         : grey;
        text-transform: none;
        font-weight   : 400;
    }
    height        : 100%;
    max-height    : 100%;
    background    : rgb(251, 251, 251);
    position      : relative;
    flex          : 1;
    padding-top   : 10px;
    padding-left  : 1% !important;
    padding-bottom: 20px;
    padding-right : 1% !important;

    & .right-action {
        display:flex;
        & .sunset-outlined:nth-child(1) {
            margin-right:20px;
        }
    }
    & .mode-container {
        display    : flex;
        justify-content:space-between;
        align-items: center;
        flex-wrap:wrap;

        .filter-btn {
            padding-left:0px !important;
            span {
                color:black;
                font-weight: 500;
            }
            svg {
                fill:orange;
                width:14.53px;
                height:12.64px;
            }
        }
        .v1-mode {
            color      : #969696;
            font-weight: 500;
        }

        .v1-y-curve {
            padding: 5px 30px !important;
        }

        .v1-busd-curve {
            margin-left  : 20px;
            padding      : 5px 30px !important;
            border-radius: 25px !important;
        }

        .create-side {
            flex           : 1;
            display        : flex;
            justify-content: flex-end;
        }
    }

    & .create-group {
        padding: 3px 4px !important;
        & .MuiSvgIcon-root {
            width:14.03px;
            height:14.03px;
            fill: white;
        }

        .MuiButton-label {
            .MuiBox-root span{
                color: white !important;
                font-weight: 500;
                vertical-align:-webkit-baseline-middle;
            }
        }
    }

    & .group {
        display        : flex;
        justify-content: space-between;
        position:relative;
        padding:20px;
        .paper-status {
            border-top-left-radius:7px;
            border-bottom-right-radius:7px;
            position:absolute;
            padding:1px 7px;
            color:#FF6600;
            line-height: 150%;
            top:0px;
            left:0px;
            font-weight: 500;
            background-color :rgba(255,102,0,.06);
        }
        .group-info {
            .main-info {
                table {
                    width:176%;
                    thead tr td {
                        color: #9E9E9E;
                        min-width:30%;
                    }
                    tbody tr td {
                        line-height:259.7%;
                        color: #474747;
                        font-weight: 500;
                    }
                }
            }
            .group-title {
                display:flex;
                .group-avatar {
                    width:23.27px;
                    height:23.27px;
                    border-radius:100%;
                    background:#ACB820;
                    position:relative;
                    .h4 {
                        position:absolute;
                        top:50%;
                        left:50%;
                        color:white;
                        transform:translate(-50%,-50%);
                    }
                }
                .h7 {
                    font-weight: 500;
                    align-self:center;
                }
            }
        }
        .group-join {
            align-self:center;
            .sunset-outlined {
                .MuiButton-root {
                    padding:0px !important;
                    .MuiButton-label {
                        color:#484848;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 600px) {
        .group {
            padding: 15px;
        }
    }
`;