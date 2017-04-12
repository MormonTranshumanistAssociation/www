import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import Link from 'components/Link';
import NavBar from './NavBar';
import messages from './messages';
import Banner from './Banner';

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


const Header = (props) => (
  <div>
    <NavBar>
      <Link data-tag="Link" to="/"><FormattedMessage {...messages.home} /></Link>
      <Link to="/about"><FormattedMessage {...messages.about} /></Link>
      <Link to="/curriculum"><FormattedMessage {...messages.curriculum} /></Link>
      <Link to="/quotes"><FormattedMessage {...messages.quotes} /></Link>
      <Link href="http://transfigurist.org"><FormattedMessage {...messages.blog} /></Link>
      <Link to="/meetup"><FormattedMessage {...messages.meetup} /></Link>
      <JoinButton><Link to="/join"><FormattedMessage {...messages.join} /></Link></JoinButton>
    </NavBar>
    { !props.menuOnly && <Banner /> }
  </div>
);
Header.propTypes = {
  menuOnly: React.PropTypes.bool,
};

export default Header;
