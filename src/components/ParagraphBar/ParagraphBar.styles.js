import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 14rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${({ secondary, theme}) => (secondary ? theme.grey : theme.primary)};
    font-size: ${({ secondary, theme}) => (secondary ? theme.font.size.xs : theme.font.size.s)};
    font-weight: ${({ secondary}) => (secondary ? 'normal' : 'bold')};
    color: ${({ secondary, theme}) => (secondary ? theme.black : theme.white)};
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.s};
        height: ${({ secondary}) => (secondary ? '15rem' : '12rem')};
    }
    span {
        width: 80%;
    }
`