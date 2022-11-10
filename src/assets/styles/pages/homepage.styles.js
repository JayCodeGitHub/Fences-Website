import styled from "styled-components";

export const Title = styled.h2`
    width: 100%;
    padding: 8vw 5vw;
    font-size: ${({ theme }) => theme.font.size.m};
    ${({ theme }) => theme.mq.desktop} {
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
        display: flex;
        justify-content: center;
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 2vw 12vw 2vw 12vw;
    }
`

export const OffersSection = styled.section`
    width: 100%;
    background-color: ${({ theme }) => theme.lightGrey};
    padding: 5vw;
    display: flex;
    flex-direction: column;
    h1 {
        width: 100%;
        text-align: center;
    }
    div {
        display: flex;
        flex-direction: column;
        width: 100%;
        div { 
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        img {
            width: 95%;
        }
    }
    }
    ${({ theme }) => theme.mq.desktop} {
        div {
            flex-direction: row;
            flex-wrap: wrap; 
            div {
                width: 33.33%;
            }
        }
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 4vw 12vw 4vw 12vw;
    }
`

export const StepsSection = styled.section`
    width: 100%;
    padding: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin: 2vw 0;
    }
    h3 {
        color: ${({ theme }) => theme.primary};
        font-size: ${({ theme }) => theme.font.size.m};
    }
    h4 {
        font-size: ${({ theme }) => theme.font.size.s};
        text-align: center;
    }
    p {
        font-size: ${({ theme }) => theme.font.size.xs};
        width: 100%;
        text-align: center;
    }
    ${({ theme }) => theme.mq.desktop} {
        div {
            width: 70%;
        }
        padding: 2vw 12vw 2vw 12vw;
    }
`

export const GallerySection = styled.section`
   width: 100%;
    background-color: ${({ theme }) => theme.lightGrey};
    padding: 5vw;
    display: flex;
    flex-direction: column;
    h1 {
        width: 100%;
        text-align: center;
    }
    div {
        display: flex;
        flex-direction: column;
        width: 100%;
        div { 
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        img {
            width: 95%;
        }
    }
    }
    ${({ theme }) => theme.mq.desktop} {
        div {
            flex-direction: row;
            flex-wrap: wrap; 
            div {
                width: 33.33%;
            }
        }
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 4vw 12vw 4vw 12vw;
    }
`