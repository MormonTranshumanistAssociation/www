import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from 'components/Header';
import Section from 'components/Section';
import PageWithContents from 'components/PageWithContents';
import { SingleColumn } from 'components/Columns';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Provider as MobxProvider } from 'mobx-react';
import ToC from './toc';
import { GRAPHQL_URL } from './constants';
import authStore from './authStore';

const MarkdownPage = styled.div` 
  h1 + p > img {
    width: 100%;
    box-shadow: 0 1px 4px rgba(0,0,0,.6);
  }
`;

const apolloClient = new ApolloClient({
  uri: GRAPHQL_URL,
  request: async (operation) => {
    const token = localStorage.getItem('conf-token');
    if (token) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    }
  },
});

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
