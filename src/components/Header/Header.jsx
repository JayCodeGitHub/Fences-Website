import React from 'react';
import { Wrapper } from './Header.styles';

const Header = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
    </Wrapper>
  );
};

export default Header;
