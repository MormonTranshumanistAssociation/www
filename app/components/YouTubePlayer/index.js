import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import CloseIcon from 'material-ui/svg-icons/navigation/close';

const Player = styled.div`
  position: relative;
  padding-bottom: 56.23%;
  /* Use 75% for 4:3 videos */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
  transition: 0.2s all;

  &:hover img {
    -webkit-filter: brightness(75%);
  }
`;

const SizedPlayButtonOverlay = styled.div`
  height: 72px;
  width: 72px;
  left: 50%;
  top: 50%;
  margin-left: -36px;
  margin-top: -36px;
  position: absolute;
  background: url('//i.imgur.com/TxzC70f.png') no-repeat;
  cursor: pointer;
`;

const SizedIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: transparent;
`;

const SizedThumbImage = styled.img`
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
  transition: 0.2s all;
`;

export const ThumbImage = ({ videoId }) => (
  <SizedThumbImage alt="Video Player" src={`//i.ytimg.com/vi/${videoId}/hqdefault.jpg`} />
);
ThumbImage.propTypes = { videoId: React.PropTypes.string };

const ModalContentPlacer = styled.div`
  padding: 20px;
  max-width: calc(768px + 2 * 20px);
  margin: auto auto;
  max-height: calc(480px + 2 * 20px);
  position: relative;
`;

const ModalCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 9999;
  border-radius: 50%;
  padding: 5px;
  border: 2px solid white;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.3);
  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const ModalIframeWrapper = styled.div`
  position: relative;
  padding-bottom: 56.23%;
  /* Use 75% for 4:3 videos */
  height: 0;
  overflow: hidden;
  background: #000;
  transition: 0.2s all;
  z-index: 9999;
`;

const ModalPlayer = props => {
  const { children, isOpen, onClose } = props;
  const modalStyle = {
    overlay: {
      zIndex: 9999,
      backgroundColor: 'rgba(0,0,0,.8)',
    },
    content: {
      background: 'transparent',
      border: 'none',
      bottom: 'auto',
      left: '10%',
      right: '10%',
      top: '60px',
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Video" style={modalStyle}>
      <ModalContentPlacer>
        <ModalIframeWrapper>{children}</ModalIframeWrapper>
        <ModalCloseIcon color="white" style={{ height: 44, width: 44 }} onTouchTap={onClose} />
      </ModalContentPlacer>
    </Modal>
  );
};

ModalPlayer.propTypes = {
  children: React.PropTypes.object,
  isOpen: React.PropTypes.bool,
  onClose: React.PropTypes.func,
};

class YouTubePlayer extends React.Component {
  static propTypes = {
    videoId: React.PropTypes.string.isRequired,
    modal: React.PropTypes.bool,
    hiddenOverlay: React.PropTypes.bool,
  };

  state = {
    isPlaying: false,
    isModalOpen: false,
  };

  onClick = () => {
    this.setState({ isPlaying: true, isModalOpen: true });
  };

  onModalClose = () => {
    this.setState({ isModalOpen: false, isPlaying: false });
  };

  render() {
    const { isPlaying, isModalOpen } = this.state;
    const { videoId, modal, hiddenOverlay } = this.props;
    const Wrapper = modal
      ? props => (
          <ModalPlayer isOpen={isModalOpen} onClose={this.onModalClose}>
            {props.children}
          </ModalPlayer>
        )
      : props => <div>{props.children}</div>;
    return (
      <Player>
        {isPlaying ? (
          <Wrapper>
            <SizedIframe src={`//www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allowFullScreen="1" />
          </Wrapper>
        ) : (
          <div onTouchTap={this.onClick}>
            <ThumbImage videoId={videoId} />
            {!hiddenOverlay && <SizedPlayButtonOverlay />}
          </div>
        )}
      </Player>
    );
  }
}

export default YouTubePlayer;
