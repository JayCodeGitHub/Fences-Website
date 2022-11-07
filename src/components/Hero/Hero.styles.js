import styled, {css} from "styled-components";

export const Wrapper = styled.div`
    background-color: red;
    width: 100%;
    height: 50rem;
    margin-top: 8rem;
    img {
        width: 20rem;
    }
    h1 {
        margin: 0;
    }
    ${({ theme }) => theme.mq.desktop} {
        margin-top: 11.5rem;
    }
    ${({secondary}) => (
        secondary && css`
            margin: 0 0 15rem 0;
            background-image: url(${({ background }) => background});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            position: relative;
            div {
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

