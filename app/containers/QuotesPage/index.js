import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Section from 'components/Section';
import PageWithContents from 'components/PageWithContents';
import { SingleColumn } from 'components/Columns';
import QuotesWrapper from './QuotesWrapper';

const QuotesPage = () => (
  <div>
    <Header />
    <article>
      <Helmet title="Quotes : " />
      <Section>
        <PageWithContents>
          <SingleColumn>
            <QuotesWrapper />
          </SingleColumn>
        </PageWithContents>
      </Section>
    </article>
  </div>
);

QuotesPage.propTypes = {
  children: React.PropTypes.any,
};

export default QuotesPage;
