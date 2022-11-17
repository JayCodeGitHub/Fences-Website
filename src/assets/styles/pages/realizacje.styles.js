import styled, {keyframes} from "styled-components";

export const Wrapper = styled.div`
    padding: 2.5vw;
    width: 100%;
    ${({ theme }) => theme.mq.desktop} {
        display: flex;
        flex-wrap: wrap;
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 2.5vw 5vw 2.5vw 5vw;
    }
`

const intro = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    height: 70vw;
    opacity: 0;
    animation: ${intro} 0.5s 0.5s forwards;
    ${({ theme }) => theme.mq.desktop} {
        width: 33.33%;
        max-height: 23vw;
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        width: 33.33%;
        max-height: 22vw;
    } 
`

export const StyledImage = styled.img`
    width: 95%;
    height: 100%;
    border-radius: 1rem;
    object-fit: cover;
    cursor: pointer;
`