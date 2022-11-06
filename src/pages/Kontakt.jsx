import * as React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import { Wrapper } from '../assets/styles/pages/kontakt.styles';

function KontaktPage() {
  return (
    <MainTemplate>
      <Wrapper>
        <h1>Kontakt</h1>
      </Wrapper>
    </MainTemplate>
  );
}

export default KontaktPage;

export function Head() {
  return <title>Kontakt</title>;
}
