import React from 'react';
import { Link } from 'gatsby';
import { Wrapper, StyledHeader, StyledImage } from './Hero.styles';
import Button from '../Button/Button.styles';

const Hero = ({ secondary, title, button, href, paragraph, photo }) => {
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
          <StyledImage src={photo} />
        </Wrapper>
      ) : (
        <Wrapper secondary background={photo}>
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
