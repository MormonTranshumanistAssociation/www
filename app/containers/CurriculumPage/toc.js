import React from 'react';
import TableOfContents, { Entry } from 'components/TableOfContents';

const ToC = () => (
  <TableOfContents>
    <Entry to="/primers/1">Primer 1</Entry>
    <Entry to="/primers/2">Primer 2</Entry>
  </TableOfContents>
);

export default ToC;
