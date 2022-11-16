import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 14rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${({ secondary, theme}) => (secondary ? theme.primary: theme.grey)};
    font-size: ${({ secondary, theme}) => (secondary ? theme.font.size.s: theme.font.size.xs)};
    font-weight: ${({ secondary}) => (secondary ? 'bold' : 'normal')};
    color: ${({ secondary, theme}) => (secondary ? theme.white: theme.black)};
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.s};
        height: ${({ secondary}) => (secondary ? '12rem' : '15rem')};
    }
    span {
        width: 80%;
    }
`
