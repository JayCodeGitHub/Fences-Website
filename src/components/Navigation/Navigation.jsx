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
        <span>
          <PhoneIcon />
          <p>{data.datoCmsContact.phone}</p>
        </span>
        <span>
          <MailIcon />
          <p>{data.datoCmsContact.email}</p>
        </span>
      </ContactItemsWrapper>
      <Wrapper>
        <LogoWrapper onClick={() => setIsOpen(false)}>
          <Link to="/">Logo</Link>
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
        <HamburgerWrapper onClick={() => setIsOpen(!isOpen)}>
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
          <span>
            <PhoneIcon />
            <p>{data.datoCmsContact.phone}</p>
          </span>
          <span>
            <MailIcon />
            <p>{data.datoCmsContact.email}</p>
          </span>
        </MobileContactItemsWrapper>
      </StyledMobileNavigation>
    </OuterWrapper>
  );
}

export default Navigation;
