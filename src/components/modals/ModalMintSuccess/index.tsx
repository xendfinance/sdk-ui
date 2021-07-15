import { useHistory } from 'react-router';
import { Modal, Box, Backdrop, Button, Fade, IconButton } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { HighlightOffOutlined } from '@material-ui/icons';
import { baseUrl } from '../../../constants';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& .add-success-container': {
                '& *': {
                    color: 'black',
                },

                position: 'relative',
                background: 'white',
                borderRadius: 10,
                boxShadow: '1px 1px 1px 1px solid red',
                padding: 30,
                width: 397,

                '& .msg-type': {
                    color: '#105530',
                },

                '& .msg-content': {
                    '& span': {
                        fontWeight: 600,
                    }
                },

                '& .actions': {
                    display: 'flex',
                    justifyContent: 'center',

                    '& .MuiBox-root': {
                        width: '75% !important',
                    },

                    '& .MuiBox-root+.MuiBox-root': {
                        marginLeft: 30,
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

export default function ModalMintSuccess({ setSuccessOpen, open, type }: any) {
    const history = useHistory();
    const handleClose = () => {
        setSuccessOpen(false);
    };
    const handleCreatePlan = () => {
        setSuccessOpen(false);
        history.push('/savingplan');
    }
    function handleViewContributions() {
        setSuccessOpen(false);
        history.push('/esusu-contributions');
    }
    const classes = useStyles();
    return (
        <>
            { type === 'esusu' &&
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
                        <Box className='add-success-container h10 text-center'>
                            <Box>
                                <img width={100} alt='' src={baseUrl + 'esusu/confetti.png'} />
                            </Box>
                            <Box className='msg-type h1' mt={5}>Success!!!</Box>
                            <Box className='msg-content h10' mt={3}>
                                Your new Esusu group
                                <Box component='span'>{'\u00a0'}New_Group{'\u00a0'}</Box>
                                has been created successfully. Join group and share the link with  your friens so they can join also.
                            </Box>
                            <Box mt={8} className='actions'>
                                <Box className='sunset-contained'>
                                    <Button className='h8' variant='contained' onClick={() => handleViewContributions()}>
                                        View
                                    </Button>
                                </Box>
                                <Box className='sunset-outlined'>
                                    <Button className='h8' variant='contained'>
                                        Share
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Fade>
                </Modal>
            }
            { type === 'cooperative' &&
                <Modal
                    aria-labelledby='transition-modal-title'
                    aria-describedby='transition-modal-description'
                    className='modal'
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box className='add-success-container h10 text-center'>
                            <Box className='dismiss'>
                                <IconButton size='medium' onClick={handleClose}>
                                    <HighlightOffOutlined fontSize='medium' />
                                </IconButton>
                            </Box>
                            <Box>
                                <img width={100} alt='' src={baseUrl + 'esusu/confetti.png'} />
                            </Box>
                            <Box className='msg-type h1' mt={5}>Success!!!</Box>
                            <Box className='msg-content h10' mt={3}>
                                Your new Cooperative group
                                <Box component='span'>{'\u00a0'}New_Group{'\u00a0'}</Box>
                                has been created successfully. You can create savings plans under this group and share with friends and members to start saving.
                            </Box>
                            <Box mt={2} mb={2} className='actions'>
                                <Box className='sunset-contained'>
                                    <Button className='h8' variant='contained' onClick={() => handleCreatePlan()}>
                                        Create Savings Plan
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Fade>
                </Modal>
            }
        </>
    );
}
