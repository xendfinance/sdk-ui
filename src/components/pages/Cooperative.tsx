import React from 'react';
import { AddCircleOutlineOutlined } from '@material-ui/icons';
import { Box, Button } from '@material-ui/core';
import styled from 'styled-components';

import { InputSearch } from '../inputfields';
import { ModalCooperativeNewGroup } from '../modals';
import { baseUrl } from '../../constants';
import EsusuEstimate from '../esusu/EsusuEstimate';

const Cooperative = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpenCreateGroupModal = () => {
        setOpen(true);
    };
    return (
        <CooperativeContainer>
            <Box className='right-action'>
                <Box className='sunset-outlined'>
                    <Button className='h5' variant='outlined'>
                        Overview
                    </Button>
                </Box>
                <Box className='sunset-outlined'>
                    <Button className='h5' variant='outlined'>
                        My Cooperative
                    </Button>
                </Box>
                <Box className='sunset-outlined'>
                    <Button className='h5' variant='outlined'>
                        Contributions
                    </Button>
                </Box>
            </Box>
            <EsusuEstimate />
            <Box mt={4} mb={4} className='mode-container'>
                <InputSearch placeholder='Search Esusu Groups' type={2} iconSize={11.72} fontSize='h17' />
                <Box className='create-side'>
                    <Box className='sunset-contained'>
                        <Button className='create-group h18' variant='contained' onClick={() => handleOpenCreateGroupModal()}>
                            <AddCircleOutlineOutlined />
                            <Box ml={0.5}>
                                <Box component='span'>Create a cooperative group</Box>
                            </Box>
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box className='paper group'>
                <Box className='group-img'>
                    <img alt='' src={baseUrl + 'personal/coin2.png'} />
                    <Box ml={1.5} className='group-info'>
                        <Box className='h19 group-name'>John Esusu</Box>
                        <Box className='h20' mt={0.75}>Tether USD</Box>
                    </Box>
                </Box>
                <Box className='group-info text-center'>
                    <Box className='h19'>$ 50.00</Box>
                    <Box className='h20' mt={1}>Min. Contribution</Box>
                </Box>
                <Box className='group-info text-center'>
                    <Box className='h19'>30 days</Box>
                    <Box className='h20' mt={1}>Lockup Period</Box>
                </Box>
                <Box mr={5} className='group-info text-center'>
                    <Box className='h19'>6% - 12%</Box>
                    <Box className='h20' mt={1}>Estimated APY</Box>
                </Box>
            </Box>
            <Box mt={2} className='paper group'>
                <Box className='group-img'>
                    <img alt='' src={baseUrl + 'personal/coin1.png'} />
                    <Box ml={1.5} className='group-info'>
                        <Box className='h19 group-name'>Farmers Saving Union</Box>
                        <Box className='h20' mt={0.75}>Tether USD</Box>
                    </Box>
                </Box>
                <Box className='group-info text-center'>
                    <Box className='h19'>$ 50.00</Box>
                    <Box className='h20' mt={1}>Min. Contribution</Box>
                </Box>
                <Box className='group-info text-center'>
                    <Box className='h19'>30 days</Box>
                    <Box className='h20' mt={1}>Lockup Period</Box>
                </Box>
                <Box mr={5} className='group-info text-center'>
                    <Box className='h19'>6% - 12%</Box>
                    <Box className='h20' mt={1}>Estimated APY</Box>
                </Box>
            </Box>
            <Box p={9}></Box>
            <ModalCooperativeNewGroup open={open} setOpen={setOpen} />
        </CooperativeContainer>
    )
}

export default Cooperative;

const CooperativeContainer = styled.div`
    line-height: 1;
    & * {
        color         : grey;
        text-transform: none;
        font-weight   : 500 !important;
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
        & .sunset-outlined+.sunset-outlined {
            margin-left:20px;
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
            flex           : 1.5;
            display        : flex;
            justify-content: flex-end;
        }
    }

    & .create-group {
        padding: 3px 4px !important;
        & .MuiSvgIcon-root {
            width:13.33px;
            height:13.33px;
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

    .group {
        display        : flex;
        justify-content: space-between;
        padding:13.82px;
        * {
            text-overflow: ellipsis;
        }

        .group-img {
            display: flex;

            img {
                align-self: center;
                width:23.93px;
                height:23.93px;
            }
        }

        .group-info {
            display        : flex;
            flex           : 1 1;
            flex-direction : column;
            justify-content: center;
            min-width      : 12%;

            .MuiBox-root:nth-child(1) {
                color      : black;
                font-weight: 500;
            }
            .MuiBox-root:nth-child(2) {
                font-weight: 400 !important;
            }
        }

        .group-name {
            width: 64px;
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

    @media screen and (max-width: 600px) {
        .group {
            padding: 15px;
        }
    }
`;