/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import Header from 'components/Header';
import H1 from 'components/H1';
import Section from 'components/Section';
import SectionContent from 'components/SectionContent';
import messages from './messages';

const FullPageSection = styled(Section)`
  min-height: calc(100vh - 550px);
`;

const ErrorNumber = styled.h2`
  font-family: 'Open Sans', Helvetica, sans;
  font-size: 3em;
  font-weight: 300;
  color: rgba(0,0,0,.3);
  margin: 0 0 20px 0;
`;
export default function NotFound() {
  return (
    <div>
      <Header />
      <FullPageSection>
        <SectionContent>
          <ErrorNumber>404</ErrorNumber>
          <H1><FormattedMessage {...messages.header} /></H1>
        </SectionContent>
      </FullPageSection>
    </div>
  );
}
