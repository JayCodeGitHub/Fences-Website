import * as React from 'react';
import { MainTemplate } from '../templates/MainTemplate';

function OfertaPage() {
  return (
    <MainTemplate>
      <h1>Oferta</h1>
    </MainTemplate>
  );
}

export default OfertaPage;

export function Head() {
  return <title>Oferta</title>;
}
