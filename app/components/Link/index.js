import React from 'react';
import { Link as RouterLink } from 'react-router';
import styled from 'styled-components';

const LinkStyler = styled.div`
  display: inline;
  & > a {
    text-decoration: none;
    color: inherit;
    font-weight: 400;
  }
  & > a:hover, & > a:hover span {
    text-decoration: underline;
  //  // For some reason changing the font weight (which doesn't actually change the font) seems to fix 
  //  // a bug in Chrome that prevents these styles from applying otherwise.
  //  color: rgba(0,0,0,1);
  }
`;

const Link = ({ to, href, target, children }) => (
  <LinkStyler>
    { to
      ? <RouterLink to={to} activeClassName="selectedLink">{children}</RouterLink>
      : <a href={href} target={target}>{children}</a>
    }
  </LinkStyler>
);
Link.propTypes = {
  to: React.PropTypes.string,
  href: React.PropTypes.string,
  children: React.PropTypes.any,
  target: React.PropTypes.string,
};

export default Link;
