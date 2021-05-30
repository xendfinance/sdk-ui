import { useState } from "react";
import styled from "styled-components";
import { personal } from "../../methods/sdk";
import InputNumber from "../InputNumber";
import { BoldInfo, ButtonStyle, Labels } from "../Styles";

interface Props {
    walletBalance: string
}

const FlexibleDeposit = (props: Props) => {

    const [amount, setAmount] = useState("0");

    const percentAmount = (percent: string) => {
        let percentage = Number(percent) / 100;
        setAmount((Number(props.walletBalance) * percentage).toFixed(2).toString())
    }

    const submit = async () => {

        const response = await personal.flexibleDeposit(amount);
        console.log(response)
    }

    return (
        <FlexDeposit>
            <div>
                <BoldInfo>{Number(props.walletBalance).toFixed(2)}</BoldInfo>
                <Labels>Wallet Balance</Labels>
            </div>

            <InputNumber
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

    & ul {
        display: flex;
        width: 100%;
        margin: 15px 0;

        & li {
            flex: 1;
            display: flex;
            justify-content: center;

            & button {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
            }
        }
    }

`;