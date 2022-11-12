import styled from 'styled-components';

const Paragraph = styled.p`
  width: 100%;
  padding: 5vw;
  font-size: ${({ theme }) => theme.font.size.xs};
  text-indent: 1.25rem;
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    justify-content: center;
  }
  ${({ theme }) => theme.mq.bigDesktop} {
    padding: 2vw 12vw 2vw 12vw;
  }
`;

export default Paragraph;
