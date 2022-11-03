import * as React from 'react';
import { MainTemplate } from '../templates/MainTemplate';

function IndexPage() {
  return (
    <MainTemplate>
      <h1>Home</h1>
    </MainTemplate>
  );
}

export default IndexPage;

export function Head() {
  return <title>Ogrodzenia</title>;
}
