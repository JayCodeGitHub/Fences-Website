import React from 'react';
import {
  Wrapper,
  Title,
  StyledImage,
  ImagesWrapper,
} from './ManufacturersSection.styles';

const ManufacturersSection = ({ title, items }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ImagesWrapper>
        {items.map(({ alt, image, link }, i) => (
          <a href={link} target="_blank" key={i}>
            <StyledImage
              src={image.fluid.src}
              srcSet={image.fluid.srcSet}
              sizes={image.fluid.sizes}
              alt={alt}
            />
          </a>
        ))}
      </ImagesWrapper>
    </Wrapper>
  );
};

export default ManufacturersSection;
