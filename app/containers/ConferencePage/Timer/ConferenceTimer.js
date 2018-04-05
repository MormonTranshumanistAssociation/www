import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import MarkdownProfiles, { Title } from 'components/MarkdownProfiles';
import Loader from 'halogen/GridLoader';
import { CONFERENCE_ID } from '../constants';
import { Scheduler } from '../scheduler';
import PresentationTimer from './PresentationTimer';

const query = gql`
  query ConferenceTimer($confId: ID!) {
    node(id: $confId) {
      ... on Conference {
        startAt
        presentations {
          edges {
            node {
              ...PresentationTimerPresentation
              duration
              actualDuration
            }
          }
        }
      }
    }
  }
  ${Scheduler.fragments.conference}
  ${PresentationTimer.fragments.presentation}
`;

export default () => (
  <div>
    <Title>2018 Conference Schedule</Title>
    <MarkdownProfiles>
      <Query query={query} variables={{ confId: CONFERENCE_ID }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader color="#525B3A" size="10px" />;
          if (error) return <p>Error</p>;

          const conference = data.node;
          const scheduler = new Scheduler({ conference });
          const presentations = scheduler.getDecoratedPresentations();

          // TODO:
          // Get the current presentation, based on the current time
          // If in manual mode, wait for space bar before continuing to next presentation
          // Algorithm:
          // - Get list of presentations in order
          // - Compute current offset from conference start
          // - Find presentation with adjustedOffset/adjustedOffset + duration encloses current offset
          // - Render presentation timer
          // Manual mode:
          // - Instead of comparing with current time, use a query param to get the presentation to display
          // - On mount, select the requested presentation
          // - On new presentation, reset seconds
          const presentation = presentations[0];
          const second = 0;
          return (
            <PresentationTimer presentation={presentation} second={second} />
          );
        }}
      </Query>
    </MarkdownProfiles>
  </div>
);
