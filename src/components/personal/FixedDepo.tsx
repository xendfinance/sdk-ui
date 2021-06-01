import { BoldInfo, ButtonStyle, Labels, Spacer } from "../Styles"
import PickDate from '../PickDate';
import InputNumber from "../InputNumber";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { randomId } from "../../methods/utils";
import { regActivity } from "../../App";
import { personal } from "../../methods/sdk";
import moment from "moment";

interface Props {
    walletBalance: string
    close: Function
}

const FixedDepo = (props: Props) => {

    const [amount, setAmount] = useState('0');
    const [date, setDate] = useState<Date>();

    const minDateToFix = moment().add(1, 'month');

    useEffect(() => {
        setDate(minDateToFix.toDate())
    }, [])


    const makeDeposit = async () => {
        if (Number(amount) <= Number(props.walletBalance) && Number(amount) > 0) {
            const activityId = randomId();
            regActivity(activityId);
            const lockPeriod = moment(date).unix();

            const result = await personal.fixedDeposit(amount, lockPeriod)

            console.log(result)
            if (result.status) {
                console.log('success');
                props.close();
            }
            regActivity(activityId);
        }
    }

    return (
        <FxDepoStyle>
            <div>
                <Labels>
                    <div>
                        <p>Wallet Balance</p>
                    </div>
                </Labels>
                <BoldInfo>{props.walletBalance}</BoldInfo>
            </div>
            <div>

                <section>
                    <Labels>Enter Amount</Labels>
                    <InputNumber
                        onChange={e => setAmount(e)}
                        value={amount} />
                </section>

                <Spacer space={30} />

                <section>
                    <Labels>Lock Period</Labels>
                    <PickDate
                        value={date}
                        minDate={minDateToFix.toDate()}
                        onChange={(dt) => {
                            setDate(moment(dt).toDate())
                        }} />
                </section>

            </div>

            <ButtonStyle
                disabled={Number(amount) > Number(props.walletBalance) || Number(amount) <= 0}
                primary={true}
                onClick={() => makeDeposit()}>
                <div>
                    <p>submit</p>
                </div>
            </ButtonStyle>
        </FxDepoStyle>
    )
}


export default FixedDepo;


const FxDepoStyle = styled.div`
    & > div {
        margin-bottom: 30px;
    }
`;