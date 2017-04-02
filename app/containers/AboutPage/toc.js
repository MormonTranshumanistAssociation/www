import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const Wrapper = styled.nav`
  max-width: 300px;
  text-align: left;
  border-left: 1px solid rgba(0,0,0,.2);
  list-style-type: none;
  padding: 0 14px;
`;

const Entry = styled(Link)`
  display: block;
  text-indent: -1em;
  padding-left: 1em;
`;

const ToC = () => (
  <Wrapper>
    <Entry to="/about">About</Entry>
    <Entry to="/about/transhumanist-declaration">Transhumanist Declaration</Entry>
    <Entry to="/about/mormon-transhumanist-affirmation">Mormon Transumanist Affirmation</Entry>
    <Entry to="/about/management">Management</Entry>
  </Wrapper>
);


export default ToC;
