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
        display: none;

`