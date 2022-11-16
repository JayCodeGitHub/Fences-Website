import * as React from 'react';
import { graphql } from 'gatsby';
import { MainTemplate } from '../templates/MainTemplate';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import ParagraphBar from '../components/ParagraphBar/ParagraphBar';
import {
  Wrapper,
  Section,
  Title,
  Paragraph,
  Image,
} from '../assets/styles/pages/o-nas.styles';

function OnasPage({ data }) {
  console.log(data.datoCmsAbout.about);
  return (
    <MainTemplate>
      <Header title="O Nas" />
      <Hero
        secondary
        image={data.datoCmsAbout.image}
        title={data.datoCmsAbout.title}
        paragraph={data.datoCmsAbout.paragraph}
      />
      <ParagraphBar value={data.datoCmsAbout.paragraphBar} />
      <Wrapper>
        {data.datoCmsAbout.about.map(({ image, title, paragraph }, i) => (
          <Section key={i}>
            <Title order={i}>{title}</Title>
            <Paragraph order={i}>{paragraph}</Paragraph>
            <Image
              src={image.fluid.src}
              srcSet={image.fluid.srcSet}
              sizes={image.fluid.sizes}
              order={i}
            />
          </Section>
        ))}
      </Wrapper>
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
      paragraphBar
      paragraphBarSecondary
      about {
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
