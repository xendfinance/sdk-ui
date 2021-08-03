import React from 'react';
import { useHistory } from 'react-router';
import { Box, Button } from '@material-ui/core';
import styled from 'styled-components';

import { esusu } from '../../../methods/sdk';
import { ModalCooperativeNew } from '../../modals';
import CooperativeEstimate from '../../cooperative/CooperativeEstimate';
import { CycleBadge } from '../../badges';

const Cooperative = () => {
    const history = useHistory();
    const [nameAll, setNameAll] = React.useState([]);
    const [cycleAll, setCycleAll] = React.useState([]);
    const [open, setOpen] = React.useState(false);

    const init = async (mounted:any) => {
        const groups: any = await esusu.getGroups();

        let cyclesTemp: any = [];
        let nameTemp: any = [];
        groups.map(async (each: any, i: number) => {
            await esusu.cyclesInGroup(each[0]).then(res => {
                if (res.length > 0) {
                    cyclesTemp = cyclesTemp.concat(res);
                    for (let j = 0; j < res.length; j++) nameTemp.push(each[1]);
                }
                if (i === groups.length - 2 && mounted) {
                    setCycleAll(cyclesTemp);
                    setNameAll(nameTemp);
                }
            });
        });
    }
    const handleJoin = (cycleId: any, groupName: any) => {
        history.push(`/cooperative/join/${cycleId}`);
        localStorage.setItem('curGroupName',groupName);
    };
    const handleViewGroups = () => {
        history.push('/cooperative/groups');
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
                <Box className='btn-primary h5' onClick={() => handleViewGroups()}>
                    My Cooperative Unions
                </Box>
                <Box className='btn-primary h5'>
                    Contributions
                </Box>
            </Box>
            <CooperativeEstimate />
            {cycleAll.map((each: any, i: number) => {
                return (
                    <Box key={i} mt={3} className='paper group'>
                        <CycleBadge status={i % 2 ? 'pending' : 'active'} isSkew={true} />
                        <Box className='group-info'>
                            <Box className='group-title'>
                                <Box className='group-avatar'>
                                    <Box className='h4'>
                                        MG
                                    </Box>
                                </Box>
                                <Box className='group-details'>
                                    <Box className='h3' ml={1}>{nameAll[i]}</Box>
                                    <Box className='h7' mt={1} ml={1}>BUSD Stablecoin</Box>
                                </Box>
                            </Box>
                            <Box mt={2} className='main-info'>
                                <table>
                                    <thead>
                                        <tr className='h6'>
                                            <td>{each[1] / Math.pow(10, 18)} BUSD</td>
                                            <td>{each[2]} secs</td>
                                            <td>0 of 3</td>
                                        </tr>
                                    </thead>
                                    <tbody className='h10'>
                                        <tr>
                                            <td>Contribution</td>
                                            <td>Payout Interval Per Member</td>
                                            <td>Available Slots</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Box>
                        </Box>
                        <Box className='group-join'>
                            <Box className='sunset-outlined'>
                                <Button className='h2' variant='outlined' onClick={() => handleJoin(each[0], nameAll[i])}>
                                    Join
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                );
            })}
            <Box p={9}></Box>
            <ModalCooperativeNew open={open} setOpen={setOpen} />
        </Container>
    )
}

export default Cooperative;

const Container = styled.div`
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
        .btn-primary+.btn-primary {
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
            flex           : 1;
            display        : flex;
            justify-content: flex-end;
        }
    }

    & .create-group {
        padding: 3px 4px !important;
        & .MuiSvgIcon-root {
            width:13.23px;
            height:13.23px;
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
        .group-info {
            width: 70%;
            .main-info {
                table {
                    text-align:center;
                    width:100%;
                    thead tr td {
                        color: #474747;
                        min-width:20%;
                        font-weight:700 !important;
                    }
                    tbody tr td {
                        line-height:259.7%;
                        color: #9E9E9E;
                        font-weight: 500;
                    }
                }
            }
            .group-title {
                display:flex;
                .group-avatar {
                    width:30px;
                    height:30px;
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
                .group-details {
                    display:flex;
                    justify-content:space-evenly;
                    flex-direction:column;
                    .h3 {
                        font-weight: 500;
                        color: #474747;
                    }
                    .h7 {
                        font-weight: 500;
                        color: #9E9E9E;
                    }
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