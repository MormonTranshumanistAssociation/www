/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';

const AppWrapper = styled.div`
  margin: 0;
  display: flex;
  min-height: 100vh;
  padding: 0;
  flex-direction: column;
  position: relative;
`;

const HubSpotCode = () => (
  <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/4347476.js"></script>
);

export function App(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s | Mormon Transhumanist Association"
        defaultTitle=""
        meta={[
          { name: 'description', content: 'Mormon Transhumanist Association is the world\'s largest advocacy network for ethical use of technology and religion to extend human abilities.' },
        ]}
      />
      {React.Children.toArray(props.children)}
      <Footer />
      <HubSpotCode />
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
