import styled from 'styled-components'

export const GalleryWrapper = styled.div`
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
    ${({ theme }) => theme.mq.desktop} {
        height: 17vw;
        width: 30%;
    } 
`

export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
`
