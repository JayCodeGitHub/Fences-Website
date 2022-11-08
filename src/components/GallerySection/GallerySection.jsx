import React from 'react';
import {
  Wrapper,
  ImageWrapper,
  StyledImage,
  ShadowBox,
} from './GallerySection.styles';

const GallerySection = ({ items, secondary }) => {
  return (
    <Wrapper>
      {items.map(({ image, title, list }) => (
        <ImageWrapper>
          <span>
            <h2>{title}</h2>
            {secondary ? (
              <ul>
                {list.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            ) : null}
          </span>
          <ShadowBox />
          <StyledImage src={image} />
        </ImageWrapper>
      ))}
    </Wrapper>
  );
};

export default GallerySection;
