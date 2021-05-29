import styled from 'styled-components';
import sdk from '../methods/sdk';
import Info from './Info';

const SwitchProtocols = () => {
    return (
        <SwitchProtocolStyle>
            <div>
                <Info />
            </div>
            <p className="protocol">{sdk.protocol}</p>
            <div>
                <i className="fas fa-angle-down"></i>
            </div>
        </SwitchProtocolStyle>
    )
}

export default SwitchProtocols;

const SwitchProtocolStyle = styled.button`
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    min-width: 150px;
    border-radius: 15px;
    background-color: #f6f6f6;
    color: #676767;
    padding: 8px 16px;

    & .protocol {
        flex: 1;
        margin: 0 10px;
        font-weight: 600;
    }

    & > div {
        width: 20px;
    }
`;