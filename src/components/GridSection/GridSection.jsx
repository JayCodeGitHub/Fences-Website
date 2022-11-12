import React from 'react';
import {
  OuterWrapper,
  StyledHeading,
  Wrapper,
  GridItem,
  ImageWrapper,
  StyledImage,
  StyledLink,
} from './GridSection.styles';
import ArrowRightIcon from '../../assets/icons/ArrowRight.svg';

const GridSection = ({ secondary, title, items, link, href, background }) => {
  return (
    <OuterWrapper background={background}>
      {title ? <StyledHeading>{title}</StyledHeading> : null}
      <Wrapper>
        {items.map(({ image, title, list }) => (
          <GridItem>
            {secondary ? (
              <ImageWrapper secondary>
                <span>
                  <h2>{title}</h2>
                  {list ? (
                    <ul>
                      {list.map((item) => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </span>
                <StyledImage src={image} />
              </ImageWrapper>
            ) : (
              <ImageWrapper>
                <StyledImage src={image} />
              </ImageWrapper>
            )}
          </GridItem>
        ))}
        {link ? (
          <GridItem>
            <StyledLink to={href}>
              {link}
              <ArrowRightIcon />
            </StyledLink>
          </GridItem>
        ) : null}
      </Wrapper>
    </OuterWrapper>
  );
};

export default GridSection;
