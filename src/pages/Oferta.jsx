import * as React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import Header from '../components/Header/Header';
import GallerySection from '../components/GallerySection/GallerySection';
import { OfertaItems } from '../assets/items/OfertaItems/OfertaItems';

function OfertaPage() {
  return (
    <MainTemplate>
      <Header title="Oferta" />
      <GallerySection items={OfertaItems} />
    </MainTemplate>
  );
}

export default OfertaPage;

export function Head() {
  return <title>Oferta</title>;
}
