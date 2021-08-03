import { Box } from '@material-ui/core';
import styled from 'styled-components';

export default function GroupIcon({ gName, fullName, bgColor, fontColor }: any) {
    return (
        <Container>
            <Box bgcolor={bgColor} color={fontColor}>
                {gName}
            </Box>
            <Box ml={2}>{fullName}</Box>
        </Container>
    );
}

const Container = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    &>div:first-of-type {
        font-size: 15px;
        font-weight: 400 !important;
        border-radius: 100%;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center !important;
        align-items: center;
        text-transform: uppercase;
    }
    &>div:last-of-type {
        color: rgb(54,54,54) !important;
    }
`;
