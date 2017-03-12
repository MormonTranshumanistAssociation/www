/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import SplashSection from './sections/SplashSection';
import AffirmationSection from './sections/AffirmationSection';
import MandateSection from './sections/MandateSection';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  render() {
    return (
      <article>
        <Helmet
          title="Home"
          meta={[
            { name: 'description', content: 'Official website of the Mormon Transhumanist Association' },
          ]}
        />
        <div>
          <SplashSection />
          <AffirmationSection />
          <MandateSection />
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
};

export default HomePage;
