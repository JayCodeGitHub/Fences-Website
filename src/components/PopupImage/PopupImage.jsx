import React from 'react';
import { Wrapper, StyledImage, CloseButton } from './PopupImage.styles';

const PopupImage = ({ isPopup, setIsPopup, image, alt }) => {
  return (
    <>
      {image ? (
        <Wrapper isPopup={isPopup}>
          <StyledImage
            src={image.image.fluid.src}
            srcSet={image.image.fluid.srcSet}
            sizes={image.image.fluid.sizes}
            alt={alt}
          />
          <CloseButton onClick={() => setIsPopup(false)} />
        </Wrapper>
      ) : null}
    </>
  );
};

export default PopupImage;
