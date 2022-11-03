import * as React from 'react';
import { MainTemplate } from '../templates/MainTemplate';

function ObszarDzialaniaPage() {
  return (
    <MainTemplate>
      <h1>Obszar działania</h1>
    </MainTemplate>
  );
}

export default ObszarDzialaniaPage;

export function Head() {
  return <title>Obszar-Działania</title>;
}
