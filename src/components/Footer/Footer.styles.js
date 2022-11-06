import styled from "styled-components";

export const OuterWrapper = styled.footer`
    width: 100%;
    height: 60rem;        
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.white};
    display: flex;
    flex-direction: column;
    ${({ theme }) => theme.mq.desktop} {
        height: 30rem;        
    }
`

export const Wrapper = styled.div`
    width: 100%;
    height: 50rem;
    display: flex;
    flex-direction: column;
    padding: 0;
    ${({ theme }) => theme.mq.desktop} {
        padding: 0vw 10vw;
        flex-direction: row;
        height: 20rem;
    }
`

export const HeadingWrapper = styled.span`
    font-size: ${({ theme }) => theme.font.size.s};
    width: 85%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 8rem;
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.white};      
    }
    ${({ theme }) => theme.mq.desktop} {
        width: 70%;
    }
`

export const NavigationWrapper = styled.div`
    width: 100%;
    height: 55%;
    ${({ theme }) => theme.mq.desktop} {
        width: 50%;
        height: 100%;
    }
`

export const StyledNavigation = styled.ul`
    list-style: none;
    width: 85%;
    height: 15rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 4rem;
    ${({ theme }) => theme.mq.desktop} {
        width: 65%;
    }

`

export const NavigationItem = styled.li`
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.white}; 
        transition: color 0.2s ease-in-out;
        &:hover {
            color: ${({ theme }) => theme.grey};
        }     
    }
    padding: 0 2rem;
    font-size: ${({ theme }) => theme.font.size.xs};
`

export const ContactItemsWrapper = styled.div`
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: column;
    ${({ theme }) => theme.mq.desktop} {
        width: 50%;
        height: 100%;
    }
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
    font-weight: bold;
    span {
        display: flex;
        align-items: center;
        font-size: ${({ theme }) => theme.font.size.xs};
        color: ${({ theme }) => theme.white}; 
        svg {
            height: 30px;
            stroke: ${({ theme }) => theme.white};  
        }
    }
    a {
        text-decoration: none;
    }
`