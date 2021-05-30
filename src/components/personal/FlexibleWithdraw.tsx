import { useState } from "react";
import styled from "styled-components";
import { personal } from "../../methods/sdk";
import { frmBigNum } from "../../methods/utils";
import InputNumber from "../InputNumber";
import { BoldInfo, ButtonStyle, Labels } from "../Styles"


interface Props {
    shareBalance: any
}

const FlexibleWithdraw = (props: Props) => {
    const shareBal = frmBigNum(props.shareBalance, 'venus');
    const [amount, setAmount] = useState('0');

    const handlePresi = (amount: any) => {
        return String(amount.toString().match(/^-?\d+(?:\.\d{0,4})?/)[0]);
    }

    const percentAmount = (num: string) => {
        const amt = handlePresi((Number(shareBal) * Number(num) / 100).toString())
        setAmount(amt)
    }

    const action = async () => {
        if (amount > shareBal) {
            console.log('insufficent balance')
        } else {
            let finalAmount = handlePresi(amount);
            const result = await personal.withdrawFlexible(finalAmount);
            console.log(result, ' withdraw')
        }

    }

    return (
        <FlexWithdraw>
            <section>
                <Labels>Share Balance</Labels>
                <BoldInfo>{shareBal}</BoldInfo>
            </section>

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
                    primary
                    onClick={() => action()}>
                    <div>
                        <p>withdraw</p>
                    </div>
                </ButtonStyle>
            </div>
        </FlexWithdraw>
    )
}


export default FlexibleWithdraw;


const FlexWithdraw = styled.div`
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