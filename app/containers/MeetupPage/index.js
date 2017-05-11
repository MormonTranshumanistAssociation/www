import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Section from 'components/Section';
import PageWithContents from 'components/PageWithContents';
import { SingleColumn } from 'components/Columns';

const MeetupPage = (props) => (
  <div>
    <Header />
    <article>
      <Helmet title="Meetup : " />
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
MeetupPage.propTypes = {
  children: React.PropTypes.any,
};

export default MeetupPage;
