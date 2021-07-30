import React from 'react';
import { Box, Popper, Grow, Paper, MenuItem, MenuList, ClickAwayListener } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import styled from 'styled-components';

import { GROUP_NAME, SYMBOL_NAME, DEPOSIT_AMOUNT, MAX_MEMBERS, CYCLE_DURATION } from '../config';
import Coin1 from '../../../assets/images/personal/coin1.png';
import Coin2 from '../../../assets/images/personal/coin2.png';

export default function InputMinting({ inputType, placeholder, setDepo, setMax ,isCurrency, isDateInput, isTimeInput, isDropdown, setName, setSymbol, setCycleDuration }: any) {
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
    const handleChooseCurrency = (param: any) => {
        setOpen(false);
        setCurrency(param);
    }
    const handleGetCurrencyInfo = () => {
        if (isCurrency && currency === 1) return 'DAI';
        if (isCurrency && currency === 2) return 'USDT';
        return '';
    }
    const handleChangePeriod = (e:any) => {
        if(inputType === GROUP_NAME ) setName(e.target.value);
        if(inputType === SYMBOL_NAME ) setSymbol(e.target.value);
        if(inputType === DEPOSIT_AMOUNT ) setDepo(parseFloat(e.target.value));
        if(inputType === MAX_MEMBERS ) setMax(parseInt(e.target.value));
        if(inputType === CYCLE_DURATION) setCycleDuration(parseFloat(e.target.value));
    }
    const handleChangeDateTime = (e:any) => {
        // if(inputType === START_DATE ) setStartDate(e.target.value);
        // if(inputType === START_TIME ) setStartTime(e.target.value);
    }
    const renderDateTime = () => {
        if (isDateInput) return <input type='date' onChange={handleChangeDateTime}/>;
        if (isTimeInput) return <input type='time' onChange={handleChangeDateTime}/>;
        return <input className='h16' type='text' onChange={handleChangePeriod} value={ isCurrency && handleGetCurrencyInfo()} placeholder={placeholder} />;
    }
    return (
        <Styles>
            <Box className='minting-input' {...{ ref: anchorRef }}>
                { isCurrency &&
                    <Box mr={1} component='img' {...{ alt: '' }} {...{ src:
                        (currency === 1 ? Coin1 : Coin2)
                    }} />
                }
                { renderDateTime() }
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
                                        <Box mr={1} component='img' {...{ alt: '' }} {...{ src: Coin1}} />
                                        <Box>DAI</Box>
                                    </MenuItem>
                                    <MenuItem onClick={() => handleChooseCurrency(2)}>
                                        <Box mr={1} component='img' {...{ alt: '' }} {...{ src: Coin2}} />
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
        border       : 1px solid #B2B2B2;
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