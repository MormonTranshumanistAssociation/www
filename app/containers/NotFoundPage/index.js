/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import H1 from 'components/H1';
import messages from './messages';

const Article = styled.article`
  max-width: 768px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export default function NotFound() {
  return (
    <Article>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    </Article>
  );
}
