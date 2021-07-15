import { Button, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import styled from 'styled-components';

export default function InputSearch({ placeholder, type }: any) {
    return (
        <Styles>
            { type === 1 &&
                <>
                    <input className='h8' type='text' placeholder={placeholder} />
                    <Button className='h11' size='small'>Search</Button>
                </>
            }
            { type === 2 &&
                <>
                    <IconButton className='h11' size='small'>
                        <SearchOutlined />
                    </IconButton>
                    <input className='h9' type='text' placeholder={placeholder} />
                </>
            }
        </Styles>
    );
}

const Styles = styled.div`
    flex         : 1;
    background   : #E6E6E6;
    border       : 1px solid #CDCDCD;
    border-radius: 25px;
    padding      : 0px 5px;
    display      : flex;
    overflow:hidden;

    & .MuiSvgIcon-root {
        width:10.14px;
        height:10.14px;
    }

    & span {
        align-self : center;
        font-weight: 500;
        color      : #5D5D5D;
    }

    & input {
        border    : none;
        outline   : none;
        color     : black;
        width     : 100%;
        background: #E6E6E6;
        line-height: 259.7%;
    }

    & input::placeholder {
        color: #C4C4C4 !important;
    }
`;