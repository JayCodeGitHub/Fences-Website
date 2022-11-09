import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    ${({ theme }) => theme.mq.desktop} {
        flex-direction: row;
        height: 60vh;
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 0 12vw 2rem 12vw;
    }
`
export const ContactItemsWrapper = styled.div`
    width: 100%;
    padding: 0 5% 0 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    ${({ theme }) => theme.mq.desktop} {
        width: 50%;
    }
`

export const ContactItem = styled.span`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin: 3rem 0;
    padding-left: 1rem;
    position: relative;
    z-index: -10;
    p {
        margin: 0 0 0 5rem;
        width: 15rem;
        text-align: center;
        font-size: ${({ theme }) => theme.font.size.xs};
    }  
    svg {
        height: 40px;
        stroke: ${({ theme }) => theme.primary};
    }
    &::before {
        content: '';
        width: 100%;
        height: 4px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.grey};
        position: absolute;
        top: 125%;
        left: 0;
    }
    ${({ theme }) => theme.mq.desktop} {
        padding-left: 5rem;
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
            top: 125%;
            left: -10%;
        }
    }
`

export const CompanyData = styled.div`
    p {
        font-size: ${({ theme }) => theme.font.size.xs};
    }
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.s};
    }
`

export const MapWrapper = styled.div`
    padding: 2rem;
    width: 90%;
    height: 40vh;
    ${({ theme }) => theme.mq.desktop} {
        height: 100%;
        width: 40%;
    }
`

export const StyledMap = styled.iframe`
    width: 100%;
    height: 100%;
`;