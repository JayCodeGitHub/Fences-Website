import styled from "styled-components";

const Button = styled.button`
    border: none;
    padding: 1rem;
    cursor: pointer;
    margin: 2rem 1rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ secondary, theme }) => (secondary ? theme.primary : theme.grey)};
    color: ${({ secondary, theme }) => (secondary ? theme.white : theme.black)};
    font-size: ${({ theme }) => theme.font.size.xs};
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.s};
        margin: 4rem 2rem;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    svg {
        height: 25px;
        stroke: ${({ theme }) => theme.white};
        &.fill {
            fill: ${({ theme }) => theme.white};
            stroke: ${({ theme }) => theme.black};
        }
    }
`

export default Button