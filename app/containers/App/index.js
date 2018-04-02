/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
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

export function App(props) {
  return props.children;
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
