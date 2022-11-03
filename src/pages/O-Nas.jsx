import * as React from 'react';
import Navigation from '../components/Navigation/Navigation';

function OnasPage() {
  return (
    <div>
      <Navigation />
      <h1>O-nas</h1>
    </div>
  );
}

export default OnasPage;

export function Head() {
  return <title>O-nas</title>;
}
