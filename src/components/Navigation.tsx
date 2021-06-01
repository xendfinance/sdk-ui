import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as PersonalIcon } from '../resx/personal.svg';

const Navigation = () => {
    return (
        <NavStyle>
            <div className="items">
                <Link to="/personal" className="link-item">
                    <PersonalIcon />
                    <p>Personal</p>
                </Link>
            </div>
            <button className="more">
                <i className="fas fa-ellipsis-h"></i>
                <p>More</p>
            </button>
        </NavStyle>
    )
}

export default Navigation;


const NavStyle = styled.section`
    position: relative;
    z-index: 2;
    background-color: ${p => p.theme.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    border-top: 1px solid ${p => p.theme.border};
    box-shadow: 0 -1px 10px rgba(0,0,0,0.05);

    & .link-item {
        display: inline-block;
        font-size: 0.8rem;
        text-align: center;
        text-decoration: none;
    }

    & .more {
        border:none;
        background-color: transparent;
        display: inline-block;
        font-size: 0.8rem;
        text-align: center;
        color: #a2a2a2;

        & .fas {
            font-size: 1.3rem;
        }
    }
`;