import React from 'react';
import { Link } from 'gatsby';
import Button from '../Button/Button.styles';
import { Wrapper, Title } from './StepsSection.styles';

const StepsSection = ({ items, href, button, title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {items.map(({ number, title, paragraph }, i) => (
        <div key={i}>
          <h3>{number}</h3>
          <h4>{title}</h4>
          <p>{paragraph}</p>
        </div>
      ))}
      <div>
        <Button secondary>
          <Link to={href}>{button}</Link>
        </Button>
      </div>
    </Wrapper>
  );
};

export default StepsSection;
