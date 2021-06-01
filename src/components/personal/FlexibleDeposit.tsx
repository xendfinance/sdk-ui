import { useState } from "react";
import styled from "styled-components";
import { regActivity } from "../../App";
import { personal } from "../../methods/sdk";
import { randomId } from "../../methods/utils";
import InputNumber from "../InputNumber";
import { BoldInfo, ButtonStyle, Labels } from "../Styles";

interface Props {
    walletBalance: string
    close: Function
}

const FlexibleDeposit = (props: Props) => {

    const [amount, setAmount] = useState('0');

    const percentAmount = (percent: string) => {
        let percentage = Number(percent) / 100;
        setAmount((Number(props.walletBalance) * percentage).toString())
    }

    const submit = async () => {
        if (Number(amount) <= Number(props.walletBalance)) {
            const id = randomId();
            regActivity(id)
            const response = await personal.flexibleDeposit(amount);
            if (response.status) {
                console.log('success')
                setAmount('0');
                props.close()
            }
            console.log(response)
            regActivity(id)
        }
    }

    return (
        <FlexDeposit>
            <div>
                <Labels>Wallet Balance</Labels>
                <BoldInfo>{props.walletBalance} {personal.currency}</BoldInfo>
            </div>

            <InputNumber
                placeholder="Enter Amount"
                value={amount}
                onChange={e => setAmount(e)} />

            <ul>
                {
                    ["25", "50", "75", "100"].map(percent => (
                        <li key={percent}>
                            <button onClick={() => percentAmount(percent)}>{percent}%</button>
                        </li>
                    ))
                }
            </ul>

            <div>
                <ButtonStyle
                    primary={true}
                    disabled={Number(amount) > Number(props.walletBalance)}
                    onClick={() => submit()}>
                    <div>
                        <p>deposit</p>
                    </div>
                </ButtonStyle>
            </div>
        </FlexDeposit>
    )
}


export default FlexibleDeposit;

const FlexDeposit = styled.div`
    display: block;

    & > div {
        margin-bottom: 30px;
    }

    & ul {
        display: flex;
        width: 100%;
        margin: 15px 0;

        & li {
            flex: 1;
            display: flex;
            justify-content: center;

            & button {
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 15px;
                font-size: 1rem;
                font-weight: 600;
                color: ${p => p.theme.link};
                background-color: transparent;
            }
        }
    }

`;