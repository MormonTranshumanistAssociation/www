import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from 'components/Header';
import Section from 'components/Section';
import PageWithContents from 'components/PageWithContents';
import { SingleColumn } from 'components/Columns';
import ToC from './toc';
import IndexPage from './Index.md';

const MarkdownPage = styled.div`
  h1 + p > img {
    width: 100%;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  }
`;

const ConferencesPage = props => (
  <div>
    <Header />
    <article>
      <Helmet title="Conferences" />
      <Section>
        <PageWithContents>
          <SingleColumn>
            <MarkdownPage>
              <IndexPage />
            </MarkdownPage>
          </SingleColumn>
        </PageWithContents>
      </Section>
    </article>
  </div>
);
ConferencesPage.propTypes = {
  children: React.PropTypes.any,
};

export default ConferencesPage;
