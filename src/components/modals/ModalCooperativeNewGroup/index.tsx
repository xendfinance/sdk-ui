import React from 'react';
import { Modal, Box, Backdrop, Button, Fade, IconButton } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { HighlightOffOutlined } from '@material-ui/icons';

import { cooperative } from '../../../methods/sdk';
import { InputMinting } from '../../inputfields';
import { GROUP_NAME, SYMBOL_NAME } from '../../inputfields/config';

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

export default function ModalCooperativeNewGroup({ setOpen, open, init }: any) {

    const [name, setName] = React.useState('');
    const [symbol, setSymbol] = React.useState('');
    const classes = useStyles();
    const handleClose = () => {
        setOpen(false);
    };

    const handleCreateGroup = async () => {
        setOpen(false);
        await cooperative.createGroup(name, symbol);
        init(true);
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
                            <Box className='h21 title'>Create Cooperative Group</Box>
                            <Box className='separator'></Box>
                        </Box>
                        <Box mt={3} className='data-form h23'>
                            <Box className='data-label' mb={1}>Group Name</Box>
                            <InputMinting inputType={GROUP_NAME} setName={setName} placeholder='' />
                        </Box>
                        <Box mt={2} className='data-form h23'>
                            <Box className='data-label' mb={1}>Group Symbol</Box>
                            <InputMinting inputType={SYMBOL_NAME} setSymbol={setSymbol} placeholder='' />
                        </Box>
                        <Box mt={1.5} ml={2} className='data-form h4'>
                            A three letter unique indentifier for the Group
                        </Box>
                        <Box className='footer text-center' mt={5} mb={1}>
                            <Box mt={2.5} className='actions'></Box>
                            <Box className='sunset-contained create-cooperative'>
                                <Button className='h22' onClick={() => handleCreateGroup()}>Create Cooperative Group</Button>
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}
