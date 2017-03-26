import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import ForestImage from 'containers/HomePage/sections/SplashSection/forest.jpg';
import Section from 'components/Section';
import Link from 'components/Link';
import SectionContent from 'components/SectionContent';
import messages from './messages';

const H = styled.h3`
  font-size: 1.5em;
  color: #525B3A;
`;

const FooterSection = styled(Section)`
  padding: 1.5em 0 14px 0;
  background-position-y: bottom;
  background-attachment: fixed;
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
  & > div { display: block }
  color: rgba(0,0,0,.8);
`;

function Footer() {
  return (
    <FooterSection img={ForestImage}>
      <FooterSectionContent>
        <H><FormattedMessage {...messages.siteMap} /></H>
        <Links>
          <LinkGroup>
            <Link to="/"><FormattedMessage {...messages.home} /></Link>
            <Link to="/about"><FormattedMessage {...messages.about} /></Link>
            <Link to="/news"><FormattedMessage {...messages.news} /></Link>
            <Link to="/library"><FormattedMessage {...messages.library} /></Link>
            <Link to="/blog"><FormattedMessage {...messages.blog} /></Link>
            <Link to="/meetup"><FormattedMessage {...messages.meetup} /></Link>
            <Link href="contribute"><FormattedMessage {...messages.contribute} /></Link>
          </LinkGroup>
          <LinkGroup>
            <Link href="contribute"><FormattedMessage {...messages.conferences} /></Link>
            <Link href="contribute"><FormattedMessage {...messages.quotes} /></Link>
            <Link href="contribute"><FormattedMessage {...messages.videos} /></Link>
            <Link href="contribute"><FormattedMessage {...messages.annualReports} /></Link>
          </LinkGroup>
          <LinkGroup>
          </LinkGroup>
          <LinkGroup>
            <Link href="contribute"><FormattedMessage {...messages.facebook} /></Link>
            <Link href="contribute"><FormattedMessage {...messages.twitter} /></Link>
          </LinkGroup>
        </Links>
      </FooterSectionContent>
      <p><FormattedMessage {...messages.copyright} /></p>
    </FooterSection>
  );
}

export default Footer;
