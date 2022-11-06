import styled from "styled-components";

export const Wrapper = styled.header`
    width: 100%;
    margin-top: 11rem;
    height: 20rem;
    background-color: ${({ theme }) => theme.lightGrey};
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        margin: 0;
        padding: 0;
        font-size: ${({ theme }) => theme.font.size.l};
        color: ${({ theme }) => theme.black};
    }
`