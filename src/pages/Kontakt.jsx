import * as React from 'react';
import { MainTemplate } from '../templates/MainTemplate';

function KontaktPage() {
  return (
    <MainTemplate>
      <h1>Kontakt</h1>
    </MainTemplate>
  );
}

export default KontaktPage;

export function Head() {
  return <title>Kontakt</title>;
}
