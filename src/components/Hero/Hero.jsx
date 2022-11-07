import React from 'react';
import { Link } from 'gatsby';
import { Wrapper } from './Hero.styles';

const Hero = ({ secondary, title, button, href, paragraph, photo }) => {
  return (
    <>
      {!secondary ? (
        <Wrapper>
          <header>
            <h1>{title}</h1>
            <button>
              <Link to={href}>{button}</Link>
            </button>
          </header>
          <img src={photo} />
        </Wrapper>
      ) : (
        <Wrapper secondary background={photo}>
          <header>
            <h1>{title}</h1>
            <p>{paragraph}</p>
          </header>
        </Wrapper>
      )}
    </>
  );
};

export default Hero;
