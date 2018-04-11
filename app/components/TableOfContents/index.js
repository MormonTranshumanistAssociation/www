import * as React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router';

const Wrapper = styled.div`
  width: 264px;
  float: right;
  @media print {
    display: none;
  }
`;

const Nav = styled.nav`
  text-align: left;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  list-style-type: none;
  padding: 0 14px;
`;

export const EntryCss = css`
  display: block;
  text-indent: -1em;
  padding-left: 1em;
  padding-bottom: 0.4em;
  line-height: 1.33em;
  @media screen and (max-width: 672px) {
    line-height: 1.2em;
    padding-bottom: 0.4em;
  }
`;

export const Entry = styled(Link)`
  ${EntryCss};
`;

export const TableOfContents = props => (
  <Wrapper>
    <Nav>{props.children}</Nav>
  </Wrapper>
);
TableOfContents.propTypes = {
  children: PropTypes.any,
};
export default TableOfContents;
