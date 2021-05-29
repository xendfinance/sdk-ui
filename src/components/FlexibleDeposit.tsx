import { useState } from "react";
import styled from "styled-components";
import { personal } from "../methods/sdk";
import { BoldInfo, Labels } from "./Styles";

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

            <input
                type="text"
                value={amount}
                onChange={e => setAmount(e.target.value)} />

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
                <button onClick={() => submit()}>deposit</button>
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
        }
    }

`;