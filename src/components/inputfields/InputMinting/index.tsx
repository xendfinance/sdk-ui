import React from 'react';
import { Box, Popper, Grow, Paper, MenuItem, MenuList, ClickAwayListener } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import styled from 'styled-components';
import { baseUrl } from '../../../constants';

export default function InputMinting({ placeholder, isCurrency, isDateInput, isTimeInput, isDropdown }: any) {
    const [currency, setCurrency] = React.useState(1);
    const [open, setOpen] = React.useState(false);
    const anchorRef: any = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: any) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    function handleChooseCurrency(param: any) {
        setOpen(false);
        setCurrency(param);
    }
    function handleGetCurrencyInfo() {
        if (isCurrency && currency === 1) return 'DAI';
        if (isCurrency && currency === 2) return 'USDT';
        return '';
    }
    function renderDateOrTime() {
        if (isDateInput) return <input type='date' />;
        if (isTimeInput) return <input type='time' />;
        return <input className='h16' type='text' value={ isCurrency && handleGetCurrencyInfo()} placeholder={placeholder} />;
    }
    return (
        <Styles>
            <Box className='minting-input' {...{ ref: anchorRef }}>
                { isCurrency &&
                    <Box mr={1} component='img' {...{ alt: '' }} {...{ src: baseUrl + 'personal/coin' + currency + '.png' }} />
                }
                {renderDateOrTime()}
                { isDropdown &&
                    <ExpandMore
                        {...{ onclick: isCurrency ? (() => handleToggle()) : null }}
                        fontSize='small'
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup='true'
                    />
                }
            </Box>
            <Popper placement='bottom-end' open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id='currency-grow'>
                                    <MenuItem onClick={() => handleChooseCurrency(1)}>
                                        <Box mr={1} component='img' {...{ alt: '' }} {...{ src: baseUrl + 'personal/coin1.png' }} />
                                        <Box>DAI</Box>
                                    </MenuItem>
                                    <MenuItem onClick={() => handleChooseCurrency(2)}>
                                        <Box mr={1} component='img' {...{ alt: '' }} {...{ src: baseUrl + 'personal/coin2.png' }} />
                                        <Box>USDT</Box>
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Styles>
    );
}

const Styles = styled.div`
    .minting-input {
        flex         : 1;
        background   : #FBFBFB;
        border       : 1px solid #CDCDCD;
        border-radius: 25px;
        padding      : 10px 20px;
        display      : flex;
        font-size:12.4px !important;

        img {
            width     : 20px;
            height    : 20px;
            align-self: center;
        }

        span {
            align-self : center;
            font-family: Fira_Mono_Medium;
            color      : #747474;
        }

        input {
            border    : none;
            outline   : none;
            color     : black;
            width     : 100%;
            background: #FBFBFB;
        }

        input::placeholder {
            color: #767676 !important;
        }

        >svg:nth-child(1) {
            fill  : #727272;
            cursor: pointer;
        }

        >svg:nth-child(2),
        svg:nth-child(3) {
            fill  : #575757;
            cursor: pointer;
        }
    }

    #currency-grow {
        img {
            width : 20px;
            height: 20px;
        }
    }
`