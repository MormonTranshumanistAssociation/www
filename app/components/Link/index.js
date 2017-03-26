import React from 'react';
import { Link as RouterLink } from 'react-router';
import styled from 'styled-components';

const LinkStyler = styled.div`
  display: inline-block;
  & > a {
    text-decoration: none;
    color: inherit;
  }
  & > a:hover, & > a:hover span {
    text-decoration: underline;
    // For some reason changing the font weight (which doesn't actually change the font) seems to fix 
    // a bug in Chrome that prevents these styles from applying otherwise. 
    font-weight: 300;   
  }
`;

const Link = ({ to, href, children }) => (
  <LinkStyler>
    { to ? <RouterLink to={to}>{children}</RouterLink> : <a href={href}>{children}</a> }
  </LinkStyler>
);
Link.propTypes = {
  to: React.PropTypes.string,
  href: React.PropTypes.string,
  children: React.PropTypes.any,
};

export default Link;
