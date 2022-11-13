import React from 'react';
import { Wrapper, StyledImage, CloseButton } from './PopupImage.styles';

const PopupImage = ({ isPopup, setIsPopup, image }) => {
  return (
    <Wrapper isPopup={isPopup}>
      <StyledImage src={image} />
      <CloseButton onClick={() => setIsPopup(false)} />
    </Wrapper>
  );
};

export default PopupImage;
