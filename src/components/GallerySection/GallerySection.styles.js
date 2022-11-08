import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    padding: 5vw;
    ${({ theme }) => theme.mq.desktop} {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 2.5vw 12vw 2.5vw 12vw;
    }
`

export const ImageWrapper = styled.div`
    width: 100%;
    margin: 1rem 0;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    ${({ theme }) => theme.mq.desktop} {
        height: 17vw;
        width: 30%;
    }
    span {
        z-index: 8;
        width: 70%;
        left: 5%;
        position: absolute;
        h2 {
            color: ${({ theme }) => theme.white};
            font-size: ${({ theme }) => theme.font.size.m};
            z-index: 8;
            width: 50%;
            left: 5%;
        }
        ul {
            color: ${({ theme }) => theme.white};
            font-size: ${({ theme }) => theme.font.size.xs};
        }
        ${({ theme }) => theme.mq.desktop} {
            h2 {
                font-size: ${({ theme }) => theme.font.size.s};
            }
            ul {
                font-size: ${({ theme }) => theme.font.size.xxs};
            }
        }
        ${({ theme }) => theme.mq.bigDesktop} {
            ul {
                font-size: ${({ theme }) => theme.font.size.xs};
            }
        }
}
`

export const ShadowBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.secondary};
    opacity: 60%;
    position: absolute;
    z-index: 5;
`



export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
`