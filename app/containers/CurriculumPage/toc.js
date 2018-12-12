import React from 'react';
import TableOfContents, { Entry } from 'components/TableOfContents';

const ToC = () => (
  <TableOfContents>
    <Entry to="/primers/1">What is Mormon Transhumanism?</Entry>
    <Entry to="/primers/2">What is the purpose of the Mormon Transhumanist Association?</Entry>
    <Entry to="/primers/3">Humanity+ and the Transhumanist Declaration</Entry>
    <Entry to="/primers/4">Exponential change</Entry>
    <Entry to="/primers/5">Implications of exponential technological trends for humanity</Entry>
    <Entry to="/primers/6">A Brief History of religious transhumanism</Entry>
    <Entry to="/primers/7">What is the role of Christ in transhumanism?</Entry>
  </TableOfContents>
);

export default ToC;
