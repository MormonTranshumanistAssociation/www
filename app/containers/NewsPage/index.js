import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Section from 'components/Section';
import PageWithContents from 'components/PageWithContents';
import { SingleColumn } from 'components/Columns';

const NewsPage = (props) => (
  <div>
    <Header />
    <Helmet title="News" />
    <Section>
      <PageWithContents>
        <SingleColumn>
          <h1>News</h1>
          {props.children}
        </SingleColumn>
      </PageWithContents>
    </Section>
  </div>
);
NewsPage.propTypes = {
  children: React.PropTypes.any,
};

export default NewsPage;
