import React from 'react';
import TableOfContents, { Entry } from 'components/TableOfContents';

const ToC = () => (
  <TableOfContents>
    <Entry to="/library">Library</Entry>
    <Entry to="/library/curriculum">Curriculum</Entry>
    <Entry to="/library/quotes">Quotes</Entry>
    <Entry to="/library/videos">Videos</Entry>
  </TableOfContents>
);

export default ToC;
