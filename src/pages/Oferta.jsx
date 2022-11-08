import * as React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import Header from '../components/Header/Header';
import {
  GalleryWrapper,
  ImageWrapper,
  StyledImage,
} from '../assets/styles/pages/oferta.styles';
import Three from '../assets/images/3.jpeg';
import Four from '../assets/images/4.jpeg';
import Five from '../assets/images/5.jpeg';
import Six from '../assets/images/6.jpeg';
import Seven from '../assets/images/7.jpeg';
import Eight from '../assets/images/8.jpeg';

function OfertaPage() {
  return (
    <MainTemplate>
      <Header title="Oferta" />
      <GalleryWrapper>
        <ImageWrapper>
          <StyledImage src={Three} />
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src={Four} />
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src={Five} />
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src={Six} />
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src={Seven} />
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src={Eight} />
        </ImageWrapper>
      </GalleryWrapper>
    </MainTemplate>
  );
}

export default OfertaPage;

export function Head() {
  return <title>Oferta</title>;
}
