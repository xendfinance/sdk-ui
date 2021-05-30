import moment from "moment";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { personal } from '../../methods/sdk';
import { frmBigNum } from "../../methods/utils";
import { BoldInfo, ButtonStyle, Labels } from "../Styles";

const FixedList = () => {

    const [info, setInfo] = useState<Array<any>>([])

    useEffect(() => {
        (async () => {
            const data = await personal.fixedInfo();
            if (Array.isArray(data)) {
                setInfo(data);
            }
        })();
        //
    }, [])


    return (
        <>
            <p>All Fixed Savings Deposits</p>

            <ListItem>
                {
                    info.map((record, i) => (
                        <section className="item" key={i}>
                            <div>
                                <div>
                                    <Labels>Amount Deposited</Labels>
                                    <BoldInfo>{frmBigNum(record.amount)} {personal.currency}</BoldInfo>
                                </div>
                                <div>
                                    <Labels>Maturity Date</Labels>
                                    <BoldInfo>{moment.unix(record.lockPeriodInSeconds).format('lll')}</BoldInfo>
                                </div>
                            </div>
                            <ButtonStyle>
                                <div>
                                    <p>withdraw</p>
                                </div>
                            </ButtonStyle>
                        </section>
                    ))
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