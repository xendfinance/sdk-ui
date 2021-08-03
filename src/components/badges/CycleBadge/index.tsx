import styled from 'styled-components';

export default function CycleBadge({ pos, status, isSkew }: any) {
    return (
        <Container className='h7' pos={pos} status={status} isSkew={isSkew}>
            {status==='pending' && 'Pending'}
            {status==='active' && 'Active'}
        </Container>
    );
}

const Container = styled.div<{ pos:any; status:string; isSkew:boolean; }>`
    width:fit-content;
    display:flex;
    align-items:center;
    height:15px;
    ${({isSkew}) => isSkew ? 'border-top-left-radius:7px;border-bottom-right-radius:7px;' : 'border-radius:7px'};
    padding:1px 7px;
    color :${({status}) => status === 'pending' ? '#FF6600' : 'rgb(96,195,60)'} !important;
    line-height: 150%;
    ${({pos}) => pos !== 'free' ? 'position:absolute;top:0px;left:0px;' : ''} !important;
    font-weight: 500;
    background-color :${({status}) => status === 'pending' ? 'rgba(255,102,0,.06)' : 'rgba(236,248,231)'} !important;
`;