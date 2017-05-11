import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Section from 'components/Section';
import PageWithContents from 'components/PageWithContents';
import { SingleColumn } from 'components/Columns';

const JoinPage = (props) => (
  <div>
    <Header />
    <article>
      <Helmet title="Join" />
      <Section>
        <PageWithContents>
          <SingleColumn>
            {props.children}
          </SingleColumn>
        </PageWithContents>
      </Section>
    </article>
  </div>
);
JoinPage.propTypes = {
  children: React.PropTypes.any,
};

export default JoinPage;
