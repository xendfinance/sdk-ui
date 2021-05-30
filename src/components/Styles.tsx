import styled from "styled-components";

export const Labels = styled.div`
    color: #9e9e9e;
    margin:3px 0;
    font-size: 0.8rem;
    display: flex;
`;

export const BoldInfo = styled.p`
    font-weight: 600;
`;


type ButtonProps = {
    primary?: boolean | false
}
export const ButtonStyle = styled.button<ButtonProps>`
    display: block;
    border: none;
    border-radius: 40px;
    width: 100%;
    background: linear-gradient(95.81deg, #2042B8 -4.73%, #FF6600 157.32%);
    font-size: 1rem;
    text-transform: capitalize;
    padding: 2px;
    font-weight: 500;
    height: 40px;
    margin: 10px 0;

    & > div {
        background-color: ${(p => p.primary ? "transparent" : "white")};
        border-radius: 40px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${(p => p.primary ? "white" : "#333")};
    }

`;
