import React from 'react';
import { Modal, Box, Backdrop, Button, Fade, IconButton } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { HighlightOffOutlined } from '@material-ui/icons';

import { ModalMintSuccess } from '../../modals';
import { InputMinting } from '../../inputfields';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& .cooperative-modal-container': {
                '& *': {
                    textTransform:'none',
                    color: 'black'
                },

                position: 'relative',
                background: 'white',
                borderRadius: 10,
                boxShadow: '1px 1px 1px 1px solid red',
                padding: '17px 17px 17px 24px',
                width: 397,

                '& .header': {
                    '& .title': {
                        lineHeight: '305.7%',
                        background: '-webkit-linear-gradient(0deg, #2042B8, #FF6600 70%, #FF6600 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 500
                    },

                    '& .separator': {
                        height: 0.69,
                        width: '100%',
                        background: '#E2E2E2',
                    }
                },

                '& .data-form': {
                    '& .data-label': {
                        fontWeight: 500
                    },

                    '& .h7': {
                        color: '#808080'
                    }
                },

                '& .create-cooperative': {
                    padding: '0px 30px',

                    '& button': {
                        padding: '5px 10px',
                        borderRadius: 80,

                        '& .MuiButton-label': {
                            color: 'white',
                            fontWeight: 500
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
        }
    }),
);

export default function ModalCooperativeNewGroup({ setOpen, open }: any) {

    const classes = useStyles();
    const [successOpen, setSuccessOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const handleCreateGroup = () => {
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
                    <Box className='cooperative-modal-container'>
                        <Box className='dismiss'>
                            <IconButton size='medium' onClick={handleClose}>
                                <HighlightOffOutlined fontSize='medium' />
                            </IconButton>
                        </Box>
                        <Box className='header'>
                            <Box className='h21 title'>Create Cooperative</Box>
                            <Box className='separator'></Box>
                        </Box>
                        <Box mt={3} className='data-form h23'>
                            <Box className='data-label' mb={1}>Group Name</Box>
                            <InputMinting placeholder='Eg. Real estate loan' />
                        </Box>
                        <Box mt={2} className='data-form h23'>
                            <Box className='data-label' mb={1}>Create Symbol</Box>
                            <InputMinting placeholder='Eg. SDz' />
                        </Box>
                        <Box mt={1.5} ml={2} className='data-form h7'>
                            A three letter unique indentifier for the Group
                        </Box>
                        <Box className='footer text-center' mt={5} mb={1}>
                            <Box mt={2.5} className='actions'></Box>
                            <Box className='sunset-contained create-cooperative'>
                                <Button className='h22' onClick={() => handleCreateGroup()}>Create Cooperative group</Button>
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
            <ModalMintSuccess type='cooperative' successOpen={successOpen} setSuccessOpen={setSuccessOpen} />
        </>
    );
}
