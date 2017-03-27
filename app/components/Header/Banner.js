import React from 'react';
import styled from 'styled-components';
import Section from 'components/Section';
import Img from 'components/Img';
import SectionContent from 'components/SectionContent';
import { SingleColumn } from 'components/Columns';
import BannerImage from './banner.jpg';
import Logo from './mta-logo.png';

const BannerSection = styled(Section)`
  background-position-y: top;
  background-attachment: fixed;
  margin: 0;
  padding: calc(45px) 0 0 0;
`;

const LogoImg = styled(Img)`
  height: 80px;
  width: auto;
  margin-left: -3px;
`;

export default () => (
  <BannerSection img={BannerImage} >
    <SectionContent>
      <SingleColumn>
        <LogoImg src={Logo} alt="MTA Logo" />
      </SingleColumn>
    </SectionContent>
  </BannerSection>
);
