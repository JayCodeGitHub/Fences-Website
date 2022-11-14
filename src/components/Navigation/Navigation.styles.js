import styled from "styled-components";

export const OuterWrapper = styled.nav`
    width: 100%;
    padding: 0 5vw;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 20;
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
        color: ${({ theme }) => theme.black};
        }  
        span {
            display: flex;
            align-items: center;
            justify-content: center;
        svg {
            height: 25px;
            stroke: ${({ theme }) => theme.primary};  
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
    z-index: 20;
    a {
        color: ${({ theme }) => theme.primary};
        text-decoration: none;
    }
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.s};
    }
`

export const StyledNavigation = styled.ul`
    display: none;
    ${({ theme }) => theme.mq.desktop} {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
    }
`

export const NavigationItem = styled.li`
    padding: 1rem;
    font-size: ${({ theme }) => theme.font.size.s};
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
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.xs};
    }
`

export const HamburgerWrapper = styled.button`
    display: flex;
    width: 3rem;
    height: 3rem;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
    z-index: 10;
    ${({ theme }) => theme.mq.desktop} {
        display: none;
    }
`

export const Hamburger = styled.div`
    transition: background-color .15s .05s ease-in-out;
    background-color: ${({ isOpen, theme }) => (isOpen ? 'transparent' : theme.black)};
    width: 3rem;
    height: 0.3rem;
    border: none;
    padding: 0;
    &:before {
        content: '';
        width: 3rem;
        height: 0.3rem;
        background-color: ${({theme }) => theme.black};
        display: block;
        transition: transform .15s .05s ease-in-out;
        transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-1rem')}) rotate(${({ isOpen }) => (isOpen ? '45deg' : '0deg')});
    }
    &:after {
        content: '';
        width: 3rem;
        height: 0.3rem;
        background-color: ${({theme }) => theme.black};
        display: block;
        transition: transform .15s .05s ease-in-out;
        transform: translateY(${({ isOpen }) => (isOpen ? '-0.2rem' : '0.8rem')}) rotate(${({ isOpen }) => (isOpen ? '-45deg' : '0deg')});
    }
`
export const StyledMobileNavigation = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 0;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.lightGrey};
    padding: 15vh 0 0 0;
    transition: transform 0.1s ease-in-out;
    transform: translateY(${({ isOpen }) => (isOpen ? '0' : '+100%')});
    ul {
        padding: 0;
        width: 100%;
        height: 70%;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }
`

export const MobileContactItemsWrapper = styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 4vh 0 4vh 0;
    p {
        margin: 0;
            color: black;
        font-size: ${({ theme }) => theme.font.size.xs};
    }  
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            height: 25px;
        }
    }
`