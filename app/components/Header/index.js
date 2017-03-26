import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import NavBar from './NavBar';
import Link from 'components/Link';
import messages from './messages';

const JoinButton = styled.div`
  display: inline-block;
  background: hsla(52,11%,54%, .9);
  border-radius: 2em;
  color: #fff;
  margin: 0 1em;
  font-weight: 700;
  padding: 0;
  &:hover {
   background: hsl(52,11%,40%);
  }
  a {
    color: #fff;
    padding: 0 1rem;
  }
`;

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar>
          <Link data-tag="Link" to="/"><FormattedMessage {...messages.home} /></Link>
          <Link href="/about"><FormattedMessage {...messages.about} /></Link>
          <Link to="/news"><FormattedMessage {...messages.news} /></Link>
          <Link to="/library"><FormattedMessage {...messages.library} /></Link>
          <Link to="/blog"><FormattedMessage {...messages.blog} /></Link>
          <Link to="/meetup"><FormattedMessage {...messages.meetup} /></Link>
          <JoinButton><Link to="/join"><FormattedMessage {...messages.join} /></Link></JoinButton>
        </NavBar>
      </div>
    );
  }
}

export default Header;
