import * as React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styled from 'styled-components';
import gql from 'graphql-tag';
import Link from 'components/Link';

const Wrapper = styled.div`
  margin-bottom: 2.5em;
  a {
    color: #659401 !important;
  }
`;

const DisplayName = styled.h1`
`;

const PresentationName = styled.h2`
  line-height: 1.35 !important;
  font-style: italic;
  margin: 0 0 8px 0 !important;
  color: #659401 !important;
`;

const Photo = styled.img`
  &:not([src]) {
    display: none;
  }
  margin-bottom: 4px;
  height: 160px;
  width: 128px;
`;

const Bio = styled.p`
`;

const EmptyPhoto = styled.div`
  height: 160px;
  width: 128px;
  background: #eee;
  float: left;
  margin: 0 20px 0 0;
`;

const ClearFix = styled.div`
  clear: both;
`;

const Presenter = ({ presenter }) => (
  <Wrapper id={`${encodeURIComponent(presenter.displayName)}`}>
    {presenter.photoUrl ? <Photo src={presenter.photoUrl} alt={presenter.displayName} /> : <EmptyPhoto />}
    <DisplayName>{presenter.displayName}</DisplayName>
    {
      _.map(_.get(presenter, 'presentations.edges'), (edge) => (
        <Link key={edge.node.id} to={`/conf/schedule#${edge.node.id}`}>
          <PresentationName>{edge.node.title}</PresentationName>
        </Link>
      ))
    }
    <Bio>{presenter.bio}</Bio>
    <ClearFix />
  </Wrapper>
);

Presenter.propTypes = {
  presenter: PropTypes.object,
};

Presenter.fragments = {
  presenter: gql`
    fragment PresenterPresenter on Presenter {
      id
      presentations(orderBy: {field: position, direction: ASC}) {
        edges {
          node {
            id
            title
            position
          }
        }
      }
      displayName
      bio
      email
      photoUrl
    }
  `,
};

export default Presenter;
