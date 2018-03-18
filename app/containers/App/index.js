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
// import runtime from 'offline-plugin/runtime';

// // Automatic ServiceWorker updates
// // see https://github.com/NekR/offline-plugin/blob/master/docs/updates.md
// runtime.install({
//   onUpdating: () => {
//     // console.log('SW Event:', 'onUpdating');
//   },
//   onUpdateReady: () => {
//     // console.log('SW Event:', 'onUpdateReady');
//     // Tells to new SW to take control immediately
//     runtime.applyUpdate();
//   },
//   onUpdated: () => {
//     // console.log('SW Event:', 'onUpdated');
//     // Reload the webpage to load into the new version
//     window.location.reload();
//   },
//
//   onUpdateFailed: () => {
//     // console.log('SW Event:', 'onUpdateFailed');
//   },
// });
//
// // clear all SW caches
// caches.keys().then((cs) => cs.forEach( (c) => caches.delete(c)));


const AppWrapper = styled.div`
  margin: 0;
  display: flex;
  min-height: 100vh;
  padding: 0;
  flex-direction: column;
  position: relative;
`;

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
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
