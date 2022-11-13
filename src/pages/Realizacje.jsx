import React, { useState } from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import Header from '../components/Header/Header';
import {
  Wrapper,
  ImageWrapper,
  StyledImage,
} from '../assets/styles/pages/realizacje.styles';
import { RealizacjeItems } from '../assets/items/RealizacjeItems/RealizacjeItems';
import PopupImage from '../components/PopupImage/PopupImage';

function RealizacjePage() {
  const [isPopup, setIsPopup] = useState(false);
  const [image, setImage] = useState(null);

  const handleClick = (image) => {
    setIsPopup(true);
    setImage(image);
  };
  return (
    <MainTemplate>
      <Header title="Realizacje" />
      <PopupImage isPopup={isPopup} image={image} setIsPopup={setIsPopup} />
      <Wrapper>
        {RealizacjeItems.map(({ image }, i) => (
          <ImageWrapper key={i}>
            <StyledImage src={image} onClick={() => handleClick(image)} />
          </ImageWrapper>
        ))}
      </Wrapper>
    </MainTemplate>
  );
}

export default RealizacjePage;

export function Head() {
  return <title>Realizacje</title>;
}
