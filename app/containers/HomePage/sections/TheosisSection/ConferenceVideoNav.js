import React from 'react';
import styled from 'styled-components';
import YouTubePlayer from 'components/YouTubePlayer';


const VideoWrapper = styled.div`
  width: 200px;
  margin: 0 1em;
  display: inline-block;
  &:first-child {
    margin-left: 2em;
  }
  &:last-child {
    margin-right: 2em;
  }
`;

const NavBar = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
  padding: 1em 0;
  margin-top: 1em;
`;

const VideoThumb = ({ videoId }) => (
  <VideoWrapper><YouTubePlayer videoId={videoId} modal hiddenOverlay /></VideoWrapper>
);
VideoThumb.propTypes = { videoId: React.PropTypes.string.isRequired };


const ConferenceVideoNav = () => (
  <NavBar
    innerRef={
      (c) => {
        if (c && c.scrollLeft === 0) {
          c.scrollLeft = 100; // eslint-disable-line no-param-reassign
        }
      }
    }
  >
    <VideoThumb videoId="B14yKHwe9HU" />
    <VideoThumb videoId="8YyImflOFA4" />
    <VideoThumb videoId="B14yKHwe9HU" />
    <VideoThumb videoId="8YyImflOFA4" />
    <VideoThumb videoId="B14yKHwe9HU" />
    <VideoThumb videoId="8YyImflOFA4" />
  </NavBar>
);

export default ConferenceVideoNav;
