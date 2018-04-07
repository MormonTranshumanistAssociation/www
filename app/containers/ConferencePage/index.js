import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from 'components/Header';
import Section from 'components/Section';
import PageWithContents from 'components/PageWithContents';
import { SingleColumn } from 'components/Columns';
import { ApolloProvider } from 'react-apollo';
import { Provider as MobxProvider } from 'mobx-react';
import ToC from './toc';
import authStore from './authStore';
import apolloClient from './apolloClient';

const MarkdownPage = styled.div` 
  h1 + p > img {
    width: 100%;
    box-shadow: 0 1px 4px rgba(0,0,0,.6);
  }
`;

const ConferencePage = (props) => (
  <ApolloProvider client={apolloClient}>
    <MobxProvider authStore={authStore}>
      <div>
        <Header />
        <article>
          <Helmet title="Conference" />
          <Section>
            <PageWithContents>
              <div><ToC /></div>
              <SingleColumn>
                <MarkdownPage>
                  {props.children}
                </MarkdownPage>
              </SingleColumn>
            </PageWithContents>
          </Section>
        </article>
      </div>
    </MobxProvider>
  </ApolloProvider>
);
ConferencePage.propTypes = {
  children: React.PropTypes.any,
};

export default ConferencePage;
