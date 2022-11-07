import React from 'react';
import { Wrapper } from './ParagraphBar.styles';

const ParagraphBar = ({ secondary, value }) => {
  return (
    <Wrapper secondary={secondary}>
      <span>{value}</span>
    </Wrapper>
  );
};

export default ParagraphBar;
