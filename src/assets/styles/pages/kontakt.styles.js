import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 12rem;
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 0 12vw 2rem 12vw;
        min-height: 60vh;
    }
`
export const ContactItemsWrapper = styled.div`
    width: 50%;
    padding: 0 5% 0 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const ContactItem = styled.span`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin: 3rem 0;
    padding-left: 5rem;
    position: relative;
    z-index: -10;
    p {
        margin: 0 0 0 15rem;
        width: 20rem;
        text-align: center;
        font-size: ${({ theme }) => theme.font.size.s};
    }  
    svg {
        height: 50px;
        stroke: ${({ theme }) => theme.primary};   
    }
    &::before {
        content: '';
        width: 120%;
        height: 4px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.grey};
        position: absolute;
        top: 125%;
        left: -10%;
    }
`

export const CompanyData = styled.div`
    p {
        font-size: ${({ theme }) => theme.font.size.s};
    }
`

export const MapWrapper = styled.div`
    width: 40%;
    padding: 2rem;
`

export const StyledMap = styled.iframe`
    width: 100%;
    height: 100%;
`;