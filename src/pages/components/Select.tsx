import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    label: string;
    onChange?: (e: string) => void;
    defaultValue?: any;
    labelInvisible?: boolean;
};

function Select(props: Props) {
    return (
        <div className="input-style">
            <div className={`label ${props.labelInvisible && 'invisible'}`}>{props.label}</div>
            <div>
                <select value={props.defaultValue} onChange={(e) => props.onChange && props.onChange(e.target.value)}>
                    {props.children}
                </select>
            </div>
        </div>
    );
}

export default Select;
