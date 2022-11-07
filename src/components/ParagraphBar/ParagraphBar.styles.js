import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 14rem;
    background-color: ${({ theme }) => theme.grey};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.xs};
    color: ${({ theme }) => theme.black};
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.s};
        height: 12rem;
    }
    span {
        width: 80%;
    }
`