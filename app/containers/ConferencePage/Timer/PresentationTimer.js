import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';
import gql from 'graphql-tag';

const Wrapper = styled.div`
  font-family: Abel, 'Open Sans', Helvetica, Arial, sans-serif;
  color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  // background: linear-gradient(to right, hsl(130,82%,24%) 50%, hsl(38,88%,41%) 80%, hsl(13,100%,50%));
`;

const ProgressBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: background-color 1s;
`;

const warningAnimation = keyframes`
  from { 
    opacity: 0.8; 
  }
  to { 
    opacity: 0; 
  }
`;

const FlashingCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  ${(p) => p.animate ? `animation: ${warningAnimation} 0.25s alternate-reverse infinite;` : 'opacity: 0;'}
`;

const ProgressCover = styled.div`
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: black;
  transition: width 1s, height 1s;
  transition-timing-function: linear;
  //display: none;
`;

const PresenterImage = styled.img`
  width: 60vmin;
  height: 60vmin;
  flex: none;
  border-radius: 1vmin;
  object-fit: cover;
  z-index: 1;
  transform: translate(0, -10vh);
  box-shadow: 0 0.5vmin 2vmin 0.5vmin rgba(0,0,0,.3);
`;

const PresenterName = styled.div`
  position: absolute;
  bottom: 5vh;
  left: 0;
  right: 0;
  z-index: 2;
  font-size: 20vmin;
  text-align: center;
  line-height: 1;
  letter-spacing: -1.2vmin;
`;

const TimerMinutes = styled.div`
  font-size: 20vmin;
  position: absolute;
  top: 1vmin;
  right: 10vmin;
  z-index: 2;
`;

const timeUpAnimation = keyframes`
  from { 
    transform: scale3d(1,1,1);
    opacity: 1;
  }
  to { 
    transform: scale3d(4,4,1);
    opacity: 0;
  }
`;

const TimeUpMessage = styled.div`
  position: absolute;
  top: 20vmin;
  left: 0;
  right: 0;
  white-space: nowrap;
  z-index: 4;
  font-size: 20vmin;
  font-weight: bold;
  text-transform: uppercase;
  transform-origin: center center;
  letter-spacing: -1.2vmin;
  text-align: center;
  animation: ${timeUpAnimation} 1s ease-in infinite;
`;

class TimerPage extends React.PureComponent {

  state = {
    startTime: new Date(),
    seconds: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  tick = () => {
    const seconds = (new Date() - this.state.startTime) / 1000;
    this.setState({ seconds });
  };

  render() {
    const { seconds } = this.state;
    const {
      ParticlesComponent,
      presentation = { duration: 1, presenter: { displayName: 'Carl Youngblood' } },
    } = this.props;
    const { duration } = presentation;

    const WARN_SECS = 30;
    const FLASH_SECS = 10;

    const progress = Math.min(1, seconds / (duration * 60));
    const secondsLeft = duration * (1 - progress) * 60;
    const animate = secondsLeft * 60 < FLASH_SECS;

    const percentRemaining = 100 - Math.floor(100 * progress);
    const GREEN = 126;
    const RED = 9;
    const durationSeconds = duration * 60;
    const warnSeconds = ((seconds - (durationSeconds - WARN_SECS)) / (durationSeconds - WARN_SECS)) * WARN_SECS;
    const warningTime = Math.min(WARN_SECS, (secondsLeft > WARN_SECS) ? 0 : warnSeconds);
    const hue = GREEN - Math.floor((GREEN - RED) * (warningTime / WARN_SECS));
    const brightness = 25 + Math.floor((50 - 25) * progress);
    const color = `hsl(${hue}, 100%, ${brightness}%)`;

    return (
      <Wrapper>
        <ProgressBackground style={{ backgroundColor: color }} />
        {ParticlesComponent}
        <ProgressCover progress={progress} style={{ height: `${percentRemaining}%` }} />
        <FlashingCover animate={animate} />
        {!!secondsLeft && <PresenterImage src="/assets/presenters/carl-youngblood.png" />}
        <PresenterName>{_.get(presentation, 'presenter.displayName')}</PresenterName>
        {!!secondsLeft && <TimerMinutes>{Math.floor(secondsLeft)}</TimerMinutes>}
        {!secondsLeft && <TimeUpMessage>{"Time's up!"}</TimeUpMessage>}
      </Wrapper>
    );
  }
}

TimerPage.propTypes = {
  presentation: PropTypes.object,
  ParticlesComponent: PropTypes.node,
};

/**
 * Wrapper that passes ParticlesComponent so that particles canvas doesn't get re-rendered every time the timer
 * component is updated.
 */
const PresentationTimer = ({ presentation }) => (
  <TimerPage
    ParticlesComponent={<Particles
      width="100%"
      height="100%"
      style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
      params={{
        particles: {
          number: {
            value: 100,
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 0.1 },
          },
          size: {
            value: 5,
            random: true,
            anim: { enable: true, speed: 0.5 },
          },
          line_linked: {
            enable: false,
          },
          move: {
            speed: 2,
            out_mode: 'bounce',
            bounce: true,
            random: true,
          },
        },
      }}
    />}
    presentation={presentation}
  />
);
PresentationTimer.propTypes = {
  presentation: PropTypes.object,
};

PresentationTimer.fragments = {
  presentation: gql`
    fragment PresentationTimerPresentation on Presentation {
      duration,
      presenter {
        displayName
      }
    }
  `,
};


export default PresentationTimer;
