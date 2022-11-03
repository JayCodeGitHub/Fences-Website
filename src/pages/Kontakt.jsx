import * as React from 'react';
import Navigation from '../components/Navigation/Navigation';

function KontaktPage() {
  return (
    <div>
      <Navigation />
      <h1>Kontakt</h1>
    </div>
  );
}

export default KontaktPage;

export function Head() {
  return <title>Kontakt</title>;
}
