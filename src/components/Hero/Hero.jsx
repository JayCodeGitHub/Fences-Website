import React from 'react';
import { Link } from 'gatsby';
import { Wrapper, StyledHeader, StyledImage } from './Hero.styles';
import Button from '../Button/Button.styles';

const Hero = ({ secondary, title, button, href, paragraph, image }) => {
  return (
    <>
      {!secondary ? (
        <Wrapper>
          <StyledHeader>
            <h1>{title}</h1>
            <Button>
              <Link to={href}>{button}</Link>
            </Button>
          </StyledHeader>
          <StyledImage
            src={image.fluid.src}
            srcSet={image.fluid.srcSet}
            sizes={image.fluid.sizes}
          />
        </Wrapper>
      ) : (
        <Wrapper secondary background={image.fluid.src}>
          <StyledHeader secondary>
            <h1>{title}</h1>
            <p>{paragraph}</p>
          </StyledHeader>
        </Wrapper>
      )}
    </>
  );
};

export default Hero;
