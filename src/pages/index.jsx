import * as React from 'react';
import { graphql } from 'gatsby';
import { MainTemplate } from '../templates/MainTemplate';
import ParagraphBar from '../components/ParagraphBar/ParagraphBar';
import Hero from '../components/Hero/Hero';
import Title from '../components/Title/Title.styles';
import StepsSection from '../components/StepsSection/StepsSection';
import Paragraph from '../components/Paragraph/Paragraph';
import GridSection from '../components/GridSection/GridSection';
import ManufacturersSection from '../components/ManufacturersSection/ManufacturersSection';

function IndexPage({ data }) {
  return (
    <MainTemplate>
      <Hero
        title={data.datoCmsHomepage.title}
        button={data.datoCmsHomepage.button}
        href={data.datoCmsHomepage.href}
        image={data.datoCmsHomepage.image}
        alt={data.datoCmsHomepage.alt}
      />
      {data.datoCmsHomepage.homepage.map(
        ({
          __typename,
          title,
          grid,
          paragraph,
          steps,
          href,
          button,
          manufacturers,
        }) => {
          switch (__typename) {
            case 'DatoCmsTitle':
              return <Title>{title}</Title>;
            case 'DatoCmsParagraph':
              return <Paragraph>{paragraph}</Paragraph>;
            case 'DatoCmsStepsSection':
              return (
                <StepsSection
                  items={steps}
                  href={href}
                  button={button}
                  title={title}
                />
              );
            case 'DatoCmsOfferSection':
              return (
                <GridSection
                  title={title}
                  items={grid}
                  background={({ theme }) => theme.grey}
                  secondary
                />
              );
            case 'DatoCmsParagraphBarSecondary':
              return <ParagraphBar secondary value={paragraph} />;
            case 'DatoCmsRealizationsSection':
              return (
                <GridSection
                  title={title}
                  items={grid}
                  link="Zobacz Wszystkie Realizacje"
                  href="/Realizacje"
                  background={({ theme }) => theme.grey}
                />
              );
            case 'DatoCmsManufacturer':
              return (
                <ManufacturersSection title={title} items={manufacturers} />
              );
          }
        },
      )}
    </MainTemplate>
  );
}

export const query = graphql`
  query {
    datoCmsHomepage {
      title
      alt
      href
      button
      image {
        fluid(maxWidth: 800, maxHeight: 1200) {
          src
          srcSet
          sizes
        }
      }
      homepage {
        ... on DatoCmsManufacturer {
          __typename
          title
          manufacturers {
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
        ... on DatoCmsTitle {
          __typename
          title
        }
        ... on DatoCmsParagraph {
          __typename
          paragraph
        }
        ... on DatoCmsOfferSection {
          __typename
          title
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
        ... on DatoCmsParagraphBarSecondary {
          __typename
          paragraph
        }
        ... on DatoCmsRealizationsSection {
          __typename
          title
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
        ... on DatoCmsStepsSection {
          __typename
          title
          steps {
            ... on DatoCmsStep {
              __typename
              title
              number
              paragraph
            }
          }
          button
          href
        }
      }
    }
  }
`;

export default IndexPage;

export function Head() {
  return <title>Ogrodzenia</title>;
}
