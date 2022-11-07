import * as React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import Header from '../components/Header/Header';
import { Wrapper } from '../assets/styles/pages/realizacje.styles';

function RealizacjePage() {
  return (
    <MainTemplate>
      <Header title="Realizacje" />
      <Wrapper>gallery</Wrapper>
    </MainTemplate>
  );
}

export default RealizacjePage;

export function Head() {
  return <title>Realizacje</title>;
}
