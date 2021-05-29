import { personal } from '../../methods/sdk';
import styled from "styled-components";
import Info from "../Info";
import { BoldInfo, Labels } from '../Styles';
import { useEffect, useState } from 'react';
import { ReactComponent as BUSD } from '../../resx/busd.svg';
import { frmBigNum } from '../../methods/utils';
import Modal from '../Modal';
import FlexibleDeposit from '../FlexibleDeposit';

function Personal() {

    const [wallet, setWallet] = useState("0");
    const [flexibleInfo, setFlexibleInfo] = useState<any>({});
    const [saveModal, setSaveModal] = useState(false);


    useEffect(() => {

        (async () => {
            const amount = await personal.walletBalance();
            setWallet(amount);
            const info = await personal.flexibleInfo();
            setFlexibleInfo(info);
        })()

    }, [])

    return (
        <>
            <CardStyle>
                {/* <p>flexible savings</p> */}
                <section>
                    <div>
                        <Labels>
                            <p>Share Balance</p>
                            <Info />
                        </Labels>
                        <BoldInfo>{frmBigNum(flexibleInfo.shareBalance, 'venus')} {personal.shareCurrency}</BoldInfo>
                    </div>
                </section>
                <FlexibleActions>
                    <div className="coin">
                        <figure>
                            <BUSD
                                height={25}
                                width={25} />
                        </figure>
                        <div>
                            <p>{personal.currency}</p>
                            <Labels>
                                <p>Stablecoin</p>
                            </Labels>
                        </div>
                    </div>
                    <div></div>
                    <div>
                        <Labels>
                            <p>Wallet Balance</p>
                        </Labels>
                        <BoldInfo>{Number(wallet).toFixed(2)} {personal.currency}</BoldInfo>
                    </div>
                    <div>
                        <Labels>
                            <p>Savings Balance</p>
                        </Labels>
                        <BoldInfo>{(Number(flexibleInfo.balance) * 10 ** 18).toFixed(4)}</BoldInfo>
                    </div>
                    <button onClick={() => setSaveModal(true)}>save</button>
                    <button>withdraw</button>
                </FlexibleActions>
            </CardStyle>

            {/* <CardStyle>
                <p>fixed savings</p>
            </CardStyle> */}



            <Modal
                title="Deposit"
                close={() => setSaveModal(false)}
                visible={saveModal}>
                <FlexibleDeposit walletBalance={wallet} />
            </Modal>
        </>
    )
}

export default Personal;


const CardStyle = styled.section`
    background-color: #fff;
    padding: 20px;
    margin-bottom: 15px;
`;

const FlexibleActions = styled.section`
    margin-top: 25px;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: repeat(3, auto);
    column-gap: 10px;
    row-gap: 10px;

    & > * {
        width: 100%;
        overflow: hidden;
        padding: 15px 5px;
    }

    & .coin {
        display: flex;
        align-items: center;

        & div {
            flex: 1;
            margin-left: 5px;
        }
    }
`;