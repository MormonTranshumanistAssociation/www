import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gql from 'graphql-tag';

const Wrapper = styled.div`
  margin-bottom: 2em;
`;

const DisplayName = styled.h1`
`;

const Photo = styled.img`
  &:not([src]) {
    display: none;
  }
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
      presentations {
        edges {
          node {
            id
            title
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
