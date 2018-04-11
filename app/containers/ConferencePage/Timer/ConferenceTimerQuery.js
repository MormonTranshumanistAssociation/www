import * as React from 'react';
import PropTypes from 'prop-types';
import { Query, compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { inject, observer } from 'mobx-react';
import _ from 'lodash';
import Loader from 'halogen/GridLoader';
import { CONFERENCE_ID } from '../constants';
import { Scheduler } from '../scheduler';
import PresentationTimer from './PresentationTimer';

const conferenceTimerQuery = gql`
  query ConferenceTimer($confId: ID!) {
    node(id: $confId) {
      ... on Conference {
        startAt
        activePresentation {
          id
        }
        presentations {
          edges {
            node {
              id
              ...PresentationTimerPresentation
              position
            }
          }
        }
        ...SchedulerConference
      }
    }
  }
  ${Scheduler.fragments.conference}
  ${PresentationTimer.fragments.presentation}
`;

const setActivePresentationMutation = gql`
  mutation SetActivePresentation($confId: ID!, $presentationId: ID!) {
    updateConference(input: { id: $confId, activePresentationId: $presentationId }) {
      changedConference {
        id
        activePresentation {
          id
        }
      }
    }
  }
`;

class ConferenceTimerQuery extends React.Component {
  render() {
    const { setActivePresentation } = this.props;
    return (
      <Query query={conferenceTimerQuery} variables={{ confId: CONFERENCE_ID }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader color="#525B3A" size="10px" />;
          if (error) return <p>Error</p>;

          const conference = data.node;
          if (!conference) {
            console.error(`No conference data for conference ${CONFERENCE_ID}`);
            return null;
          }

          const scheduler = new Scheduler({ conference });
          const presentations = scheduler.getDecoratedPresentations();
          const activePresentationId = _.get(conference, 'activePresentation.id');

          return this.props.children({ presentations, activePresentationId, data, setActivePresentation });
        }}
      </Query>
    );
  }
}

ConferenceTimerQuery.propTypes = {
  setActivePresentation: PropTypes.func,
  children: PropTypes.func,
};

export default compose(
  graphql(setActivePresentationMutation, {
    props: props => ({
      ...props,
      setActivePresentation: ({ presentationId }) =>
        props.mutate({
          variables: { confId: CONFERENCE_ID, presentationId },
          refetchQueries: [
            {
              query: conferenceTimerQuery,
              variables: { confId: CONFERENCE_ID },
            },
          ],
          // update: (store, { data: { updateConference } }) => {
          //   console.log('update');
          //   console.log({ updateConference });
          //   const { changedConference } = updateConference;
          //   console.log({ changedConference });
          //
          //   // Read the data from our cache for this query.
          //   const data = store.readQuery({ query: gql`
          //       query ConferenceTimer on
          //       node(id: )
          //     ` });
          //   // console.log({ data });
          //   // Add our comment from the mutation to the end.
          //   // console.log('mutation update', { data });
          //   // Write our data back to the cache.
          //   // store.writeQuery({ query: ConferenceTimerQuery, data });
          // },
        }),
    }),
  }),
  inject('authStore'),
  observer,
)(ConferenceTimerQuery);
