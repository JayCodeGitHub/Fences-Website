import * as React from 'react';
import Navigation from '../components/Navigation/Navigation';

function RealizacjePage() {
  return (
    <div>
      <Navigation />
      <h1>Realizacje</h1>
    </div>
  );
}

export default RealizacjePage;

export function Head() {
  return <title>Realizacje</title>;
}
