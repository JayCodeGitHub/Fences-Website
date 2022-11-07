import React from 'react';
import { Link } from 'gatsby';
import { Wrapper } from './Hero.styles';

const Hero = ({ secondary, title, button, href, paragraph, photo }) => {
  return (
    <>
      {!secondary ? (
        <Wrapper>
          <h1>{title}</h1>
          <button>
            <Link to={href}>{button}</Link>
          </button>
          <img src={photo} />
        </Wrapper>
      ) : (
        <Wrapper secondary background={photo}>
          <img />
          <div>
            <h1>{title}</h1>
            <p>{paragraph}</p>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Hero;
