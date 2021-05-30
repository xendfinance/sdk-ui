import { useEffect, useState } from "react";
import styled from "styled-components";
import { personal } from "../methods/sdk";


const Address = () => {

    const [address, setAddress] = useState('');

    const trunc = (address: string) => {
        if (address.length > 15) {
            address = address.slice(0, 6) + '...' + address.slice(-4);
        }
        return address;
    }

    useEffect(() => {
        (async () => {
            const v = await personal.retrieveWallet();
            setAddress(v.address);
        })();
    }, [])

    return (
        <AddressStyle>
            <div>
                <p>{trunc(address)}</p>
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