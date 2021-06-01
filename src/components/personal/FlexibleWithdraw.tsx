import { useState } from "react";
import styled from "styled-components";
import { regActivity } from "../../App";
import { personal } from "../../methods/sdk";
import { frmBigNum, handlePresi, randomId } from "../../methods/utils";
import InputNumber from "../InputNumber";
import { BoldInfo, ButtonStyle, Labels } from "../Styles"



interface Props {
    shareBalance: any
    close: Function
}

const FlexibleWithdraw = (props: Props) => {
    const shareBal = frmBigNum(props.shareBalance, 'venus');
    const [amount, setAmount] = useState('0');


    const percentAmount = (num: string) => {
        const amt = handlePresi((Number(shareBal) * Number(num) / 100).toString())
        setAmount(amt)
    }

    const action = async () => {
        if (Number(amount) > Number(shareBal)) {
            console.log('insufficent balance')
        } else {
            const activityId = randomId();
            regActivity(activityId);
            let finalAmount = handlePresi(amount);
            const result = await personal.withdrawFlexible(finalAmount);
            console.log(result, ' withdraw')
            if (result.status) {
                setAmount('0');
                props.close();
            }
            regActivity(activityId);
        }

    }

    return (
        <FlexWithdraw>
            <div>
                <Labels>Share Balance</Labels>
                <BoldInfo className="uppercase">{shareBal} {personal.shareCurrency}</BoldInfo>
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
                    disabled={Number(amount) > Number(shareBal)}
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