import React from 'react';
import styled from 'styled-components';
import Section from 'components/Section';
import Img from 'components/Img';
import SectionContent from 'components/SectionContent';
import ForestImage from './forest.jpg';
import SocialNavBar from './SocialNavBar';
import Logo from './mta-logo.png';
import Headlines from './Headlines';

const LogoImg = styled(Img)`
  width: 206px;
  height: auto;
  margin: 50px 0 50px 0;
  flex: 0;
`;

const ContributeLink = styled.a`
  color: white;
  padding: 0.2rem 1.75rem;
  border-radius: 1rem;
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
`;

const Spacer = styled.div`
  flex: 1,
`;

const HeadlinesSection = styled.div`
  margin-top: 3em;
  background: rgba(0,0,0,.35);
  min-height: 111px;    // height if no headline has more than 3 lines of text; prevents jitter when content loads
`;

const SplashSection = () => (
  <TopAlignedSection img={ForestImage}>
    <Spacer />
    <div>
      <LogoImg alt="MTA Logo" src={Logo} />
      <SocialNavBar />
      <ContributeLink href="/join#donation">Contribute</ContributeLink>
    </div>
    <Spacer />
    <HeadlinesSection>
      <SectionContent>
        <Headlines />
      </SectionContent>
    </HeadlinesSection>
  </TopAlignedSection>
);

export default SplashSection;
