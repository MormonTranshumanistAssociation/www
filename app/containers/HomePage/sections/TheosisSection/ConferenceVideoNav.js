import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import YouTubePlayer from 'components/YouTubePlayer';
import YouTubeLogo from './you_tube_logo.png';
import messages from './messages';

const NavBar = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
  padding: 1em 0;
  margin: 1em 0 -1em 0;
`;

const VideoWrapper = styled.div`
  width: 200px;
  margin: 0 1em;
  display: inline-block;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid rgba(0,0,0,.1);
  position: relative;
  &:first-child {
    margin-left: 2em;
  }
  &:last-child {
    margin-right: 2em;
  }
`;

const MoreVideosLinkImage = styled.img`
  background-size: contain;
  margin: auto auto;
  width: 100%;
  height: 110px;
  transition: .2s all;
  &:hover {
    background: rgba(0,0,0,.1);
  }
`;

const MoreVideosLinkText = styled.p`
  top: 0;
  position: absolute;
  width: 100%;
  text-align: center;
  padding: 0;
  margin-top: 10px;
  font-size: 12px;
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
    <VideoThumb videoId="ybXOTs1GA5E" />
    <VideoThumb videoId="D9i9RJEfHUg" />
    <VideoThumb videoId="yVElI5FfcY8" />
    <VideoThumb videoId="HGoQnU6ySw4" />
    <VideoThumb videoId="muIXsGaTOoU" />
    <VideoThumb videoId="IWILNddsatA" />
    <VideoThumb videoId="Tgs5-h5CKdQ" />
    <VideoThumb videoId="JZp0q6bigmw" />
    <VideoThumb videoId="Ho-t11DGvVc" />
  </NavBar>
);

/*
 This "More videos on YouTube" link has an alignment issue in Safari. Removing for now.
 <VideoWrapper>
   <MoreVideosLinkText><FormattedMessage {...messages.moreOnYouTube} /></MoreVideosLinkText>
   <a href="//www.youtube.com/user/transfigurism"><MoreVideosLinkImage src={YouTubeLogo} /></a>
 </VideoWrapper>
 */
export default ConferenceVideoNav;
