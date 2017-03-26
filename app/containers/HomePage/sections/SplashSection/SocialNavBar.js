import React from 'react';
import styled from 'styled-components';
import Link from 'components/Link';

const NavBar = styled.nav`
  margin: 0.5em 0;
  color: rgba(29,32,21,.79);
  font-size: 1.2rem;
  font-weight: 400;
`;

const SocialNavLink = styled.div`
  display: inline-block;
  padding: 0 .8em;
  border-right: 1px solid;
  &:last-child {
    border-right: none;
  }
`;

const SocialNavBar = () => (
  <NavBar>
    <SocialNavLink><Link href="//www.facebook.com/transfigurism">Facebook</Link></SocialNavLink>
    <SocialNavLink><Link href="//twitter.com/transfigurism">Twitter</Link></SocialNavLink>
    <SocialNavLink><Link href="//www.youtube.com/user/transfigurism">YouTube</Link></SocialNavLink>
  </NavBar>
);

export default SocialNavBar;
