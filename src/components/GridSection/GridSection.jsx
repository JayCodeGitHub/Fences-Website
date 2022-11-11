import React from 'react';
import {
  OuterWrapper,
  StyledHeading,
  Wrapper,
  ImageWrapper,
  StyledImage,
  StyledLink,
} from './GridSection.styles';
import ArrowRightIcon from '../../assets/icons/ArrowRight.svg';

const GridSection = ({ title, items, link, href, background }) => {
  return (
    <OuterWrapper background={background}>
      {title ? <StyledHeading>{title}</StyledHeading> : null}
      <Wrapper>
        {items.map(({ image }) => (
          <ImageWrapper>
            <StyledImage src={image} />
          </ImageWrapper>
        ))}
        {link ? (
          <ImageWrapper>
            <StyledLink to={href}>
              {link}
              <ArrowRightIcon />
            </StyledLink>
          </ImageWrapper>
        ) : null}
      </Wrapper>
    </OuterWrapper>
  );
};

export default GridSection;
