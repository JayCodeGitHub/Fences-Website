import styled, {css} from "styled-components";

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.primary};
    width: 100%;
    margin-top: 8rem;
    z-index: -10;
    h1 {
        margin: 0;
        width: 100%;
        color: ${({ theme }) => theme.white};
        font-size: ${({ theme }) => theme.font.size.l};
    }
    header {
        width: 28%;
        position: absolute;
        top: 30%;
        left: 6%;

    }
    img {
        width: 50%;
        position: absolute;
        top: 20%;
        left: 40%;
        z-index: 0;
    }
    button {
        border: none;
        background-color: ${({ theme }) => theme.grey};
        padding: 1rem;
        font-size: ${({ theme }) => theme.font.size.s};
        margin: 4rem 2rem;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    ${({ theme }) => theme.mq.desktop} {
        margin: 11.5rem 0 15rem 0;
        height: 60rem;
    }
    ${({secondary}) => (
        secondary && css`
            margin: 0 0 15rem 0;
            background-image: url(${({ background }) => background});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            position: relative;
            header {
                background-color: ${({ theme }) => theme.primary};
                width: 65rem;
                padding: 4rem 4rem 10rem 4rem;
                position: absolute;
                top: 30%;
                left: 55%;
            }
            h1 {
                font-size: ${({ theme }) => theme.font.size.m};
                color: ${({ theme }) => theme.white};
            }
            p {
                font-size: ${({ theme }) => theme.font.size.m};
                color: ${({ theme }) => theme.white};
            }
            ${({ theme }) => theme.mq.desktop} {
                margin-top: 0;
                height: 60rem;
            }
        `
    )}
`

