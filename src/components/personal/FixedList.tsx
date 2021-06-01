import moment from "moment";
import styled from "styled-components";
import { personal } from '../../methods/sdk';
import { frmBigNum } from "../../methods/utils";
import { BoldInfo, ButtonStyle, Labels, Spacer } from "../Styles";


interface Props {
    info: Array<any>
}

const FixedList = (props: Props) => {


    const { info } = props;


    return (
        <>
            {/* <p>All Fixed Savings Deposits</p> */}

            <ListItem>
                {
                    info.map((record, i) => {

                        const hasWidthrawn = record.hasWithdrawn;
                        const maturityDate = record.lockPeriodInSeconds;
                        const maturityDateHasReached = moment().isAfter(moment.unix(maturityDate));

                        const canWithdrawDeposit = !hasWidthrawn && maturityDateHasReached ? true : false;

                        return (
                            <section className="item" key={i}>
                                <div>
                                    <div>
                                        <Labels>Amount Deposited</Labels>
                                        <BoldInfo>{frmBigNum(record.amount)} {personal.currency}</BoldInfo>
                                    </div>
                                    <Spacer space={15} />
                                    <div>
                                        <Labels>Maturity Date</Labels>
                                        <p>{moment.unix(record.lockPeriodInSeconds).format('ll')}</p>
                                    </div>
                                </div>
                                <ButtonStyle disabled={!canWithdrawDeposit}>
                                    <div>
                                        <p>withdraw</p>
                                    </div>
                                </ButtonStyle>
                            </section>
                        )
                    })
                }
            </ListItem>
        </>
    )
}


export default FixedList;



const ListItem = styled.section`

    & .item {
        margin-top: 20px;
        display: grid;
        grid-template-columns: 65% 35%;
        padding: 15px 5px;
    }

    & .item:not(:first-child) {
        border-top: 1px solid #ddd;
    }

`;