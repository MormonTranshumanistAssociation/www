import * as React from 'react';
import PropTypes from 'prop-types';
import TableOfContents, { Entry } from 'components/TableOfContents';

const ToC = ({ authStore }) => (
  <TableOfContents>
    <Entry to="/conf/2018">2018 Conference</Entry>
  </TableOfContents>
);
ToC.propTypes = {
  authStore: PropTypes.object,
};

export default ToC;
