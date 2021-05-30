import Cleave from 'cleave.js/react';
import { CleaveOptions } from 'cleave.js/options';
import styled from 'styled-components';

type Props = {
    placeholder?: string;
    onChange?: (e: string) => void;
    value?: any;
    readOnly?: boolean;
    required?: boolean;
    minLength?: number;
    min?: number;
    cleaveConfig?: CleaveOptions;
};

const InputNumber = (props: Props) => {
    const { minLength, min, placeholder, onChange, required } = props;
    return (
        <InputStyle>
            <div>
                <Cleave
                    options={{
                        numeral: true,
                        numeralThousandsGroupStyle: 'thousand',
                        numeralDecimalScale: 8,
                        ...props.cleaveConfig,
                    }}
                    value={props.value}
                    minLength={minLength ? minLength : 1}
                    min={min ? min : 1}
                    className="input"
                    type="text"
                    required={required}
                    onChange={(e) => onChange && onChange(e.target.rawValue)}
                    placeholder={placeholder}
                    readOnly={props.readOnly && props.readOnly}
                />
            </div>
        </InputStyle>
    );
}

export default InputNumber;

const InputStyle = styled.div`

    & input {
        border:none;
        display: block;
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        font-size: 1.2rem;
        border-radius: 38px;
        border: 2px solid #333;
        padding:10px 20px;
        background-color: transparent;
        color: #333;

        &:focus {
            outline: none;
            border:2px solid #2042B8;
        }
    }
`;