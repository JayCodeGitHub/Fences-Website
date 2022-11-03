import * as React from 'react';
import { MainTemplate } from '../templates/MainTemplate';

function RealizacjePage() {
  return (
    <MainTemplate>
      <h1>Realizacje</h1>
    </MainTemplate>
  );
}

export default RealizacjePage;

export function Head() {
  return <title>Realizacje</title>;
}
