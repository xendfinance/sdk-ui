import styled from 'styled-components';
import Address from './Address';
import SwitchProtocols from './SwitchProtocols';

const Header = ({heading}:any) => {

    return (
        <HeaderStyle>
            <section className="topmost">
                <p className="title">{heading}</p>
                <Address />
            </section>
            <section className="switch-protocols">
                <SwitchProtocols />
            </section>
        </HeaderStyle>
    )
}

export default Header;



const HeaderStyle = styled.section`
    position: relative;
    background-color: ${p => p.theme.primary};
    padding: 15px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 40px;
    border-bottom: 1px solid ${p => p.theme.border};

    & .topmost {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & .switch-protocols {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .title {
        font-weight: 700;
        background: -webkit-linear-gradient(95.81deg, #2042B8 -4.73%, #FF6600 157.32%);
        background: linear-gradient(95.81deg, #2042B8 -4.73%, #FF6600 157.32%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;