import React from 'react';
import { Modal, Box, Backdrop, Button, Fade, IconButton } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { HighlightOffOutlined } from '@material-ui/icons';

import ModalMintSuccess from '../ModalMintSuccess';
import { InputMinting } from '../../inputfields';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& .esusu-modal-container': {
                position: 'relative',
                background: 'white',
                borderRadius: 10,
                boxShadow: '1px 1px 1px 1px solid red',
                padding: '17px 17px 17px 24px',
                width: 500,
                '& * ': {
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
                '& .create-esusu': {
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
    }),
);

export default function ModalNewEsusu({ setOpen, open }: any) {
    const classes = useStyles();
    const [successOpen, setSuccessOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    function handleCreateEsusu() {
        setSuccessOpen(true);
        setOpen(false);
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
                    <Box className='esusu-modal-container'>
                        <Box className='dismiss'>
                            <IconButton size='medium' onClick={handleClose}>
                                <HighlightOffOutlined fontSize='medium' />
                            </IconButton>
                        </Box>
                        <Box className='header'>
                            <Box className='h13 title'>Create Esusu</Box>
                            <Box className='separator'></Box>
                        </Box>
                        <Box mt={1.5} className='data-form h15'>
                            <Box className='data-label' mb={0.5}>Group Name</Box>
                            <InputMinting placeholder='Eg. Real estate loan' />

                            <Box className='data-label' mb={0.5} mt={1.5}>Payment Interveral</Box>
                            <InputMinting placeholder='Select interval' isDropdown={true} />

                            <Box className='data-label' mb={0.5} mt={1.5}>Max No. of Slot</Box>
                            <InputMinting placeholder='Max No. of Slot' isDropdown={true} />

                            <Box className='data-label' mb={0.5} mt={1.5}>Contribution Amount</Box>
                            <InputMinting placeholder='Enter amount' isDropdown={true} />

                            <Box className='date-time' mb={0.5} mt={1.5}>
                                <Box className='start-date'>
                                    <Box className='data-label'>Start Date</Box>
                                    <Box mt={1}><InputMinting placeholder='00_00_0000' isDateInput={true} /></Box>
                                </Box>
                                <Box ml={3} className='start-time'>
                                    <Box className='data-label'>Start Time</Box>
                                    <Box mt={1}><InputMinting placeholder='00_00' isTimeInput={true} /></Box>
                                </Box>
                            </Box>

                            <Box className='data-label' mb={1} mt={2}>Estimated API</Box>
                            <InputMinting placeholder='Select APY' isDropdown={true} />
                        </Box>
                        <Box className='footer text-center' mt={1} mb={1}>
                            <Box mt={2.5} className='actions'></Box>
                            <Box className='sunset-contained create-esusu'>
                                <Button className='h14' onClick={() => handleCreateEsusu()}>Create Esusu</Button>
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
            <ModalMintSuccess type='esusu' open={successOpen} setSuccessOpen={setSuccessOpen} />
        </>
    );
}