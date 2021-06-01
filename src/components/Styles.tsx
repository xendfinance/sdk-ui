import styled from "styled-components";

export const Labels = styled.div`
    color: #9e9e9e;
    margin:3px 0;
    font-size: 0.8rem;
    display: flex;
`;

export const BoldInfo = styled.p`
    font-weight: 600;
    font-size: 1.2rem;
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

    &:disabled {
        cursor: not-allowed;
        background: ${p => p.theme.disabledBtnBg};
    }

    &:disabled > div {
        background-color: ${p => p.theme.disabledBtnBg};
        color: ${p => p.theme.disableBtn}
    }

`;

export const InputStyle = styled.div`

    & input {
        border:none;
        display: block;
        box-sizing: border-box;
        width: 100% !important;
        height: 40px;
        font-size: 1.2rem;
        border-radius: 38px;
        border: 2px solid ${p => p.theme.border};
        padding:10px 20px;
        background-color: transparent;
        color: #333;

        &:focus {
            outline: none;
            border:2px solid ${p => p.theme.borderActive};
        }
    }
`;

type Space = { space: number }
export const Spacer = styled.div<Space>`
    height: ${p => p.space}px;
`;
