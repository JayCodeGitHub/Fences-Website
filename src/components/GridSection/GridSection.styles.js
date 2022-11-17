import styled, {css, keyframes} from "styled-components";
import { Link } from 'gatsby';

const intro = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const OuterWrapper = styled.section`
    width: 100%;
    background-color: ${({ background }) => background};
    padding: 5vw;
    display: flex;
    flex-direction: column;
    opacity: 0;
  animation: ${intro} 0.5s 0.5s forwards;
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 4vw 12vw 4vw 12vw;
    }
`

export const StyledHeading = styled.h1`
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.m};
`

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    ${({ theme }) => theme.mq.desktop} {
        flex-direction: row;
        flex-wrap: wrap; 
    }
`

export const GridItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    ${({ theme }) => theme.mq.desktop} {
        width: 33.33%;
    }
`

export const ImageWrapper = styled.div`
    width: 100%;
    position: relative;
    height: 60vw;
    span {
        position: absolute;
        width: 100%;
        left: 5%;
    }
    h2 {
        color: ${({ theme }) => theme.white};
        font-size: ${({ theme }) => theme.font.size.m};
        width: 60%;
    }
    ul {
        color: ${({ theme }) => theme.white};
        font-size: ${({ theme }) => theme.font.size.xs};
    }
    ${({ theme }) => theme.mq.desktop} {
        height: 20.5vw;
        h2 {
            font-size: ${({ theme }) => theme.font.size.s};
        }
        ul {
            font-size: ${({ theme }) => theme.font.size.xxs};
        }
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        height: 17.5vw;
        ul {
            font-size: ${({ theme }) => theme.font.size.xs};
        }  
    }
    ${({secondary}) => (
        secondary && css`
            &:before {
                content: "";
                background-color: black;
                width: 100%;
                height: 100%;
                position: absolute;
                border-radius: 0.5rem;
                opacity: 60%;
            }
        `
    )}
`

export const StyledLink = styled(Link)`
    font-size: ${({ theme }) => theme.font.size.xs};
    color: ${({ theme }) => theme.black};
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.primary};
    } 
    svg {
            height: 30px;
            stroke: ${({ theme }) => theme.primary};  
    }
`

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
`