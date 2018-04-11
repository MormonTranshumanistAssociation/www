import React from 'react';
import { FormattedMessage } from 'react-intl';
import Section from 'components/Section';
import styled from 'styled-components';
import messages from './messages';
import NewGodThumbImage from './new_god_thumb.png';
import ConferenceVideoNav from './ConferenceVideoNav';

const Quote = styled.h3`
  font-size: 1.75rem;
  padding: 0 1rem;
  margin: 0;
  line-height: 1.25em;
  color: #525b3a;
`;

const QuoteSource = styled(Quote)`
  margin: 0.5em 0;
  font-size: 1.2rem;
`;

const NewGodLinkImage = styled.img`
  background-size: cover;
  width: 310px;
  height: auto;
  margin: 2em 0 6em 0;
  transition: 0.2s all;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

  &:hover {
    -webkit-filter: brightness(75%);
  }
`;

const TheosisSection = () => (
  <Section>
    <Quote>
      <FormattedMessage {...messages.newGodQuote} />
    </Quote>
    <a href="//new-god-argument.com">
      <NewGodLinkImage src={NewGodThumbImage} />
    </a>
    <Quote>
      <FormattedMessage {...messages.confVideosQuote} />
    </Quote>
    <QuoteSource>
      <FormattedMessage {...messages.josephSmith} />
    </QuoteSource>
    <ConferenceVideoNav />
  </Section>
);

export default TheosisSection;
