import * as React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import Header from '../components/Header/Header';
import { Paragraph } from '../assets/styles/pages/obszar-dzialania.styles';
import GridSection from '../components/GridSection/GridSection';
import { ObszarDzialaniaItems } from '../assets/items/ObszarDzialaniaItems/ObszarDzialaniaItems';

function ObszarDzialaniaPage() {
  return (
    <MainTemplate>
      <Header title="Obszar Działania" />
      <Paragraph>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century who is thought to have
        scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
        type specimen book. It usually begins with:
      </Paragraph>
      <Paragraph>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century who is thought to have
        scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
        type specimen book. It usually begins with:
      </Paragraph>
      <GridSection items={ObszarDzialaniaItems} secondary />
    </MainTemplate>
  );
}

export default ObszarDzialaniaPage;

export function Head() {
  return <title>Obszar-Działania</title>;
}
