import React from 'react';
import {
  Paragraph,
  Title,
  Wrapper,
  Icon,
  IconsWrapper,
  IconWrapper,
} from './IconsSection.styles';

const IconsSection = ({
  title,
  paragraph,
  iconone,
  signatureone,
  icontwo,
  signaturetwo,
  iconthree,
  signaturethree,
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Paragraph>{paragraph}</Paragraph>
      <IconsWrapper>
        <IconWrapper>
          <Icon src={iconone.url} />
          <h3>{signatureone}</h3>
        </IconWrapper>
        <IconWrapper>
          <Icon src={icontwo.url} />
          <h3>{signaturetwo}</h3>
        </IconWrapper>
        <IconWrapper>
          <Icon src={iconthree.url} />
          <h3>{signaturethree}</h3>
        </IconWrapper>
      </IconsWrapper>
    </Wrapper>
  );
};

export default IconsSection;
