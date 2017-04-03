import styled from 'styled-components';
import { Link } from 'react-router';

const TableOfContents = styled.nav`
  max-width: 300px;
  text-align: left;
  border-left: 1px solid rgba(0,0,0,.2);
  list-style-type: none;
  padding: 0 14px;
`;

export const Entry = styled(Link)`
  display: block;
  text-indent: -1em;
  padding-left: 1em;
`;

export default TableOfContents;
