import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { MainTemplate } from '../templates/MainTemplate';
import Header from '../components/Header/Header';
import {
  Wrapper,
  ImageWrapper,
  StyledImage,
  ButtonWrapper,
  StyledButton,
} from '../assets/styles/pages/realizacje.styles';
import PopupImage from '../components/PopupImage/PopupImage';
import ArrowUpRightIcon from '../assets/icons/ArrowUpRight.svg';

function RealizacjePage({ data }) {
  const [isPopup, setIsPopup] = useState(false);
  const [image, setImage] = useState(null);
  const [alt, setAlt] = useState(null);

  const handleClick = (image, alt) => {
    setIsPopup(true);
    setImage(image);
    setAlt(alt);
  };
  return (
    <MainTemplate>
      <Header title="Realizacje" />
      <PopupImage
        isPopup={isPopup}
        image={image}
        alt={alt}
        setIsPopup={setIsPopup}
      />
      <Wrapper>
        {data.datoCmsGallery.images.map(({ id, alt, image }) => (
          <ImageWrapper key={id}>
            <StyledImage
              src={image.fluid.src}
              srcSet={image.fluid.srcSet}
              sizes={image.fluid.sizes}
              alt={alt}
              onClick={() => handleClick(image, alt)}
            />
          </ImageWrapper>
        ))}
      </Wrapper>
      <ButtonWrapper>
        <a href={data.datoCmsGallery.gallery} target="_blank">
          <StyledButton secondary>
            Zobacz Wszystkie Realizacje
            <ArrowUpRightIcon />
          </StyledButton>
        </a>
      </ButtonWrapper>
    </MainTemplate>
  );
}

export const query = graphql`
  query {
    datoCmsGallery {
      gallery
      images {
        id
        alt
        image {
          fluid(maxWidth: 800, maxHeight: 1200) {
            src
            srcSet
            sizes
          }
        }
      }
    }
  }
`;

export default RealizacjePage;

export function Head() {
  return <title>Realizacje</title>;
}
