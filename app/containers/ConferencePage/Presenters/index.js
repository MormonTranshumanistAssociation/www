import * as React from 'react';
import _ from 'lodash';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { filter } from 'graphql-anywhere';
import styled from 'styled-components';
import Loader from 'halogen/GridLoader';
import MarkdownProfiles, { Title } from 'components/MarkdownProfiles';
import Presenter from './Presenter';
import { CONFERENCE_ID } from '../constants';
import { scrollToLocationHash, toSafeId } from '../helpers';

const query = gql`
  query ConferencePresenters($confId: ID!) {
    viewer {
      allPresenters(
        where: { presentations: { conference: { id: { eq: $confId } } } } 
        orderBy: { field: displayName, direction: ASC }
      ) {
        edges {
          node {
            id
            displayName
            ...PresenterPresenter 
          }
        }
      }
    }
  }
  ${Presenter.fragments.presenter}
`;

const ToCWrapper = styled.div`
  margin: 2em 0 3em 0;
  ul {
    display: inline-block;
    vertical-align: top;
    width: calc(400px / 2)
  }
  ul + div + h3 {
    margin-top: 2rem;
  }
`;

const ToC = styled.ul`
`;

const ToCItem = styled.li`
`;

export default () => (
  <div>
    <Title>2018 Conference Presenters</Title>
    <MarkdownProfiles>
      <Query query={query} variables={{ confId: CONFERENCE_ID }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader color="#525B3A" size="10px" />;
          if (error) return <p>Error</p>;

          scrollToLocationHash();
          const presenters = _.map(_.get(data, 'viewer.allPresenters.edges', []), 'node');
          const tocHalfIdx = Math.ceil(presenters.length / 2);
          const tocPart1 = presenters.slice(0, tocHalfIdx);
          const tocPart2 = presenters.slice(tocHalfIdx, presenters.length);
          const tocParts = [tocPart1, tocPart2];

          return (
            <div>
              <ToCWrapper>
                {
                  _.map(tocParts, (tocPart, index) => (
                    <ToC key={index}>
                      {
                        _.map(tocPart, (presenter) => (
                          <ToCItem key={presenter.id}>
                            <a href={`#${toSafeId(presenter.displayName)}`}>{presenter.displayName}</a>
                          </ToCItem>
                        ))
                      }
                    </ToC>
                  ))
                }
              </ToCWrapper>
              {
                _.map(presenters, (presenter) => (
                  <Presenter key={presenter.id} presenter={filter(Presenter.fragments.presenter, presenter)} />
                ))
              }
            </div>);
        }}
      </Query>
    </MarkdownProfiles>
  </div>
);
