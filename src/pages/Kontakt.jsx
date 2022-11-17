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
  StyledMap,
} from '../assets/styles/pages/kontakt.styles';
import PhoneIcon from '../assets/icons/PhoneIcon.svg';
import MailIcon from '../assets/icons/MailIcon.svg';
import FacebookIcon from '../assets/icons/FacebookIcon.svg';
import ParagraphBar from '../components/ParagraphBar/ParagraphBar';

function KontaktPage({ data }) {
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
              <p>facebook</p>
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
        <MapWrapper>
          <StyledMap
            title="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2420.984138782941!2d16.81528761613564!3d52.64219957983751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47046cb8d617b447%3A0xb0787118b66f1468!2sGo%C5%82aszy%C5%84ska%2035%2C%2064-600%20Oborniki!5e0!3m2!1spl!2spl!4v1660782076893!5m2!1spl!2spl"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></StyledMap>
        </MapWrapper>
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
    }
  }
`;

export default KontaktPage;

export function Head() {
  return <title>Kontakt</title>;
}
