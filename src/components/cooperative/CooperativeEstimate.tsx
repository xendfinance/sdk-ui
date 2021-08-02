import { Box } from '@material-ui/core';
import styled from 'styled-components';

const CooperativeEstimate = () => {
    return (
        <EstimateContainer className='paper'>
            <Box className='est-root'>
                <Box>
                    <Box component='span' className='h1' mr={1}>Estimated Portfolio Balance</Box>
                    <i className='far fa-question-circle' aria-hidden='true'></i>
                </Box>
                <Box mt={0.5}>0.0000 BUSD</Box>
            </Box>
        </EstimateContainer>
    )
}

export default CooperativeEstimate;

const EstimateContainer = styled.div`
    & * {
        font-weight   : 400 !important;
    }
    display       : flex;
    flex-direction: column;
    margin-top:24px;
    padding: 20px 40px;

    & .est-root {
        display:flex;
        flex-direction: column;
        & >div:first-of-type {
            color: rgb(121,121,121);
            & >i {
                font-size: 15px;
                color: rgb(255,102,0);
            }
        }
        & >div:last-of-type {
            color: rgb(54,54,54);
            font-weight: 700 !important;
        }
    }
`;