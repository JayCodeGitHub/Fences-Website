import styled from "styled-components";

export const Wrapper = styled.div`
    display: ${({ isPopup }) => (isPopup ? 'flex' : 'none')};
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    justify-content: center;
    align-items: center;
`

export const CloseButton = styled.button`
    width: 5rem;
    height: 5rem;
    cursor: pointer;
    position: fixed;
    right: 5rem;
    top: 5rem;
    background: transparent;
    border: none;
    &:before {
        content: '';
        width: 5rem;
        height: 0.5rem;
        background-color: ${({theme }) => theme.white};
        display: block;
        transform: translateY(0.25rem) rotate(45deg);
        border-radius: 5px;
    }
    &:after {
        content: '';
        width: 5rem;
        height: 0.5rem;
        background-color: ${({theme }) => theme.white};
        display: block;
        transform: translateY(-0.25rem) rotate(-45deg);
        border-radius: 5px;
    }
`

export const StyledImage = styled.img`
    max-height: 80%;
    max-width: 80%;
    border-radius: 1rem;
`