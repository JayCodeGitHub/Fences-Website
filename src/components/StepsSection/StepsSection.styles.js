import styled from "styled-components"

export const Wrapper = styled.section`
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