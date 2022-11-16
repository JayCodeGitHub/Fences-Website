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
        {items.map(({ image, title, list, alt }, i) => (
          <GridItem key={i}>
            {secondary ? (
              <ImageWrapper secondary>
                <span>
                  <h2>{title}</h2>
                  {list ? (
                    <ul>
                      {list.map(({ listElement }, i) => (
                        <li key={i}>{listElement}</li>
                      ))}
                    </ul>
                  ) : null}
                </span>
                <StyledImage
                  src={image.fluid.src}
                  srcSet={image.fluid.srcSet}
                  sizes={image.fluid.sizes}
                  alt={alt}
                />
              </ImageWrapper>
            ) : (
              <ImageWrapper>
                <StyledImage
                  src={image.fluid.src}
                  srcSet={image.fluid.srcSet}
                  sizes={image.fluid.sizes}
                  alt={alt}
                />
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
