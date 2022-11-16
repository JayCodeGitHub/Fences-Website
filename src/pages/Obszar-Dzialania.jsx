import * as React from 'react';
import { graphql } from 'gatsby';
import { MainTemplate } from '../templates/MainTemplate';
import Header from '../components/Header/Header';
import Paragraph from '../components/Paragraph/Paragraph';
import GridSection from '../components/GridSection/GridSection';

function ObszarDzialaniaPage({ data }) {
  return (
    <MainTemplate>
      <Header title="Obszar Działania" />
      {data.datoCmsArea.area.map(({ __typename, paragraph, grid }) => {
        switch (__typename) {
          case 'DatoCmsParagraph':
            return <Paragraph>{paragraph}</Paragraph>;
          case 'DatoCmsGrid':
            return <GridSection items={grid} secondary />;
        }
      })}
    </MainTemplate>
  );
}

export const query = graphql`
  query {
    datoCmsArea {
      area {
        ... on DatoCmsParagraph {
          __typename
          paragraph
        }
        ... on DatoCmsGrid {
          __typename
          grid {
            ... on DatoCmsGridItem {
              title
              alt
              list {
                ... on DatoCmsListElement {
                  listElement
                }
              }
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
    }
  }
`;

export default ObszarDzialaniaPage;

export function Head() {
  return <title>Obszar-Działania</title>;
}
