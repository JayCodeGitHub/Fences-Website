import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    color: black;
    padding: 5vw;
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 0 12vw;
    }
`

export const Title = styled.h1`
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.xs};
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.m};
    }
`

export const ImagesWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 5rem 0;
`

export const StyledImage = styled.img`
    width: 15rem;
    aspect-ratio: 2/1;
    object-fit: contain;
    ${({ theme }) => theme.mq.desktop} {
        width: 30rem;
    
  }
  ${({ theme }) => theme.mq.bigDesktop} {
    width: 40rem;

  }
`