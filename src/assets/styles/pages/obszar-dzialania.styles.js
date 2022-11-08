import styled from 'styled-components'

export const Paragraph = styled.p`
    width: 100%;
    padding: 5vw;
    font-size: ${({ theme }) => theme.font.size.xs};
    ${({ theme }) => theme.mq.desktop} {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 2vw 12vw 2vw 12vw;
    }
`
