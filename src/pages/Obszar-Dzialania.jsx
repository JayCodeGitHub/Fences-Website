import * as React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import Header from '../components/Header/Header';
import {
  Paragraph,
  GalleryWrapper,
  ImageWrapper,
  StyledImage,
} from '../assets/styles/pages/obszar-dzialania.styles';
import Three from '../assets/images/3.jpeg';
import Four from '../assets/images/4.jpeg';
import Five from '../assets/images/5.jpeg';
import Six from '../assets/images/6.jpeg';
import Seven from '../assets/images/7.jpeg';
import Eight from '../assets/images/8.jpeg';

function ObszarDzialaniaPage() {
  return (
    <MainTemplate>
      <Header title="Obszar Działania" />
      <Paragraph>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century who is thought to have
        scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
        type specimen book. It usually begins with:
      </Paragraph>
      <Paragraph>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century who is thought to have
        scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
        type specimen book. It usually begins with:
      </Paragraph>
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

export default ObszarDzialaniaPage;

export function Head() {
  return <title>Obszar-Działania</title>;
}
