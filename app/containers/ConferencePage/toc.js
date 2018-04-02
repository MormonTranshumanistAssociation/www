import React from 'react';
import TableOfContents, { Entry } from 'components/TableOfContents';

const ToC = () => (
  <TableOfContents>
    <Entry to="/conf">Conference</Entry>
    <Entry to="/conf/schedule">Schedule</Entry>
    <Entry to="/conf/presenters">Presenters</Entry>
    <Entry to="/conf/timer">Timer</Entry>
  </TableOfContents>
);

export default ToC;
