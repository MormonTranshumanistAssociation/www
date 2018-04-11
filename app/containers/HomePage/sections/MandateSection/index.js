import React from 'react';
import { FormattedMessage } from 'react-intl';
import Section from 'components/Section';
import SectionContent from 'components/SectionContent';
import styled from 'styled-components';
import YouTubePlayer from 'components/YouTubePlayer';
import messages from './messages';
import LeavesImage from './leaves.jpg';

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const H = styled.h3`
  font-size: 2rem;
  padding: 0;
  margin: 0;
  line-height: 1.25em;
  color: rgba(0, 0, 0, 0.75);
`;

const TextWrapper = styled.div`
  max-width: 384px;
  text-align: center;
  padding: 1rem 2rem 0 2rem;
`;

const VideoWrapper = styled.div`
  max-width: calc(384px + 2 * 2rem);
  width: 100%;
  height: auto;
  margin: 1rem 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
`;

const FixedBackgroundSection = styled(Section)`
  //background-attachment: fixed;
`;

const MandateSection = () => (
  <FixedBackgroundSection img={LeavesImage}>
    <SectionContent>
      <Centered>
        <VideoWrapper>
          <YouTubePlayer videoId="VePRByRNIAc" />
        </VideoWrapper>
        <TextWrapper>
          <H>
            <FormattedMessage {...messages.header} />
          </H>
          <p>
            <FormattedMessage {...messages.text} />
          </p>
        </TextWrapper>
      </Centered>
    </SectionContent>
  </FixedBackgroundSection>
);

export default MandateSection;
