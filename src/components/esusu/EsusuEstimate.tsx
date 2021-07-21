import { Box } from '@material-ui/core';
import styled from 'styled-components';

const EsusuEstimate = () => {
    return (
        <EstimateContainer className='paper'>
            <Box className='results' mb={2}>
                <Box className='result'>
                    <Box className='h3' component='article'>Share Balance</Box>
                    <Box mt={2} className='h1' component='article'>0.00230000 DAI</Box>
                </Box>
                <Box className='result'>
                    <Box className='h3' component='article'>Accumulated Interest</Box>
                    <Box mt={2} className='h1' component='article'>0.00230000 XEND</Box>
                </Box>
            </Box>
        </EstimateContainer>
    )
}

export default EsusuEstimate;

const EstimateContainer = styled.div`
    & * {
        font-weight   : 500 !important;
    }
    display       : flex;
    flex-direction: column;
    margin-top:24px;
    padding: 20px 10px;

    & .results {
        padding-left   : 6%;
        padding-right  : 6%;
        display        : flex;
        flex-wrap:wrap;
        justify-content: space-between;

        & div {
            article:nth-child(1) {
                color: #9E9E9E;
            }

            article:nth-child(2) {
                color      : black;
            }

            article:nth-child(3) {
                color: #A2A2A2;
            }
        }
    }
`;