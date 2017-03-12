import React from 'react';
import styled from 'styled-components';
import A from 'components/A';

const NavBar = styled.nav`
  margin: 0.5em 0;
`;

const SocialNavLink = styled(A)`
  color: rgba(29,32,21,.79);
  font-size: 1.2rem;
  font-weight: 400;
  text-decoration: none;
  padding: 0 .8em;
  border-right: 1px solid;
  
  &:last-child {
    border-right: none;
  }
  &:hover {
    text-decoration: underline;
    color: inherit;
  }
`;

const SocialNavBar = () => (
  <NavBar>
    <SocialNavLink href="//facebook.com/transfigurism">Facebook</SocialNavLink>
    <SocialNavLink href="//twitter.com/transfigurism">Twitter</SocialNavLink>
    <SocialNavLink href="//youtube.com/transfigurism">YouTube</SocialNavLink>
  </NavBar>
);

export default SocialNavBar;
