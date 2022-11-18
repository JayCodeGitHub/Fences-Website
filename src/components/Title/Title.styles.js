import styled, {keyframes} from "styled-components";

const intro = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Title = styled.h2`
    width: 100%;
    padding: 8vw 5vw;
    opacity: 0;
    animation: ${intro} 0.5s 0.5s forwards;
    font-size: ${({ theme }) => theme.font.size.s};
    ${({ theme }) => theme.mq.desktop} {
        display: flex;
        justify-content: center;
    font-size: ${({ theme }) => theme.font.size.m};
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 4vw 12vw 4vw 12vw;
    }
`

export default Title