import * as React from 'react';
import Navigation from '../components/Navigation/Navigation';

function IndexPage() {
  return (
    <div>
      <Navigation />
      <h1>Home</h1>
    </div>
  );
}

export default IndexPage;

export function Head() {
  return <title>Ogrodzenia</title>;
}
