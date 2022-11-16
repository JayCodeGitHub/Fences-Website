import styled from "styled-components"

const Title = styled.h2`
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

export default Title