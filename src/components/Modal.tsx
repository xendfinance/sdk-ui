import { ReactNode, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

interface Props {
    children: ReactNode
    visible: boolean
    close: Function
    title: string
}

const Modal = (props: Props) => {

    const [open, setopen] = useState(false)
    const [show, setshow] = useState(false);

    useEffect(() => {
        if (props.visible) {
            setopen(true)
            setTimeout(() => {
                setshow(true);
            }, 80);
        } else {
            setshow(false);
            setTimeout(() => {
                setopen(false);
            }, 100);
        }
        // eslint-disable-lint
    }, [props.visible]);


    return (
        <ModalStyle
            open={open}
            show={show}>
            <div>
                <ModalControl>
                    <p>{props.title}</p>
                    <button onClick={() => props.close()}>
                        &times;
                    </button>
                </ModalControl>
                {props.children}
            </div>
        </ModalStyle>
    )
}

export default Modal;

interface StyleProps {
    open: boolean
    show: boolean
}

const ModalStyle = styled.div<StyleProps>`
    display: none;
    position: fixed;
    z-index: -1;
    background-color: transparent;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    & > div {
        overflow-y: scroll;
        padding: 20px;
        padding-bottom: 100px;
        position: relative;
        height: 100%;
        width: 100%;
        opacity: 0;
        transform: scale(0.8) translateX(200px);
        transition: all 300ms ease;
    }

    ${({ open, show }) => open && css`
        display : block;
        background-color: white;
        z-index: 3;

        & > div {
            ${show && css`
                opacity: 1;
                background-color: white;
                transform: scale(1) translateX(0);
            `}
        }
    `}
`;

const ModalControl = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    & p {
        text-transform: uppercase;
        font-size: 0.8rem;
        opacity: 0.7;
        letter-spacing: 2px;
        font-weight: 600;
    }

    & button {
        border:none;
        background-color: transparent;
        padding: 10px 20px;
        font-size: 1.2rem;
        font-weight: 700;
        cursor: pointer;
    }
`;