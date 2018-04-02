import * as React from 'react';
import _ from 'lodash';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import MarkdownProfiles, { Title } from 'components/MarkdownProfiles';
import Presentation from './Presentation';
import { CONFERENCE_ID } from '../constants';
import { Scheduler } from '../scheduler';

const query = gql`
  query ConferencePresentations($confId: ID!) {
    node(id: $confId) {
      ... on Conference {
        presentations {
          edges {
            node {
              ...PresentationPresentation
            }
          }
        }
        ...SchedulerConference
      }
    }
  }
  ${Scheduler.fragments.conference}
  ${Presentation.fragments.presentation}
`;

export default () => (
  <div>
    <Title>2018 Conference Schedule</Title>
    <MarkdownProfiles>
      <Query query={query} variables={{ confId: CONFERENCE_ID }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          const conference = data.node;
          const scheduler = new Scheduler({ conference });
          const presentations = scheduler.getDecoratedPresentations();
          return (
            <div>
              {
                _.map(presentations, (presentation) => (
                  <Presentation key={presentation.id} presentation={presentation} />
                ))
              }
            </div>);
        }}
      </Query>
    </MarkdownProfiles>
  </div>
);
