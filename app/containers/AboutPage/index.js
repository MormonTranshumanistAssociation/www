/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Section from 'components/Section';
import SectionContent from 'components/SectionContent';
import { SingleColumn } from 'components/Columns';
import IndexPage from './markdown/index.md';

export class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <article>
          <Helmet title="About" />
          <Section>
            <SectionContent>
              <SingleColumn>
                <IndexPage />
              </SingleColumn>
            </SectionContent>
          </Section>
        </article>
      </div>
    );
  }
}

AboutPage.propTypes = {
  loading: React.PropTypes.bool,
};

export default AboutPage;
