/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from 'components/Header';
import Section from 'components/Section';
import SectionContent from 'components/SectionContent';
import { SingleColumn } from 'components/Columns';
import ToC from './toc';

const PageWithContents = styled(SectionContent)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: flex-start;
`;

export class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <article>
          <Helmet title="About" />
          <Section>
            <PageWithContents>
              <div><ToC /></div>
              <SingleColumn>
                {this.props.children}
              </SingleColumn>
            </PageWithContents>
          </Section>
        </article>
      </div>
    );
  }
}

AboutPage.propTypes = {
  children: React.PropTypes.any,
};

export default AboutPage;
