import * as React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import ParagraphBar from '../components/ParagraphBar/ParagraphBar';
import Hero from '../components/Hero/Hero';
import Photo from '../assets/images/1.jpg';
import {
  Title,
  Paragraph,
  OffersSection,
  StepsSection,
  GallerySection,
} from '../assets/styles/pages/homepage.styles';

function IndexPage() {
  return (
    <MainTemplate>
      <Hero
        title="Ogrodzenia Poznań i Okolice"
        button="Nasze Realizacje"
        href="/Realizacje"
        photo={Photo}
      />
      <Title>lorem ipsum dolor sit amet, lorem ipsum dolor sit amet</Title>
      <Paragraph>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century who is thought to have
        scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
        type specimen book. It usually begins with:
      </Paragraph>
      <OffersSection>Offers</OffersSection>
      <StepsSection>
        <div>
          <h3>1.</h3>
          <h4>lorem ipsum dolor sit amet</h4>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th
          </p>
        </div>
        <div>
          <h3>2.</h3>
          <h4>lorem ipsum dolor sit amet</h4>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th
          </p>
        </div>
        <div>
          <h3>3.</h3>
          <h4>lorem ipsum dolor sit amet</h4>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th
          </p>
        </div>
        <div>
          <h3>4.</h3>
          <h4>lorem ipsum dolor sit amet</h4>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th
          </p>
        </div>
      </StepsSection>
      <GallerySection>Gallery</GallerySection>
      <ParagraphBar value="Skontaktuj się z nami po darmową wycenę" />
    </MainTemplate>
  );
}

export default IndexPage;

export function Head() {
  return <title>Ogrodzenia</title>;
}
