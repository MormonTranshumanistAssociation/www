import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Link } from 'react-router';
import ForestImage from 'containers/HomePage/sections/SplashSection/forest.jpg';
import Section from 'components/Section';
import SectionContent from 'components/SectionContent';
import messages from './messages';

const H = styled.h3`
  font-size: 1.5em;
  color: #525B3A;
`;

const FooterSection = styled(Section)`
  padding: 1.5em 0 14px 0;
  background-position-y: bottom;
`;

const FooterSectionContent = styled(SectionContent)`
  padding: 0 2rem 1rem 2rem;
  text-align: left;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LinkGroup = styled.div`
  width: calc((768px - 4rem) / 4);
`;

const FooterLink = styled(Link)`
  color: #525B3A;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  display: block;
`;

const FooterA = styled.a`
  color: #525B3A;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  display: block;
`;

function Footer() {
  return (
    <FooterSection img={ForestImage}>
      <FooterSectionContent>
        <H><FormattedMessage {...messages.siteMap} /></H>
        <Links>
          <LinkGroup>
            <FooterLink to="/"><FormattedMessage {...messages.home} /></FooterLink>
            <FooterLink to="/about"><FormattedMessage {...messages.about} /></FooterLink>
            <FooterLink to="/news"><FormattedMessage {...messages.news} /></FooterLink>
            <FooterLink to="/library"><FormattedMessage {...messages.library} /></FooterLink>
            <FooterLink to="/blog"><FormattedMessage {...messages.blog} /></FooterLink>
            <FooterLink to="/meetup"><FormattedMessage {...messages.meetup} /></FooterLink>
            <FooterA href="contribute"><FormattedMessage {...messages.contribute} /></FooterA>
          </LinkGroup>
          <LinkGroup>
            <FooterA href="contribute"><FormattedMessage {...messages.conferences} /></FooterA>
            <FooterA href="contribute"><FormattedMessage {...messages.quotes} /></FooterA>
            <FooterA href="contribute"><FormattedMessage {...messages.videos} /></FooterA>
            <FooterA href="contribute"><FormattedMessage {...messages.annualReports} /></FooterA>
          </LinkGroup>
          <LinkGroup>
          </LinkGroup>
          <LinkGroup>
            <FooterA href="contribute"><FormattedMessage {...messages.facebook} /></FooterA>
            <FooterA href="contribute"><FormattedMessage {...messages.twitter} /></FooterA>
          </LinkGroup>
        </Links>
      </FooterSectionContent>
      <p><FormattedMessage {...messages.copyright} /></p>
    </FooterSection>
  );
}

export default Footer;
