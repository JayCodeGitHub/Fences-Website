import * as React from 'react';
import { Link } from 'gatsby';
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
import {
  OffersSectionItems,
  GallerySectionItems,
  StepsSectionItems,
} from '../assets/items/HomePageItems/HomePageItems';

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
      <OffersSection>
        <h1>Nasza Oferta</h1>
        <div>
          {OffersSectionItems.map(({ image }) => (
            <div>
              <img src={image} />
            </div>
          ))}
        </div>
      </OffersSection>
      <StepsSection>
        {StepsSectionItems.map(({ number, heading, paragraph }) => (
          <div>
            <h3>{number}</h3>
            <h4>{heading}</h4>
            <p>{paragraph}</p>
          </div>
        ))}
      </StepsSection>
      <GallerySection>
        <h1>Nasze Realizacje</h1>
        <div>
          {GallerySectionItems.map(({ image }) => (
            <div>
              <img src={image} />
            </div>
          ))}
          <div>
            <Link to="/Realizacje">Zobacz Wszystkie Realizacje</Link>
          </div>
        </div>
      </GallerySection>
      <ParagraphBar value="Skontaktuj się z nami po darmową wycenę" />
    </MainTemplate>
  );
}

export default IndexPage;

export function Head() {
  return <title>Ogrodzenia</title>;
}
