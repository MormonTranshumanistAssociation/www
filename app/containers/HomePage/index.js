/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import SplashSection from './sections/SplashSection';
import AffirmationSection from './sections/AffirmationSection';
import MandateSection from './sections/MandateSection';
import TheosisSection from './sections/TheosisSection';

export class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header menuOnly />
        <article>
          <Helmet
            title="Mormon Transhumanist Association"
            titleTemplate="%s"
            meta={[{ name: 'description', content: 'Official website of the Mormon Transhumanist Association' }]}
          />
          <div>
            <SplashSection />
            <AffirmationSection />
            <MandateSection />
            <TheosisSection />
          </div>
        </article>
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
};

export default HomePage;
