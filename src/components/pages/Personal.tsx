import { personal } from '../../methods/sdk';
import styled from "styled-components";
import Info from "../Info";
import { BoldInfo, ButtonStyle, Labels } from '../Styles';
import { useEffect, useState } from 'react';
import { ReactComponent as BUSD } from '../../resx/busd.svg';
import { frmBigNum, handlePresi, randomId } from '../../methods/utils';
import Modal from '../Modal';
import FlexibleDeposit from '../personal/FlexibleDeposit';
import FlexibleWithdraw from '../personal/FlexibleWithdraw';
import FixedDepo from '../personal/FixedDepo';
import FixedList from '../personal/FixedList';
import { notification, regActivity } from '../../App';

function Personal() {

    const [wallet, setWallet] = useState("0");

    // fixed
    const [fixedData, setFixedData] = useState<Array<any>>([])
    const [fixedDepoModal, setFixedDepoModal] = useState(false);
    const [fixedList, setFixedList] = useState(false);

    // flexible
    const [flexibleInfo, setFlexibleInfo] = useState<any>({});
    const [saveModal, setSaveModal] = useState(false);
    const [withdrawModal, setWithdrawModal] = useState(false);


    const getWalletBalance = async () => {
        const amount = await personal.walletBalance();
        setWallet(handlePresi(amount));
    }

    const getFlexibleInfo = async () => {
        const activityId = randomId();
        regActivity(activityId)
        const info = await personal.flexibleInfo();
        setFlexibleInfo(info);
        regActivity(activityId)
    }

    const getFixedInfo = async () => {

        const data = await personal.fixedInfo();
        if (Array.isArray(data)) {
            setFixedData(data);
        }
    }


    useEffect(() => {
        getWalletBalance();
        getFlexibleInfo();
        getFixedInfo();
    }, [])



    const total = () => {
        let balance = 0;
        fixedData.forEach((list: any) => {
            if (!list.hasWithdrawn) {
                balance += Number(list.derivativeBalance);
            }
        });
        return frmBigNum(balance, 'venus');
    }

    return (
        <>
            <CardStyle>

                <SectionHeader>
                    <p>flexible savings</p>
                </SectionHeader>

                <section>
                    <div>
                        <Labels>
                            <p>Share Balance</p>
                            <Info />
                        </Labels>
                        <BoldInfo className="uppercase">{frmBigNum(flexibleInfo.shareBalance, 'venus')} {personal.shareCurrency}</BoldInfo>
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
                    <div>
                        <button onClick={() => notification('success', 'totally worth' + Date.now())}>notify</button>
                    </div>
                    <div>
                        <Labels>
                            <p>Wallet Balance</p>
                        </Labels>
                        <BoldInfo>{wallet} {personal.currency}</BoldInfo>
                    </div>
                    <div>
                        <Labels>
                            <p>Savings Balance</p>
                        </Labels>
                        <BoldInfo>{(handlePresi(Number(flexibleInfo.balance) * 10 ** 18))}</BoldInfo>
                    </div>
                    <section>
                        <ButtonStyle primary onClick={() => setSaveModal(true)}>
                            <div>
                                <p>save</p>
                            </div>
                        </ButtonStyle>
                    </section>
                    <section>
                        <ButtonStyle onClick={() => setWithdrawModal(true)}>
                            <div>
                                <p>withdraw</p>
                            </div>
                        </ButtonStyle>
                    </section>
                </FlexibleActions>
            </CardStyle>



            <CardStyle>

                <SectionHeader>
                    <p>fixed savings</p>
                </SectionHeader>

                <Labels>Savings Balance</Labels>
                <BoldInfo className="uppercase">{total()} {personal.shareCurrency}</BoldInfo>

                <FixedActions>
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
                    <ButtonStyle onClick={() => setFixedDepoModal(true)}>
                        <div>
                            <p>Deposit</p>
                        </div>
                    </ButtonStyle>
                </FixedActions>
                <div>
                    <button
                        className="view-deposit"
                        onClick={() => setFixedList(true)}>view fixed deposits</button>
                </div>
            </CardStyle>




            <Modal
                title="Deposit in Flexible Savings"
                close={() => setSaveModal(false)}
                visible={saveModal}>
                <FlexibleDeposit
                    walletBalance={wallet}
                    close={() => {
                        getWalletBalance();
                        setSaveModal(false);
                        getFlexibleInfo();
                    }} />
            </Modal>

            {/* Flexible Withdraw */}
            <Modal
                title="Withdraw From Flexible Savings"
                visible={withdrawModal}
                close={() => setWithdrawModal(false)}>
                <FlexibleWithdraw
                    shareBalance={flexibleInfo.shareBalance}
                    close={() => {
                        getWalletBalance();
                        setWithdrawModal(false);
                        getFlexibleInfo();
                    }} />
            </Modal>

            {/* Fixed Deposit */}
            <Modal
                title="Save on Fixed Savings"
                visible={fixedDepoModal}
                close={() => setFixedDepoModal(false)}>
                <FixedDepo
                    close={() => {
                        getFixedInfo();
                        getWalletBalance();
                        setFixedDepoModal(false);
                    }}
                    walletBalance={wallet} />
            </Modal>

            {/* Withdraw Fixed Deposit */}
            <Modal
                title="Withdraw From Fixed Savings"
                visible={fixedList}
                close={() => setFixedList(false)}>
                <div>
                    <FixedList
                        info={fixedData} />
                </div>
            </Modal>

        </>
    )
}

export default Personal;


const CardStyle = styled.section`
    background-color: ${p => p.theme.primary};
    color: ${p => p.theme.font};
    padding: 20px;
    margin-bottom: 15px;

    & .view-deposit {
        border:none;
        background-color: transparent;
        text-transform: capitalize;
        font-size: 1rem;
        text-decoration: dotted;
        color: ${p => p.theme.link};
        font-weight: 500;
    }
`;

const FlexibleActions = styled.section`
    margin-top: 30px;
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

const FixedActions = styled.section`
    margin-top: 30px;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: repeat(3, auto);
    column-gap: 10px;
    row-gap: 10px;

    & .coin {
        display: flex;
        align-items: center;

        & div {
            flex: 1;
            margin-left: 5px;
        }
    }
`;


const SectionHeader = styled.div`
    text-transform: uppercase;
    font-size: 0.8rem;
    opacity: 0.7;
    letter-spacing: 2px;
    font-weight: 600;
    margin-bottom: 10px;
    text-align: right;
`;