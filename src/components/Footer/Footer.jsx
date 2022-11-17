import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
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
import FacebookIcon from '../../assets/icons/FacebookIcon.svg';
import { NavigationItems } from '../../assets/items/NavigationItems/NavigationItems';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsContact {
        phone
        email
        facebook
      }
    }
  `);
  return (
    <OuterWrapper>
      <Wrapper>
        <NavigationWrapper>
          <HeadingWrapper>
            <Link to="/">Logo</Link>
          </HeadingWrapper>
          <StyledNavigation>
            {NavigationItems.map(({ name, href }, i) => (
              <NavigationItem key={i}>
                <Link to={href} activeClassName="active">
                  {name}
                </Link>
              </NavigationItem>
            ))}
          </StyledNavigation>
        </NavigationWrapper>
        <ContactItemsWrapper>
          <HeadingWrapper>SZYBKI KONTAKT</HeadingWrapper>
          <ContactItem>
            <PhoneIcon />
            <p>{data.datoCmsContact.phone}</p>
          </ContactItem>
          <ContactItem>
            <MailIcon />
            <p>{data.datoCmsContact.email}</p>
          </ContactItem>
          <ContactItem>
            <FacebookIcon className="facebook" />
            <p>facebook</p>
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
