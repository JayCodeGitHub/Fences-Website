import * as React from 'react';
import { graphql } from 'gatsby';
import { MainTemplate } from '../templates/MainTemplate';
import Header from '../components/Header/Header';
import GridSection from '../components/GridSection/GridSection';

function OfertaPage({ data }) {
  return (
    <MainTemplate>
      <Header title="Oferta" />
      <GridSection items={data.datoCmsOffer.offer} secondary />
    </MainTemplate>
  );
}

export const query = graphql`
  query {
    datoCmsOffer {
      offer {
        ... on DatoCmsGridItem {
          title
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
