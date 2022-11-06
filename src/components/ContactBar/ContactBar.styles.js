import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 12rem;
    background-color: ${({ theme }) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    span {
        font-size: ${({ theme }) => theme.font.size.s};
        color: ${({ theme }) => theme.white};
    }
`