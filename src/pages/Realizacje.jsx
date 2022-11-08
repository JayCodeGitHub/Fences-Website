import * as React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import Header from '../components/Header/Header';
import {
  Wrapper,
  ImageWrapper,
  StyledImage,
} from '../assets/styles/pages/realizacje.styles';
import One from '../assets/images/1.jpg';
import Two from '../assets/images/2.jpg';
import Three from '../assets/images/3.jpeg';
import Four from '../assets/images/4.jpeg';
import Five from '../assets/images/5.jpeg';
import Six from '../assets/images/6.jpeg';
import Seven from '../assets/images/7.jpeg';
import Eight from '../assets/images/8.jpeg';

function RealizacjePage() {
  return (
    <MainTemplate>
      <Header title="Realizacje" />
      <Wrapper>
        <ImageWrapper>
          <StyledImage src={One} />
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src={Two} />
        </ImageWrapper>
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
      </Wrapper>
    </MainTemplate>
  );
}

export default RealizacjePage;

export function Head() {
  return <title>Realizacje</title>;
}
