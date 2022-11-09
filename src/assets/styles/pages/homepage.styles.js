import styled from "styled-components";

export const Title = styled.h2`
    width: 100%;
    padding: 8vw 5vw;
    font-size: ${({ theme }) => theme.font.size.m};
    ${({ theme }) => theme.mq.desktop} {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 4vw 12vw 4vw 12vw;
    }
`

export const Paragraph = styled.p`
    width: 100%;
    padding: 5vw;
    font-size: ${({ theme }) => theme.font.size.xs};
    ${({ theme }) => theme.mq.desktop} {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 2vw 12vw 2vw 12vw;
    }
`

export const OffersSection = styled.section`
    height: 50vw;
    width: 100%;
    background-color: ${({ theme }) => theme.lightGrey};
`

export const StepsSection = styled.section`
    height: 50vw;
    width: 100%;
`

export const GallerySection = styled.section`
    height: 50vw;
    width: 100%;
    background-color: ${({ theme }) => theme.lightGrey};
`