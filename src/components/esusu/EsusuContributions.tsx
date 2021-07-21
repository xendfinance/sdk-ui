import React from 'react';
import { useHistory } from 'react-router';
import { Button, Box, Tab, Tabs } from '@material-ui/core';
import styled from 'styled-components';

import { baseUrl } from '../../constants';
import EsusuEstimate from './EsusuEstimate';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    className?: any;
    value: any;
}

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, className, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            { value === index && 
                <Box className={className}>
                    {children}
                </Box>
            }
        </div>
    );
}
const a11yProps = (index: any) => {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}
const EsusuContributions = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    const history = useHistory();

    const handlePrevStep = () => {
        history.push('/esusu');
    }
    return (
        <EsusuContainer>
            <Box className='right-action'>
                <Button className='primary-outlined h11' variant='outlined' onClick={() => handlePrevStep()}>
                    <Box component='span'><img alt='' src={baseUrl + 'esusu/left-arrow.png'} /></Box>
                    <Box ml={4} component='span'>Back</Box>
                </Button>
            </Box>
            <EsusuEstimate />
            <Box mt={3} className='paper save-groups'>
                <Box className='title h8'>MY ESUSU</Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor='primary'
                    textColor='primary'
                    variant='scrollable'
                    scrollButtons='auto'
                    className='group-tab'
                    aria-label='scrollable auto tabs example'
                >
                    <Tab label='Created by me' {...a11yProps(0)} />
                    <Tab label='Pending' {...a11yProps(1)} />
                    <Tab label='In Progress' {...a11yProps(2)} />
                    <Tab label='Completed' {...a11yProps(3)} />
                </Tabs>
                <TabPanel index={0} value={value} className='esusu-panel h11'>
                    <table>
                        <thead>
                            <tr {...{ align: 'left' }} >
                                <th {...{ width: '25%' }} >Plan Name</th>
                                <th>Currency</th>
                                <th>Total Amount</th>
                                <th>Cumulative Interest</th>
                                <th>Est. APY</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Chuks Esusu</td>
                                <td>DAI</td>
                                <td>520.00983742</td>
                                <td>20.00983742</td>
                                <td>13%</td>
                                <td>Withdraw ROI</td>
                            </tr>
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </TabPanel>
                <TabPanel index={1} value={value}></TabPanel>
                <TabPanel index={2} value={value}></TabPanel>
                <TabPanel index={3} value={value}></TabPanel>
            </Box>
            <Box p={2}></Box>
        </EsusuContainer>
    );
}

export default EsusuContributions;

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
    padding-left  : 1% !important;
    padding-bottom: 100px;
    padding-right : 1% !important;

    .save-groups {
        padding: 20px 38px;

        .title {
            font-weight   : 500;
            color         : black;
            text-transform: uppercase;
        }

        .group-tab {
            .MuiButtonBase-root {
                min-width: 50px;
            }
            .MuiTabScrollButton-root {
                width:25px ;
                min-width: auto;
            }

            .MuiTabs-scrollButtonsDesktop {
                display: 'inline-flex' !important;
            }
            .MuiTab-root:nth-child(1) .MuiTab-wrapper {
                transform: translate(-10px, 0px);
            }

            * {
                font-weight   : 400;
            }

            .Mui-selected {
                .MuiTab-wrapper {
                    color      : #263238;
                    font-weight   : 500;
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
