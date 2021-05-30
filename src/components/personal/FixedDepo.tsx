import { BoldInfo, ButtonStyle, Labels } from "../Styles"
import PickDate from '../PickDate';
import InputNumber from "../InputNumber";
import { useState } from "react";

interface Props {
    walletBalance: string
}

const FixedDepo = (props: Props) => {

    const [amount, setAmount] = useState('0');

    return (
        <div>
            <div>
                <Labels>
                    <div>
                        <p>Wallet Balance</p>
                    </div>
                </Labels>
                <BoldInfo>{props.walletBalance}</BoldInfo>
            </div>
            <div>
                <InputNumber
                    onChange={e => setAmount(e)}
                    value={amount} />

                <PickDate onChange={() => { }} />
            </div>

            <ButtonStyle primary={true}>
                <div>
                    <p>submit</p>
                </div>
            </ButtonStyle>
        </div>
    )
}


export default FixedDepo;