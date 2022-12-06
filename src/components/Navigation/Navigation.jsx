import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {
  OuterWrapper,
  ContactItemsWrapper,
  Wrapper,
  LogoWrapper,
  StyledNavigation,
  NavigationItem,
  HamburgerWrapper,
  Hamburger,
  StyledMobileNavigation,
  MobileContactItemsWrapper,
} from './Navigation.styles';
import { NavigationItems } from '../../assets/items/NavigationItems/NavigationItems';
import PhoneIcon from '../../assets/icons/PhoneIcon.svg';
import MailIcon from '../../assets/icons/MailIcon.svg';
import Logo from '../../assets/images/Logo.png';

function Navigation() {
  const data = useStaticQuery(graphql`
    query {
      datoCmsContact {
        phone
        email
      }
    }
  `);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <OuterWrapper>
      <ContactItemsWrapper>
        <a href={'tel:' + data.datoCmsContact.phone}>
          <PhoneIcon />
          <p>{data.datoCmsContact.phone}</p>
        </a>
        <a href={'mailto:' + data.datoCmsContact.email}>
          <MailIcon />
          <p>{data.datoCmsContact.email}</p>
        </a>
      </ContactItemsWrapper>
      <Wrapper>
        <LogoWrapper onClick={() => setIsOpen(false)}>
          <Link to="/">
            <img src={Logo} />
          </Link>
        </LogoWrapper>
        <StyledNavigation>
          {NavigationItems.map(({ name, href }, i) => (
            <NavigationItem key={i}>
              <Link to={href} activeClassName="active">
                {name}
              </Link>
            </NavigationItem>
          ))}
        </StyledNavigation>
        <HamburgerWrapper
          onClick={() => setIsOpen(!isOpen)}
          aria-label="hamburger menu button"
        >
          <Hamburger isOpen={isOpen} />
        </HamburgerWrapper>
      </Wrapper>
      <StyledMobileNavigation isOpen={isOpen}>
        <ul>
          {NavigationItems.map(({ name, href }, i) => (
            <NavigationItem key={i}>
              <Link to={href} activeClassName="active">
                {name}
              </Link>
            </NavigationItem>
          ))}
        </ul>
        <MobileContactItemsWrapper>
          <a href={'tel:' + data.datoCmsContact.phone}>
            <PhoneIcon />
            <p>{data.datoCmsContact.phone}</p>
          </a>
          <a href={'mailto:' + data.datoCmsContact.email}>
            <MailIcon />
            <p>{data.datoCmsContact.email}</p>
          </a>
        </MobileContactItemsWrapper>
      </StyledMobileNavigation>
    </OuterWrapper>
  );
}

export default Navigation;
