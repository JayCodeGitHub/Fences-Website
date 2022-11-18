import styled, {css, keyframes} from "styled-components";

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.primary};
    width: 100%;
    margin: 8rem 0 15rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    height: 90vw;
    ${({ theme }) => theme.mq.tablet} {
    height: 70vw;
    }
    ${({ theme }) => theme.mq.desktop} {
        position: relative;
        margin: 11.5rem 0 15rem 0;
        height: 60rem;
    }
    ${({secondary}) => (
        secondary && css`
            background-image: url(${({ background }) => background});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            margin: 0 0 15rem 0;
            height: 110vw;
            ${({ theme }) => theme.mq.desktop} {
                margin: 0 0 15rem 0;
                height: 60rem;
            }
        `
    )}
`

const intro = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const StyledHeader = styled.header`
    width: 80%;
    padding: 3rem 0; 
    h1 {
        margin: 0;
        width: 100%;
        color: ${({ theme }) => theme.white};
        font-size: ${({ theme }) => theme.font.size.m};
        opacity: 0;
        animation: ${intro} 0.5s 0.5s forwards;
    }    
    ${({ theme }) => theme.mq.desktop} {
        position: absolute;
        width: 28%;
        top: 30%;
        left: 6%;
        h1 {
            font-size: ${({ theme }) => theme.font.size.l};
        }
    }
    ${({secondary}) => (
        secondary && css`
            width: 80%;
            padding: 2rem 2rem 5rem 2rem;
            position: absolute;
            top: 40%;
            background-color: ${({ theme }) => theme.primary};
            opacity: 0;
            animation: ${intro} 0.5s 0.5s forwards;
            
            h1 {
                font-size: ${({ theme }) => theme.font.size.s};
            }
            p {
                font-size: ${({ theme }) => theme.font.size.s};
                color: ${({ theme }) => theme.white};
            }
            ${({ theme }) => theme.mq.desktop} {
                position: relative;
                left: 20%;
                width: 65rem;
                padding: 4rem 4rem 10rem 4rem;
                h1 {
                    font-size: ${({ theme }) => theme.font.size.m};
                }
                p {
                    font-size: ${({ theme }) => theme.font.size.m};
                }
            }
        `
    )}
`

export const StyledImage = styled.img`
    width: 80%;
    position: relative;
    object-fit: cover;
    animation: ${intro} 0.5s 1.2s forwards;
    opacity: 0;
    ${({ theme }) => theme.mq.desktop} {
        width: 45%;
        height: auto;
        position: absolute;
        top: 20%;
        left: 40%;
    }
`