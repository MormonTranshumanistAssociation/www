import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/about">
            <FormattedMessage {...messages.about} />
          </HeaderLink>
          <HeaderLink to="/news">
            <FormattedMessage {...messages.news} />
          </HeaderLink>
          <HeaderLink to="/library">
            <FormattedMessage {...messages.library} />
          </HeaderLink>
          <HeaderLink to="/blog">
            <FormattedMessage {...messages.blog} />
          </HeaderLink>
          <HeaderLink to="/meetup">
            <FormattedMessage {...messages.meetup} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
