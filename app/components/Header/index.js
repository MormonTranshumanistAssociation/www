import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import Link from 'components/Link';
import NavBar from './NavBar';
import messages from './messages';

const JoinButton = styled.div`
  display: inline-block;
  background: hsla(52,11%,44%, .8);
  border-radius: 2em;
  color: #fff;
  margin: 0 1em;
  font-weight: 500;
  padding: 0 0 0 0;
  &:hover {
    background: hsla(52,11%,44%, 1);
  }
  a {
    font-family: 'Abel', Heletica, sans-serif;
    letter-spacing: normal;
    font-size: 14px;
    text-transform: none;
    color: #fff;
    padding: 0 1em;
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
          <Link href="//transfigurist.org"><FormattedMessage {...messages.blog} /></Link>
          <Link to="/meetup"><FormattedMessage {...messages.meetup} /></Link>
          <JoinButton><Link to="/join"><FormattedMessage {...messages.join} /></Link></JoinButton>
        </NavBar>
      </div>
    );
  }
}

export default Header;
