/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Section from 'components/Section';
import { SingleColumn } from 'components/Columns';
import PageWithContents from 'components/PageWithContents';
import ToC from './toc';

const AboutPage = props => (
  <div>
    <Header />
    <article>
      <Helmet title="About" />
      <Section>
        <PageWithContents>
          <ToC />
          <SingleColumn>{props.children}</SingleColumn>
        </PageWithContents>
      </Section>
    </article>
  </div>
);

AboutPage.propTypes = {
  children: React.PropTypes.any,
};

export default AboutPage;
