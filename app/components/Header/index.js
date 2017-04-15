import React from 'react';
import { FormattedMessage } from 'react-intl';
import Link from 'components/Link';
import Button from 'components/Button';
import NavBar from './NavBar';
import messages from './messages';
import Banner from './Banner';

const Header = (props) => (
  <div>
    <NavBar>
      <Link data-tag="Link" to="/"><FormattedMessage {...messages.home} /></Link>
      <Link to="/about"><FormattedMessage {...messages.about} /></Link>
      <Link to="/curriculum"><FormattedMessage {...messages.curriculum} /></Link>
      <Link to="/quotes"><FormattedMessage {...messages.quotes} /></Link>
      <Link href="http://transfigurist.org"><FormattedMessage {...messages.blog} /></Link>
      <Link to="/meetup"><FormattedMessage {...messages.meetup} /></Link>
      <Button><Link to="/join"><FormattedMessage {...messages.join} /></Link></Button>
    </NavBar>
    { !props.menuOnly && <Banner /> }
  </div>
);
Header.propTypes = {
  menuOnly: React.PropTypes.bool,
};

export default Header;
