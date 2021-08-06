import React from 'react';
import { Modal, Box, Backdrop, Button, Fade, IconButton } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { HighlightOffOutlined } from '@material-ui/icons';

import { InputMinting } from '../../inputfields';
import { cooperative } from '../../../methods/sdk';
import { DEPOSIT_AMOUNT, MAX_MEMBERS, START_DATE, START_TIME, CYCLE_DURATION } from '../../inputfields/config';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& .cooperative-modal-container': {
                position: 'relative',
                background: 'white',
                borderRadius: 10,
                boxShadow: '1px 1px 1px 1px solid red',
                padding: '17px 17px 17px 24px',
                width: 500,
                '& * ': {
                    textTransform: 'none',
                    color: 'black'
                },
                '& .header': {
                    '& .title': {
                        lineHeight: '43.36px',
                        background: '-webkit-linear-gradient(0deg, #2042B8, #FF6600 70%, #FF6600 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 500,
                    },

                    '& .separator': {
                        height: 0.69,
                        width: '100%',
                        background: '#E2E2E2',
                    }
                },

                '& .data-form': {
                    '& .data-label': {
                        fontWeight: 500,
                    },

                    '& .date-time': {
                        display: 'flex',
                        justifyContent: 'center',

                        '& .start-date, .start-time': {
                            display: 'flex',
                            flexDirection: 'column',
                            flex: 1
                        }
                    }
                },
                '& .create-cooperative': {
                    padding: '0px 30px',

                    '& button': {
                        padding: '3px 10px !important',
                        borderRadius: '80px !important',

                        '& .MuiButton-label': {
                            color: 'white !important',
                            fontWeight: 500,
                        }
                    }
                },

                '& .dismiss': {
                    position: 'absolute',
                    top: 10,
                    right: 10,

                    '& .MuiSvgIcon-root': {
                        fill: '#5A5A5A'
                    }
                }
            }
        },
        cycleSelect: {
            border: '1px solid #B2B2B2',
            borderRadius: 25,
            padding: '10px 15px',
            outline: 'none',
            fontSize: 16,
            '&:hover': {
                borderColor: 'blue'
            }
        }
    }),
);

export default function ModalCooperativeNewCycle({ setOpen, open, curGroup, init }: any) {
    const [depo, setDepo] = React.useState(0);
    const [max, setMax] = React.useState(0);
    const [unit, setUnit] = React.useState(3600);
    const [cycleDuration, setCycleDuration] = React.useState(0.0);

    const classes = useStyles();
    const handleClose = () => {
        setOpen(false);
    };

    const handleCreateCycle = async () => {
        setOpen(false);
        await cooperative.create({
            groupId: curGroup[0],
            cycleStakeAmount: depo.toString() ,
            payoutIntervalInSeconds: cycleDuration * unit,
            startTimeInSeconds: (new Date().getTime()),
            maxMembers: max,
        });
        init(true);
    }

    const handleSelect = (e: any) => {
        setUnit(parseInt(e.target.value));
    }
    return (
        <>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box className='cooperative-modal-container'>
                        <Box className='dismiss'>
                            <IconButton size='medium' onClick={handleClose}>
                                <HighlightOffOutlined fontSize='medium' />
                            </IconButton>
                        </Box>
                        <Box className='header'>
                            <Box className='h13 title'>Create cycle</Box>
                            <Box className='separator'></Box>
                        </Box>
                        <Box mt={1.5} className='data-form h15'>
                            <Box className='data-label' mb={0.5}>Deposit Amount</Box>
                            <InputMinting inputType={DEPOSIT_AMOUNT} setDepo={setDepo} placeholder='10' />

                            <Box className='date-time' mb={0.5} mt={1.5}>
                                <Box className='start-date'>
                                    <Box className='data-label' mb={0.5}>Cycle duration</Box>
                                    <InputMinting inputType={CYCLE_DURATION} setCycleDuration={setCycleDuration} placeholder='10' />
                                </Box>
                                <Box ml={3}>
                                    <Box mt={1}>
                                        <Box component='select' className={classes.cycleSelect} onChange={handleSelect} defaultValue='3600'>
                                            <option value='60'>Minutes</option>
                                            <option value='3600'>Hours</option>
                                            <option value='86400'>Days</option>
                                            <option value='604800'>Weeks</option>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                            <Box className='date-time' mb={0.5} mt={1.5}>
                                <Box className='start-date'>
                                    <Box className='data-label'>Start Date</Box>
                                    <Box mt={1}><InputMinting inputType={START_DATE} placeholder='00_00_0000' isDateInput={true} /></Box>
                                </Box>
                                <Box ml={3} className='start-time'>
                                    <Box className='data-label'>Start Time</Box>
                                    <Box mt={1}><InputMinting inputType={START_TIME} placeholder='00_00' isTimeInput={true} /></Box>
                                </Box>
                            </Box>

                            <Box className='data-label' mb={0.5}>Max Members</Box>
                            <InputMinting inputType={MAX_MEMBERS} setMax={setMax} placeholder='2' />
                        </Box>
                        <Box className='footer text-center' mt={1} mb={1}>
                            <Box mt={2.5} className='actions'></Box>
                            <Box className='sunset-contained create-cooperative'>
                                <Button className='h14' onClick={() => handleCreateCycle()}>Create Cooperative</Button>
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}