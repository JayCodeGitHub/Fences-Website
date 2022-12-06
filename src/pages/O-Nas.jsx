import * as React from 'react';
import { graphql } from 'gatsby';
import { MainTemplate } from '../templates/MainTemplate';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import ParagraphBar from '../components/ParagraphBar/ParagraphBar';
import {
  Section,
  Title,
  Paragraph,
  Image,
} from '../assets/styles/pages/o-nas.styles';
import ManufacturersSection from '../components/ManufacturersSection/ManufacturersSection';
import IconsSection from '../components/IconsSection/IconsSection';

function OnasPage({ data }) {
  return (
    <MainTemplate>
      <Header title="O Nas" />
      <Hero
        secondary
        image={data.datoCmsAbout.image}
        title={data.datoCmsAbout.title}
        paragraph={data.datoCmsAbout.paragraph}
      />
      {data.datoCmsAbout.about.map(
        (
          {
            __typename,
            image,
            title,
            paragraph,
            alt,
            manufacturers,
            iconone,
            signatureone,
            icontwo,
            signaturetwo,
            iconthree,
            signaturethree,
          },
          i,
        ) => {
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
            case 'DatoCmsManufacturer':
              return (
                <ManufacturersSection title={title} items={manufacturers} />
              );
            case 'DatoCmsIconssecion':
              return (
                <IconsSection
                  title={title}
                  paragraph={paragraph}
                  iconone={iconone}
                  signatureone={signatureone}
                  icontwo={icontwo}
                  signaturetwo={signaturetwo}
                  iconthree={iconthree}
                  signaturethree={signaturethree}
                />
              );
          }
        },
      )}
      <ParagraphBar secondary value={data.datoCmsAbout.paragraphBarSecondary} />
    </MainTemplate>
  );
}

export const query = graphql`
  query {
    datoCmsAbout {
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
      paragraphBarSecondary
      about {
        ... on DatoCmsIconssecion {
          __typename
          title
          paragraph
          iconone {
            url
          }
          signatureone
          icontwo {
            url
          }
          signaturetwo
          iconthree {
            url
          }
          signaturethree
        }
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

export default OnasPage;

export function Head() {
  return <title>O-nas</title>;
}
