import * as React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Photo from '../assets/images/2.jpg';
import ParagraphBar from '../components/ParagraphBar/ParagraphBar';
import {
  Wrapper,
  Section,
  Title,
  Paragraph,
  Image,
} from '../assets/styles/pages/o-nas.styles';
import { ONasItems } from '../assets/items/ONasItems/ONasItems';

function OnasPage() {
  return (
    <MainTemplate>
      <Header title="O Nas" />
      <Hero
        secondary
        photo={Photo}
        title="Lorem ipsum"
        paragraph="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century."
      />
      <ParagraphBar
        secondary
        value="lorem ipsum dolor sit amet, lorem ipsum dolor sit amet"
      />
      <Wrapper>
        {ONasItems.map(({ image, title, paragraph }, i) => (
          <Section>
            <Title order={i}>{title}</Title>
            <Paragraph order={i}>{paragraph}</Paragraph>
            <Image src={image} order={i} />
          </Section>
        ))}
      </Wrapper>
      <ParagraphBar value="Skontaktuj się z nami po darmową wycenę" />
    </MainTemplate>
  );
}

export default OnasPage;

export function Head() {
  return <title>O-nas</title>;
}
