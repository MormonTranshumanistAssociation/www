import React from 'react';
import TableOfContents, { Entry } from 'components/TableOfContents';

const ToC = () => (
  <TableOfContents>
    <Entry to="/about">About</Entry>
    <Entry to="/about/faq">FAQ</Entry>
    <Entry to="/about/transhumanist-declaration">Transhumanist Declaration</Entry>
    <Entry to="/about/affirmation">Mormon Transumanist Affirmation</Entry>
    <Entry to="/about/management">Management</Entry>
    <Entry to="/about/board-of-directors">Board of Directors</Entry>
    <Entry to="/about/constitution">Constitution</Entry>
    <Entry to="/about/articles-of-incorporation">Articles of Incorporation</Entry>
  </TableOfContents>
);

export default ToC;
