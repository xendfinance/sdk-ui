import React from 'react';

type Props = {
    label?: string;
    placeholder?: string;
    value?: any;
    name?: any;
    id?: any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: any) => void;
    required?: boolean;
    maxLength?: number;
    minLength?: number;
    autoFocus?: boolean;
};

function Input(props: Props) {
    const {
        value,
        name,
        id,
        label,
        placeholder,
        onChange,
        onKeyDown,
        minLength,
        maxLength,
        required,
        autoFocus,
    } = props;
    return (
        <div className="input-style">
            <div className="label">{label}</div>
            <div>
                <input
                    className="input"
                    value={value}
                    name={name}
                    id={id}
                    autoFocus={autoFocus && autoFocus}
                    type="text"
                    onChange={(e) => onChange && onChange(e)}
                    onKeyDown={(e) => onKeyDown && onKeyDown(e)}
                    required={required}
                    maxLength={maxLength}
                    minLength={minLength}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}

export default Input;
