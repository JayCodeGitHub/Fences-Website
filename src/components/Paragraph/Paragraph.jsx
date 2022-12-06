import styled, { keyframes } from 'styled-components';

const intro = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Paragraph = styled.p`
  width: 100%;
  padding: 5vw;
  opacity: 0;
  animation: ${intro} 0.5s 0.5s forwards;
  font-size: ${({ theme }) => theme.font.size.xs};
  text-indent: 1.25rem;
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    justify-content: center;
  }
  ${({ theme }) => theme.mq.bigDesktop} {
    padding: 2vw 12vw 2vw 12vw;
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;

export default Paragraph;
