import React from 'react';
import _ from 'lodash';
import MarkdownProfiles, { Title } from 'components/MarkdownProfiles';

const profilesReq = require.context('./profiles', true, /\S+\.md$/);

const Management = () => (
  <div>
    <Title>Management</Title>
    <MarkdownProfiles>
      {_.map(profilesReq.keys(), key => {
        const Profile = profilesReq(key).default;
        return <Profile key={key} />;
      })}
    </MarkdownProfiles>
  </div>
);

export default Management;
