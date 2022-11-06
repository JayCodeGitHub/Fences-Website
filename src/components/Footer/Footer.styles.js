import styled from "styled-components";

export const OuterWrapper = styled.footer`
    width: 100%;
    height: 30rem;
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.white};
    display: flex;
    flex-direction: column;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 20rem;
    display: flex;
    ${({ theme }) => theme.mq.desktop} {
        padding: 0vw 10vw;
    }
`

export const HeadingWrapper = styled.span`
    font-size: ${({ theme }) => theme.font.size.s};
    width: 65%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 8rem;
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.white};      
    }
`

export const NavigationWrapper = styled.div`
    width: 50%;
    height: 100%;
`

export const StyledNavigation = styled.ul`
    list-style: none;
    width: 65%;
    height: 15rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 4rem;

`

export const NavigationItem = styled.li`
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.white};      
    }
    padding: 0 2rem;
    font-size: ${({ theme }) => theme.font.size.xs};
`

export const ContactItemsWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const ContactItem = styled.span`  
    display: flex;
    align-items: center;
    padding: 2rem 0rem 2rem 4rem;
    p {
        margin: 0;
        font-size: ${({ theme }) => theme.font.size.xs};
    }  
    svg {
        height: 25px;
        stroke: ${({ theme }) => theme.white};      
    }
`



export const AuthorWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10rem;
    font-size: ${({ theme }) => theme.font.size.xs};
    font-weight: bold;
    span {
        display: flex;
        align-items: center;
        svg {
            height: 30px;
            stroke: ${({ theme }) => theme.white};  
        }
    }
`