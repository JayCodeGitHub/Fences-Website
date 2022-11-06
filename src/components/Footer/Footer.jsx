import React from 'react';
import { Link } from 'gatsby';
import {
  OuterWrapper,
  Wrapper,
  NavigationWrapper,
  HeadingWrapper,
  StyledNavigation,
  NavigationItem,
  ContactItemsWrapper,
  ContactItem,
  AuthorWrapper,
} from './Footer.styles';
import PhoneIcon from '../../assets/icons/PhoneIcon.svg';
import MailIcon from '../../assets/icons/MailIcon.svg';
import ArrowUpRightIcon from '../../assets/icons/ArrowUpRight.svg';

const Footer = () => {
  return (
    <OuterWrapper>
      <Wrapper>
        <NavigationWrapper>
          <HeadingWrapper>
            <Link to="/">Logo</Link>
          </HeadingWrapper>
          <StyledNavigation>
            <NavigationItem>
              <Link to="/O-Nas" activeClassName="active">
                O Nas
              </Link>
            </NavigationItem>
            <NavigationItem>
              <Link to="/Oferta" activeClassName="active">
                Oferta
              </Link>
            </NavigationItem>
            <NavigationItem>
              <Link to="/Obszar-Dzialania" activeClassName="active">
                Obszar Działania
              </Link>
            </NavigationItem>
            <NavigationItem>
              <Link to="/Realizacje" activeClassName="active">
                Realizacje
              </Link>
            </NavigationItem>
            <NavigationItem>
              <Link to="/Kontakt" activeClassName="active">
                Kontakt
              </Link>
            </NavigationItem>
          </StyledNavigation>
        </NavigationWrapper>
        <ContactItemsWrapper>
          <HeadingWrapper>SZYBKI KONTAKT</HeadingWrapper>
          <ContactItem>
            <PhoneIcon />
            <p>999 888 333</p>
          </ContactItem>
          <ContactItem>
            <MailIcon />
            <p>kontakt@gmail.com</p>
          </ContactItem>
        </ContactItemsWrapper>
      </Wrapper>
      <AuthorWrapper>
        <a href="/">
          <span>
            Created by JayCode
            <ArrowUpRightIcon />
          </span>
        </a>
      </AuthorWrapper>
    </OuterWrapper>
  );
};

export default Footer;
