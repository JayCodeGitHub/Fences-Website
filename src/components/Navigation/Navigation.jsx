import React, { useState } from 'react';
import { Link } from 'gatsby';
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
} from './Navigation.styles';
import PhoneIcon from '../../assets/icons/PhoneIcon.svg';
import MailIcon from '../../assets/icons/MailIcon.svg';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <OuterWrapper>
      <ContactItemsWrapper>
        <span>
          <PhoneIcon />
          <p>999 888 333</p>
        </span>
        <span>
          <MailIcon />
          <p>kontakt@gmail.com</p>
        </span>
      </ContactItemsWrapper>
      <Wrapper>
        <LogoWrapper>
          <Link to="/">Logo</Link>
        </LogoWrapper>
        <StyledNavigation>
          <NavigationItem>
            <Link to="/O-Nas/" activeClassName="active">
              O nas
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/Oferta/" activeClassName="active">
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
        <HamburgerWrapper onClick={() => setIsOpen(!isOpen)}>
          <Hamburger isOpen={isOpen} />
        </HamburgerWrapper>
        <StyledMobileNavigation></StyledMobileNavigation>
      </Wrapper>
    </OuterWrapper>
  );
}

export default Navigation;
