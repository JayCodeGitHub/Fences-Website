import * as React from 'react';
import Navigation from '../components/Navigation/Navigation';

function ObszarDzialaniaPage() {
  return (
    <div>
      <Navigation />
      <h1>Obszar działania</h1>
    </div>
  );
}

export default ObszarDzialaniaPage;

export function Head() {
  return <title>Obszar-Działania</title>;
}
