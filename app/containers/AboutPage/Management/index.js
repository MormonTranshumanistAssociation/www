import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import H1 from 'components/H1';

const PageTitle = styled(H1)`
  margin-bottom: 1em;
`;

const Profiles = styled.div`
  h1 {
   font-size: 1.5em;
   line-height: 1.2em;
   margin: 0 0 0.2em 0;
  }
  h2 {
    font-size: 1em;
    line-height: 1em;
    margin: 0 0 1.25em 0;
  }
  img {
    float: left;
    margin: 0 20px 0 0;
    width: 128px;
    height: 160px;
  }
`;

const ProfileWrapper = styled.div`
  margin-bottom: 2em;
`;

const profilesReq = require.context('./profiles', true, /\S+\.md$/);
const Management = () => (
  <div>
    <PageTitle>Management</PageTitle>
    <Profiles>
      {
        _.map(profilesReq.keys(), (key) => {
          const Profile = profilesReq(key).default;
          return <ProfileWrapper key={key}><Profile /></ProfileWrapper>;
        })
      }
    </Profiles>
  </div>
);

export default Management;
