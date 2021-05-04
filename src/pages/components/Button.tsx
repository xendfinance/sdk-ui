import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    onClick?: Function;
    block?: boolean;
    type?: 'primary' | 'secondary' | 'default';
    htmlType?: 'submit' | 'button';
    disabled?: boolean;
    id?: string;
};

function Button(props: Props) {
    return (
        <button
            type={props.htmlType}
            disabled={props.disabled}
            id={props.id}
            onClick={() => props.onClick && props.onClick()}
            className={`${buttonType(props.type)} ${props.block && 'block'}`}
        >
            <div>{props.children}</div>
        </button>
    );
}

export default Button;

function buttonType(type?: string) {
    switch (type) {
        case 'secondary':
            return 'button secondary';
        case 'primary':
            return 'button default';
        default:
            return 'button default';
    }
}
