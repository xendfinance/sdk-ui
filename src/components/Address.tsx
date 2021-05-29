import styled from "styled-components";

const Address = () => {
    return (
        <AddressStyle>
            <div>
                <p>000...f291</p>
            </div>
        </AddressStyle>
    )
}


export default Address;


const AddressStyle = styled.div`
    display:flex;
    background: linear-gradient(95.81deg, #2042B8 -4.73%, #FF6600 157.32%);
    color: #080808;
    padding: 1px;
    font-size: 0.8rem;
    font-weight: 500;
    border-radius: 15px;

    & > div {
        background-color: #fff;
        padding: 5px 10px;
        border-radius: 15px;
    }
`;