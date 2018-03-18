import React from 'react';
import styled from 'styled-components';
import Section from 'components/Section';
import Img from 'components/Img';
import SectionContent from 'components/SectionContent';
import BackgroundImage from './sands.jpg';
import SocialNavBar from './SocialNavBar';
import ConfImage from './worlds_without_number_keynotes_1920x940.jpg';
import Headlines from './Headlines';

const ConferenceImage = styled(Img)`
  height: auto;
  width: 100%;
  flex: 0;
`;

const ContributeLink = styled.a`
  color: white;
  padding: 0.2rem 1.75rem;
  border-radius: 2px;
  background: rgba(0,0,0,.35); 
  font-size: 0.9rem;
  text-decoration: none;
  margin: 12px 0;
  display: inline-block;
  flex: 0;
  
  &:hover {
    text-decoration: underline;
    background: rgba(0,0,0,.5);
  }
`;

const TopAlignedSection = styled(Section)`
  //min-height: 100vh;
  background-position-y: top;
  padding-bottom: 0;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  background: rgba(255,255,255,.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const ElevatedContainer = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 960px;
  padding: 0 10px;
  margin: 0 auto;
`;

const ConferenceBanner = styled.a`
  display: block;
  height: 100%;
  color: white;
  width: 100%;
  margin-bottom: 30px;
  text-decoration: none !important;
  border: 2px solid rgb(255,133,5);
  &:hover {
    text-decoration: none !important;
    box-shadow: 0 2px 10px 5px rgba(0,0,0,.35);
  }
`;

const RegistrationHeader = styled.div`
  display: block;
  text-align: center; 
  background: rgb(255,133,5);
  padding: 8px 24px;
  color: white;
  font-size: 2rem;
  font-family: 'Source Sans Pro', 'Abel', Helvetica, Arial, sans-serif;
  font-weight: 300;
  text-decoration: none !important;
  margin: -2px -2px 0 -2px;
  &:hover {
    text-decoration: none !important;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const HeadlinesSection = styled.div`
  z-index: 1;
  margin-top: 3em;
  background: rgba(0,0,0,.35);
  min-height: 111px;    // height if no headline has more than 3 lines of text; prevents jitter when content loads
`;

const SplashSection = () => (
  <TopAlignedSection img={BackgroundImage}>
    <Overlay />
    <Spacer />
    <ElevatedContainer>
      <ConferenceBanner
        href="https://www.eventbrite.com/e/2018-conference-of-the-mormon-transhumanist-association-registration-42931748014?ref=transfigurism"
        target="_blank"
      >
        <RegistrationHeader>
          Register today!
        </RegistrationHeader>
        <ConferenceImage alt="2018 Conference" src={ConfImage} />
      </ConferenceBanner>
      <SocialNavBar />
      <ContributeLink href="/join#donation">Contribute</ContributeLink>
    </ElevatedContainer>
    <Spacer />
    <HeadlinesSection>
      <SectionContent>
        <Headlines />
      </SectionContent>
    </HeadlinesSection>
  </TopAlignedSection>
);

export default SplashSection;
