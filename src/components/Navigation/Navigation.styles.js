import styled from "styled-components";

export const OuterWrapper = styled.nav`
    width: 100%;
    background-color: blue;
    padding: 0 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.lightGrey};
    ${({ theme }) => theme.mq.desktop} {
        padding: 0;
    }
`

export const ContactItemsWrapper = styled.div`
    display: none;
    ${({ theme }) => theme.mq.desktop} {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: white;
        padding: 0.5rem 0;
        font-size: ${({ theme }) => theme.font.size.xs};
        p {
            margin: 0;
            color: black;
        }  
        span {
            display: flex;
            align-items: center;
            justify-content: center;
        svg {
            height: 25px;
        }
    }
    }    
`

export const Wrapper = styled.div`
    width: 100%;
    height: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${({ theme }) => theme.mq.desktop} {
        padding: 0vw 10vw;
    }
`
export const LogoWrapper = styled.span`
    font-size: ${({ theme }) => theme.font.size.s};
    a {
        color: ${({ theme }) => theme.primary};
        text-decoration: none;
    }
`

export const StyledNavigation = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
`

export const NavigationItem = styled.li`
    padding: 1rem;
    font-size: ${({ theme }) => theme.font.size.xs};
    a {
        transition: color 0.2s ease-in-out;
        color: black;
        text-decoration: none;
        &.active {
            color: ${({ theme }) => theme.primary};
        }  
        &:hover {
            color: ${({ theme }) => theme.primary};
    }
    }
`