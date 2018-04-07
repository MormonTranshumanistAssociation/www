import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider as MobxProvider } from 'mobx-react';
import ConferenceTimer from './ConferenceTimer';
import authStore from '../authStore';
import apolloClient from '../apolloClient';
import ConferenceTimerQuery from './ConferenceTimerQuery';

export default () => (
  <ApolloProvider client={apolloClient}>
    <MobxProvider authStore={authStore}>
      <ConferenceTimerQuery>
        {
          (props) => <ConferenceTimer {...props} />
        }
      </ConferenceTimerQuery>
    </MobxProvider>
  </ApolloProvider>
);
