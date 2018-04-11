import * as React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import _ from 'lodash';
import PresentationTimer from './PresentationTimer';
import { KeyCodes } from './constants';

class ConferenceTimer extends React.Component {
  state = {
    second: new Date().getTime() / 1000,
    presentations: null,
  };

  componentWillMount() {
    this.keyDownListener = document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDownListener);
  }
  handleKeyDown = event => {
    const { authStore } = this.props;
    console.log({ code: event.keyCode, B: KeyCodes.B });
    if (!authStore.token) {
      console.error('Not authenticated, ignoring key commands.');
    }
    switch (event.keyCode) {
      case KeyCodes.F: {
        console.log('Presentation advance (F)');
        this.handlePresentationAdvance();
        break;
      }
      case KeyCodes.B: {
        this.handlePresentationReverse();
        break;
      }
      default: {
        // ignored
      }
    }
  };

  handlePresentationAdvance = () => {
    console.log('handlePresentationAdvance');
    const { setActivePresentation, presentations, activePresentationId } = this.props;
    const currentIdx = _.findIndex(presentations, p => p.id === activePresentationId);
    let nextIdx;
    if (currentIdx === _.size(presentations) - 1) {
      nextIdx = null;
    } else if (currentIdx === -1) {
      nextIdx = 0;
    } else {
      nextIdx = currentIdx + 1;
    }
    const presentationId = nextIdx === null ? '' : presentations[nextIdx].id;
    console.log({ nextIdx, presentationId });
    setActivePresentation({ presentationId });
  };

  handlePresentationReverse = () => {
    console.log('handlePresentationAdvance');
    const { setActivePresentation, presentations, activePresentationId } = this.props;
    const currentIdx = _.findIndex(presentations, p => p.id === activePresentationId);
    let nextIdx;
    if (currentIdx === null || currentIdx === 0) {
      nextIdx = null;
    } else {
      nextIdx = currentIdx - 1;
    }
    const presentationId = nextIdx === null ? '' : presentations[nextIdx].id;
    console.log({ nextIdx, presentationId });
    setActivePresentation({ presentationId });
  };

  render() {
    const { presentations, activePresentationId } = this.props;
    const { second } = this.state;

    // if (!activePresentationId) {
    //   console.log('Updating active presentation', { activePresentationId });
    //   activePresentationId = _.get(presentations ,'[0].id');
    //   if (isManager) {
    //     setActivePresentation(activePresentationId);
    //   }
    // }
    const activePresentation = _.find(presentations, presentation => presentation.id === activePresentationId);

    // if (!activePresentation) {
    //   console.error('Could not find active presentation in query results', { activePresentation });
    //   return null;
    // }
    console.log('Active presentation', { activePresentation });

    //
    // Get the current presentation
    // - If no current presentation, show a splash screen
    // Display using present time
    // If duration has expired, show warning
    // If hasn't started yet, show time until start
    // Add global 'setup' time that indicates how much time to subtract from duration to allow
    // for setup for next speaker

    // ADMIN options:
    // If 'B' key is pressed, set selected presentation backward
    // If 'F' key is pressed, advanced selected presentation

    // If right arrow is pressed, advance time by 10 mins. If shift-right-arrow is pressed, advance by 1 hour
    // If left arrow is pressed, rewind time by 10 mins. If shift-left-arrow is press, rewind by 1 hour

    return <PresentationTimer onKeyDown={this.handleKeyDown} presentation={activePresentation} second={second} />;
  }
}

ConferenceTimer.propTypes = {
  setActivePresentation: PropTypes.func,
  authStore: PropTypes.object,
  presentations: PropTypes.arrayOf(Object),
  activePresentationId: PropTypes.string,
  // conference: PropTypes.object,
  // data: PropTypes.object,
};

export default inject('authStore')(observer(ConferenceTimer));
ƒ;
