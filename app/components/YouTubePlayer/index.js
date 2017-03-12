import React from 'react';
import styled from 'styled-components';

const Player = styled.div`
  position: relative;
  padding-bottom: 56.23%;
  /* Use 75% for 4:3 videos */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
  margin: 5px;
    
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: transparent;
  }
    
  img {
    bottom: 0;
    display: block;
    left: 0;
    margin: auto;
    max-width: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    top: 0;
    border: none;
    height: auto;
    cursor: pointer;
    -webkit-transition: .4s all;
    -moz-transition: .4s all;
    transition: .4s all;
  }
    
  img:hover {
    -webkit-filter: brightness(75%);
  }
    
  .play {
    height: 72px;
    width: 72px;
    left: 50%;
    top: 50%;
    margin-left: -36px;
    margin-top: -36px;
    position: absolute;
    background: url("//i.imgur.com/TxzC70f.png") no-repeat;
    cursor: pointer;
  }
`;


class YouTubePlayer extends React.Component {

  static propTypes = {
    videoId: React.PropTypes.string.isRequired,
  };

  state = {
    isPlaying: false,
  };

  onClick = () => {
    this.setState({ isPlaying: true });
  };

  render() {
    const { isPlaying } = this.state;
    const { videoId } = this.props;
    return (
      <Player>
        { isPlaying
          ? <iframe src={`//www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allowFullScreen="1" />
          : (
            <button onClick={this.onClick}>
              <img alt="Video Player" src={`//i.ytimg.com/vi/${videoId}/hqdefault.jpg`} />
              <div className="play" />
            </button>
          )
        }
      </Player>
    );
  }
}

export default YouTubePlayer;
