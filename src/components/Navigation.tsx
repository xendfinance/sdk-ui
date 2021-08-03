import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as PersonalActiveIcon } from '../resx/personal-active.svg';
import { ReactComponent as EsusuActiveIcon } from '../resx/esusu-active.svg';
import { ReactComponent as CooperativeActiveIcon } from '../resx/cooperative-active.svg';
import { ReactComponent as PersonalIcon } from '../resx/personal.svg';
import { ReactComponent as EsusuIcon } from '../resx/esusu.svg';
import { ReactComponent as CooperativeIcon } from '../resx/cooperative.svg';

const Navigation = ({ heading, setHeading }: any) => {
    const handleHeadings = ( param : string ) => {
        setHeading(param);
    }
    return (
        <NavStyle>
            <div className='items'>
                <Link onClick={() => handleHeadings('Personal Savings')} to='/personal' className='link-item'>
                    { heading !== 'Personal Savings' ? <PersonalIcon /> : <PersonalActiveIcon />}
                    <p className={ heading !== 'Personal Savings' ? 'inactive' : 'active' }>Personal</p>
                </Link>
                <Link onClick={() => handleHeadings('Esusu')} to='/esusu' className='link-item'>
                    { heading !== 'Esusu' ? <EsusuIcon /> : <EsusuActiveIcon />}
                    <p className={ heading !== 'Esusu' ? 'inactive' : 'active' }>ESUSU</p>
                </Link>
                <Link onClick={() => handleHeadings('Cooperative')} to='/cooperative' className='link-item'>
                    { heading !== 'Cooperative' ? <CooperativeIcon /> : <CooperativeActiveIcon />}
                    <p className={ heading !== 'Cooperative' ? 'inactive' : 'active' }>Cooperative</p>
                </Link>
                <button className='more'>
                    <i className='fas fa-ellipsis-h'></i>
                    <p>More</p>
                </button>
            </div>
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
    
    & .items {
        display:flex;
        flex:1;
        justify-content:space-between;
        & .link-item {
            align-self:center;
            display: inline-block;
            font-size: 0.8rem;
            text-align: center;
            text-decoration: none;
            & .active {
                font-weight:500 !important;
                background: linear-gradient(95.81deg, #2042B8 -4.73%, #FF6600 100%);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            & .inactive {
                color:#9E9E9E;
                font-weight:500 !important;
            }
        }
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