import styled from "styled-components";
import { Link } from 'gatsby';

export const OuterWrapper = styled.section`
    width: 100%;
    background-color: ${({ background }) => background};
    padding: 5vw;
    display: flex;
    flex-direction: column;
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

export const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    ${({ theme }) => theme.mq.desktop} {
        width: 33.33%;
    }
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
  width: 95%;
`