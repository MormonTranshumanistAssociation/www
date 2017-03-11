import React from 'react';
import { FormattedMessage }from 'react-intl';
import Section from 'components/Section';
import SectionContent from 'components/SectionContent'
import styled from 'styled-components';
import messages from './messages';
import LeavesImage from './leaves.jpg';

const H = styled.h3`
  font-size: 2rem;
  padding: 0;
  margin: 0;
  line-height: 1.25em;
  color: rgba(0,0,0,.75);
`;

const TextWrapper = styled.div`
  max-width: 384px;
  text-align: left;
  padding: 0 2rem;
`;

const MandateSection = (props) => {
  const affs = [1, 2, 3, 4, 5, 6 ].map((index) => {
    return {
      header: messages[`aff${index}Header`],
      text: messages[`aff${index}Text`],
    }
  });

  return (
    <Section img={LeavesImage}>
      <SectionContent>
        <TextWrapper>
          <H><FormattedMessage {...messages.header} /></H>
          <p><FormattedMessage {...messages.text} /></p>
        </TextWrapper>
      </SectionContent>
    </Section>
  );
}
export default MandateSection;
