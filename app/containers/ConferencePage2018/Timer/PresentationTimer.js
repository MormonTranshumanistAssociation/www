import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';
import gql from 'graphql-tag';
import splashImage from './assets/splash.jpg';
import splashBackgroundImage from './assets/splash-background.jpg';

const Wrapper = styled.div`
  font-family: Abel, 'Open Sans', Helvetica, Arial, sans-serif;
  color: white;
  z-index: 1000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

const SplashBackground = styled.img`
  object-fit: cover;
  opacity: 0.6;
  position: fixed;
  width: 100vw;
  height: 100vh;
`;
const SplashImage = styled.img`
  position: absolute;
  width: 90vw;
  left: 50vw;
  top: 50vh;
  transform: translate(-50%, -50%);
  height: auto;
  z-index: 1;
  border: 5px solid rgb(255, 133, 5);
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
  ${p => (p.animate ? `animation: ${warningAnimation} 0.25s alternate-reverse infinite;` : 'opacity: 0;')};
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
  box-shadow: 0 0.5vmin 2vmin 0.5vmin rgba(0, 0, 0, 0.3) !important;
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

const TimeRemaining = styled.div`
  font-family: sans-serif;
  font-size: 30vmin;
  position: absolute;
  top: 1vh;
  right: 4vw;
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
const TimeRow = styled.div`
  display: inline-block;
  text-align: right;
  margin: 0;
  padding: 0;
  line-height: 1;
`;

const flashingTimeSeparatorAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const FlashingTimeUnit = styled.span`
  &::before {
    content: ':';
    animation: ${flashingTimeSeparatorAnimation} 0.5s alternate infinite;
  }
`;

function formatHours(seconds) {
  const sec = Math.max(0, seconds);
  const h = Math.floor(sec / 3600);
  return h || '';
}

function formatMinutes(seconds) {
  const sec = Math.max(0, seconds);
  const H = formatHours(sec);
  const m = Math.floor((sec % 3600) / 60);
  let M = m || '';
  if (H && m < 10) {
    M = `0${m}`;
  }
  return M;
}

function formatSeconds(seconds) {
  const sec = Math.max(0, seconds);
  const s = Math.floor(sec % 60);
  return s > 9 ? s : `0${s}`;
}

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
    const { ParticlesComponent, presentation } = this.props;

    // console.log('render', { presentation });
    const { duration } = presentation;
    const durationSeconds = duration * 60;

    // fades from green to red over final portion of time that is equal to WARN_SECS
    // (lesser of 3 mins or 10% of duration)
    const WARN_SECS = Math.min(180, 0.1 * durationSeconds);
    // flashes background over final portion of time that is equal to FLASH_SECS
    // (lesser of 30 secs or 5% of duration)
    const FLASH_SECS = Math.min(30, 0.05 * durationSeconds);

    const progress = Math.min(1, seconds / durationSeconds);
    const secondsLeft = duration * (1 - progress) * 60;
    const animate = secondsLeft < FLASH_SECS;

    const percentRemaining = 100 - Math.floor(100 * progress);
    const GREEN = 126;
    const RED = 9;
    const inWarningSeconds = Math.max(0, WARN_SECS - secondsLeft);
    const hue = GREEN - Math.floor((GREEN - RED) * (inWarningSeconds / WARN_SECS));
    const brightness = 25 + Math.floor((50 - 25) * progress);
    const color = `hsl(${hue}, 100%, ${brightness}%)`;

    const H = formatHours(secondsLeft);
    const M = formatMinutes(secondsLeft);
    const S = formatSeconds(secondsLeft);

    const imageUrl = _.get(presentation, 'presenter.photoUrl');
    const presenterName = _.get(presentation, 'presenter.displayName');
    const presentationTitle = presentation.title;

    return (
      <Wrapper>
        <ProgressBackground style={{ backgroundColor: color }} />
        {ParticlesComponent}
        <ProgressCover progress={progress} style={{ width: `${percentRemaining}%` }} />
        <FlashingCover animate={animate} />
        {!!secondsLeft && imageUrl && <PresenterImage src={imageUrl} />}
        <PresenterName>{presenterName || presentationTitle}</PresenterName>
        {!!secondsLeft && (
          <TimeRemaining>
            <TimeRow>
              {H} {H ? <FlashingTimeUnit>{M}</FlashingTimeUnit> : M}
            </TimeRow>
            <TimeRow>
              <FlashingTimeUnit>{S}</FlashingTimeUnit>
            </TimeRow>
          </TimeRemaining>
        )}
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
const PresentationTimer = ({ presentation }) => {
  const ParticlesComponent = (
    <Particles
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
    />
  );
  if (!presentation) {
    return (
      <Wrapper>
        <ProgressBackground style={{ backgroundColor: 'white' }}>
          <SplashBackground src={splashBackgroundImage} />
          {ParticlesComponent}
          <SplashImage src={splashImage} />
        </ProgressBackground>
      </Wrapper>
    );
  }
  return <TimerPage ParticlesComponent={ParticlesComponent} presentation={presentation} />;
};

PresentationTimer.propTypes = {
  presentation: PropTypes.object,
};

PresentationTimer.fragments = {
  presentation: gql`
    fragment PresentationTimerPresentation on Presentation {
      duration
      title
      presenter {
        displayName
        photoUrl
      }
    }
  `,
};

export default PresentationTimer;
