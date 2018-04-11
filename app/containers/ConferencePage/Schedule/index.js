import * as React from 'react';
import _ from 'lodash';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import MarkdownProfiles, { Title } from 'components/MarkdownProfiles';
import Loader from 'halogen/GridLoader';
import Presentation from './Presentation';
import { CONFERENCE_ID } from '../constants';
import { Scheduler } from '../scheduler';
import { scrollToLocationHash } from '../helpers';

const PrintOnly = styled.div`
  display: none;
  @media print {
    display: flex;
    justify-content: space-between;
    margin: -24px 0 24px 0;
    padding: 0;
    border-radius: 2px;
    font-size: 0.9em;
    color: #659400;
    line-height: 1.2;
    div {
      margin: 0;
      padding: 0;
    }
  }
`;

const ScreenOnly = styled.div`
  margin: -18px 0 24px 0;
  padding: 0;
  font-size: 0.9em;
  line-height: 1.2;
  > div {
    display: inline-block;
    margin: 0 1em 0 0;
    div {
      border-radius: 2px;
      display: inline-block;
      padding: 0.2em 1em;
      background-color: rgba(101, 148, 0, 0.15);
      b,
      a {
        color: #659400;
      }
    }
    #twitter-link {
      background-color: #1da1f2;
      &,
      a {
        color: #fff;
      }
    }
    #facebook-link {
      background-color: #4267b2;
      &,
      a {
        color: #fff;
      }
    }
  }
  @media print {
    display: none;
  }
`;

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
    <PrintOnly>
      <div>Join us online at https://transfigurism.org/conf</div>
    </PrintOnly>
    <ScreenOnly>
      <div>
        <div id="twitter-link">
          <a href="https://twitter.com/hashtag/mtaconf">#mtaconf</a>
        </div>
      </div>
      <div>
        <div id="facebook-link">
          <a href="https://www.facebook.com/events/158279478213858/">Facebook</a>
        </div>
      </div>
    </ScreenOnly>
    <MarkdownProfiles>
      <Query query={query} variables={{ confId: CONFERENCE_ID }} pollInterval={10000}>
        {({ loading, error, data }) => {
          if (loading) return <Loader color="#525B3A" size="10px" />;
          if (error) return <p>Error</p>;

          scrollToLocationHash();

          const conference = data.node;
          const scheduler = new Scheduler({ conference });
          const presentations = scheduler.getDecoratedPresentations();
          return (
            <div>
              {_.map(presentations, presentation => <Presentation key={presentation.id} presentation={presentation} />)}
            </div>
          );
        }}
      </Query>
    </MarkdownProfiles>
  </div>
);
