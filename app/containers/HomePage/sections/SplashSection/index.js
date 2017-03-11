import React from 'react';
import styled from 'styled-components';
import Section from 'components/Section';
import ForestImage from './forest.jpg';
import Img from 'components/Img';
import SocialNavBar from './SocialNavBar';
import Logo from './mta-logo.png';

const LogoImg = styled(Img)`
  width: 206px;
  height: auto;
  margin: 20px 0 50px 0;
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
  
  &:hover {
    background: rgba(0,0,0,.5);
  }
`;

const SplashSection = (props) => (
  <Section img={ForestImage}>
    <LogoImg alt="MTA Logo" src={Logo} />
    <SocialNavBar/>
    <ContributeLink href="://contribute">Contribute</ContributeLink>
  </Section>
);

export default SplashSection;
