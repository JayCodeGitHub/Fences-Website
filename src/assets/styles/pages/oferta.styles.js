import styled from "styled-components"

export const Section = styled.section`
    width: 100%;
    padding: 5vw;
    margin: 10vw 0;
    ${({ theme }) => theme.mq.desktop} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(5, 1fr);
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        margin: 50px 0;
        padding: 1vw 12vw 1vw 12vw;
    }
`

export const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.balck};
    ${({ theme }) => theme.mq.desktop} {
        grid-column-start: ${({ order }) => (order % 2 === 0 ? '1' : '2')};
        grid-row: 1 / span 2;
        margin: 0;
        font-size: ${({ theme }) => theme.font.size.m};
    }
`

export const Paragraph = styled.p`
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.black};
    font-size: ${({ theme }) => theme.font.size.xs};
    margin: 25px 0;
    text-indent: 1.25rem;
    ${({ theme }) => theme.mq.desktop} {
        grid-column-start: ${({ order }) => (order % 2 === 0 ? '1' : '2')};
        grid-row: 3 / span 3;
        padding: 0 50px;
        margin: 0;
        text-indent: 2.5rem;
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        font-size: ${({ theme }) => theme.font.size.s};
    }
`

export const Image = styled.img`
    width: 100%;
    border-radius: 15px;
    ${({ theme }) => theme.mq.desktop} {
        margin: auto;
        grid-column-start: ${({ order }) => (order % 2 === 0 ? '2' : '1')};
        grid-row: 1 / span 5;
        width: 38vw;
        height: 24vw;
        max-height: 100%;
        object-fit: cover;
    }
`