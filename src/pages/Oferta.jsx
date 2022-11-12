import * as React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import Header from '../components/Header/Header';
import GridSection from '../components/GridSection/GridSection';
import { OfertaItems } from '../assets/items/OfertaItems/OfertaItems';

function OfertaPage() {
  return (
    <MainTemplate>
      <Header title="Oferta" />
      <GridSection items={OfertaItems} secondary />
    </MainTemplate>
  );
}

export default OfertaPage;

export function Head() {
  return <title>Oferta</title>;
}
