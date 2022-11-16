import React from 'react';
import { Link } from 'gatsby';
import Button from '../Button/Button.styles';
import { Wrapper } from './StepsSection.styles';

const StepsSection = ({ items }) => {
  return (
    <Wrapper>
      {items.map(({ number, heading, paragraph }, i) => (
        <div key={i}>
          <h3>{number}</h3>
          <h4>{heading}</h4>
          <p>{paragraph}</p>
        </div>
      ))}
      <div>
        <Button secondary>
          <Link to="/Kontakt">Skontaktuj się z nami</Link>
        </Button>
      </div>
    </Wrapper>
  );
};

export default StepsSection;
