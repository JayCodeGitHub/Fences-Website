import * as React from 'react';
import { graphql } from 'gatsby';
import { MainTemplate } from '../templates/MainTemplate';
import Header from '../components/Header/Header';
import {
  Section,
  Title,
  Paragraph,
  Image,
} from '../assets/styles/pages/oferta.styles';

function OfertaPage({ data }) {
  return (
    <MainTemplate>
      <Header title="Oferta" />
      {data.datoCmsOffer.offer.map(
        ({ __typename, image, title, paragraph, alt, manufacturers }, i) => {
          switch (__typename) {
            case 'DatoCmsSection':
              return (
                <Section key={i}>
                  <Title order={i}>{title}</Title>
                  <Paragraph order={i}>{paragraph}</Paragraph>
                  <Image
                    src={image.fluid.src}
                    srcSet={image.fluid.srcSet}
                    sizes={image.fluid.sizes}
                    order={i}
                    alt={alt}
                  />
                </Section>
              );
          }
        },
      )}
    </MainTemplate>
  );
}

export const query = graphql`
  query {
    datoCmsOffer {
      offer {
        ... on DatoCmsSection {
          __typename
          title
          paragraph
          alt
          image {
            fluid(maxWidth: 800, maxHeight: 1200) {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`;

export default OfertaPage;

export function Head() {
  return <title>Oferta</title>;
}
