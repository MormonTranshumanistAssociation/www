/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from 'components/Header';
import Section from 'components/Section';
import SectionContent from 'components/SectionContent';
import { SingleColumn } from 'components/Columns';
import ToC from './toc';

const PageWithContents = styled(SectionContent)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: flex-start;
`;

const LibraryPage = (props) => (
  <div>
    <Header />
    <article>
      <Helmet title="Library" />
      <Section>
        <PageWithContents>
          <div><ToC /></div>
          <SingleColumn>
            {props.children}
          </SingleColumn>
        </PageWithContents>
      </Section>
    </article>
  </div>
);

LibraryPage.propTypes = {
  children: React.PropTypes.any,
};

export default LibraryPage;
