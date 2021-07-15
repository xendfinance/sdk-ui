import { InfoOutlined } from '@material-ui/icons';
import { Box } from '@material-ui/core';
import styled from 'styled-components';

export default function BetaRiskMsg({ }: any) {
    return (
        <AlertStyle>
            <Box className='beta-alert h16'>
                <InfoOutlined fontSize='small' />
                <Box ml={1} className='alert-content'>
                    This project is in beta. Use at your own risk
                </Box>
            </Box>
        </AlertStyle>
    );
}

const AlertStyle = styled.div`
    & .beta-alert {
        z-index: 2;
        position                 : absolute;
        top                      : 10px;
        right                    : 0px;
        padding                  : 10px;
        display                  : flex;
        background               : #f4f4f4;
        color                    : #5f5f5f;
        border                   : 1px solid #e5e5e5;
        border-top-left-radius   : 25px;
        border-bottom-left-radius: 25px;
        transition               : .5s;

        & .alert-content {
            width     : 250px;
            align-self: center;
        }

        @media screen and (max-width: 485px) {
            .alert-content {
                display: none;
            }
        }
    }
`;
