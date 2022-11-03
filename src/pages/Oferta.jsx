import * as React from 'react';
import Navigation from '../components/Navigation/Navigation';

function OfertaPage() {
  return (
    <div>
      <Navigation />
      <h1>Oferta</h1>
    </div>
  );
}

export default OfertaPage;

export function Head() {
  return <title>Oferta</title>;
}
