import * as React from 'react';
import { MainTemplate } from '../templates/MainTemplate';

function OnasPage() {
  return (
    <MainTemplate>
      <h1>O-nas</h1>
    </MainTemplate>
  );
}

export default OnasPage;

export function Head() {
  return <title>O-nas</title>;
}
