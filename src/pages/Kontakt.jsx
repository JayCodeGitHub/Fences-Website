import * as React from 'react';
import { graphql } from 'gatsby';
import { MainTemplate } from '../templates/MainTemplate';
import Header from '../components/Header/Header';
import {
  Wrapper,
  ContactItemsWrapper,
  ContactItem,
  CompanyData,
  MapWrapper,
} from '../assets/styles/pages/kontakt.styles';
import PhoneIcon from '../assets/icons/PhoneIcon.svg';
import MailIcon from '../assets/icons/MailIcon.svg';
import FacebookIcon from '../assets/icons/FacebookIcon.svg';
import InstagramIcon from '../assets/icons/InstagramIcon.svg';
import ParagraphBar from '../components/ParagraphBar/ParagraphBar';

function KontaktPage({ data }) {
  function createMap() {
    return { __html: data.datoCmsContact.map };
  }
  return (
    <MainTemplate>
      <Header title="Kontakt" />
      <Wrapper>
        <ContactItemsWrapper>
          <a href={'tel:' + data.datoCmsContact.phone}>
            <ContactItem>
              <PhoneIcon />
              <p>{data.datoCmsContact.phone}</p>
            </ContactItem>
          </a>
          <a href={'mailto:' + data.datoCmsContact.email}>
            <ContactItem>
              <MailIcon />
              <p>{data.datoCmsContact.email}</p>
            </ContactItem>
          </a>
          <a href={data.datoCmsContact.facebook} target="_blank">
            <ContactItem>
              <FacebookIcon className="fill" />
              <p>Facebook</p>
            </ContactItem>
          </a>
          <a href={data.datoCmsContact.instagram} target="_blank">
            <ContactItem>
              <InstagramIcon className="fill" />
              <p>Instagram</p>
            </ContactItem>
          </a>
          <CompanyData>
            <p>{data.datoCmsContact.companyName}</p>
            <p>{data.datoCmsContact.address}</p>
            <p>{data.datoCmsContact.postalCode}</p>
            <p>{data.datoCmsContact.nip}</p>
            <p>{data.datoCmsContact.regon}</p>
          </CompanyData>
        </ContactItemsWrapper>
        <MapWrapper dangerouslySetInnerHTML={createMap()}></MapWrapper>
      </Wrapper>
      <ParagraphBar
        secondary
        value={data.datoCmsContact.paragraphBarSecondary}
      />
    </MainTemplate>
  );
}

export const query = graphql`
  query {
    datoCmsContact {
      phone
      email
      companyName
      address
      postalCode
      nip
      regon
      paragraphBarSecondary
      facebook
      instagram
      map
    }
  }
`;

export default KontaktPage;

export function Head() {
  return <title>Kontakt</title>;
}
