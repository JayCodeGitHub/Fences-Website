import * as React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
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

function KontaktPage() {
  return (
    <MainTemplate>
      <Wrapper>
        <ContactItemsWrapper>
          <ContactItem>
            <PhoneIcon />
            <p>999 888 333</p>
          </ContactItem>
          <ContactItem>
            <MailIcon />
            <p>kontakt@gmail.com</p>
          </ContactItem>
          <CompanyData>
            <p>Nazwa Firmy</p>
            <p>Adres</p>
            <p>Kod Pocztowy</p>
            <p>NIP 00000000000</p>
            <p>REGON 0000000</p>
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
    </MainTemplate>
  );
}

export default KontaktPage;

export function Head() {
  return <title>Kontakt</title>;
}
