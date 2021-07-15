import { Box } from '@material-ui/core';
import styled from 'styled-components';

export default function InputFigure({ unit, placeholder }: any) {
    return (
        <Styles>
            <Box className='figure-input'>
                <input className='h8' type='text' placeholder={placeholder} />
                { unit &&
                    <Box className='h11' component='span'>{unit}</Box>
                }
            </Box>
        </Styles>
    );
}

const Styles = styled.div`
    .figure-input {
        flex         : 1;
        background   : #FBFBFB;
        border       : 1px solid #CDCDCD;
        border-radius: 25px;
        padding      : 10px 20px;
        display      : flex;

        span {
            align-self : center;
            font-family: Fira_Mono_Medium;
            color      : #747474;
        }

        input {
            border     : none;
            outline    : none;
            color      : black;
            width      : 100%;
            background : #FBFBFB;
            font-weight: 500;
        }

        input::placeholder {
            color: #CACACA !important;
        }
    }
`