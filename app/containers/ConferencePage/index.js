import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from 'components/Header';
import Section from 'components/Section';
import PageWithContents from 'components/PageWithContents';
import { SingleColumn } from 'components/Columns';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import ToC from './toc';
import { GRAPHQL_URL } from './constants';

const MarkdownPage = styled.div` 
  h1 + p > img {
    width: 100%;
    box-shadow: 0 1px 4px rgba(0,0,0,.6);
  }
`;

const apolloClient = new ApolloClient({ uri: GRAPHQL_URL });


const ConferencePage = (props) => (
  <ApolloProvider client={apolloClient}>
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
  </ApolloProvider>
);
ConferencePage.propTypes = {
  children: React.PropTypes.any,
};

export default ConferencePage;
