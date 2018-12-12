import React from 'react';
import { FormattedMessage } from 'react-intl';
import _ from 'lodash';
import _Section from 'components/Section';
import SectionContent from 'components/SectionContent';
import styled from 'styled-components';
import Columns, { Column as _Column } from 'components/Columns';
import MarkdownProfiles, { Title } from 'components/MarkdownProfiles';
import Primer1Image from '../../../CurriculumPage/lessons/assets/lesson1.jpg';
import Primer2Image from '../../../CurriculumPage/lessons/assets/lesson2.jpg';
import Primer3Image from '../../../CurriculumPage/lessons/assets/lesson3.jpg';
import Primer4Image from '../../../CurriculumPage/lessons/assets/lesson4.jpg';
import Primer5Image from '../../../CurriculumPage/lessons/assets/lesson5.jpg';
import Primer6Image from '../../../CurriculumPage/lessons/assets/lesson6.jpg';
import Primer7Image from '../../../CurriculumPage/lessons/assets/lesson7.jpg';

import Primers from './Primers.md';

/*
    <Entry to="/primers/1">The Basics of Mormon Transhumanism</Entry>
    <Entry to="/primers/2">The Purpose of the Mormon Transhumanist Association</Entry>
    <Entry to="/primers/3">Humanity+ and The Transhumanist Declaration</Entry>
    <Entry to="/primers/4">Exponential Change</Entry>
    <Entry to="/primers/5">Implications of Exponential Technological Trends for Humanity</Entry>
    <Entry to="/primers/6">A Brief History of Religious Transhumanism</Entry>
    <Entry to="/primers/7">The Role of Christ in Transhumanism</Entry>

*/
const primers = [
  {
    image: Primer1Image,
    title: 'What is Mormon Transhumanism?',
    url: '/primers/1',
  },
  {
    image: Primer2Image,
    title: 'What is the purpose of the Mormon Transhumanist Association?',
    url: '/primers/2',
  },
  {
    image: Primer3Image,
    title: 'Humanity+ and The Transhumanist Declaration',
    url: '/primers/3',
  },
  {
    image: Primer4Image,
    title: 'Exponential change',
    url: '/primers/4',
  },
  {
    image: Primer5Image,
    title: 'Implications of exponential technological trends for humanity',
    url: '/primers/5',
  },
  {
    image: Primer6Image,
    title: 'A brief history of religious transhumanism',
    url: '/primers/6',
  },
  {
    image: Primer7Image,
    title: 'What is the role of Christ in transhumanism?',
    url: '/primers/7',
  },
];

const Section = styled(_Section)`
  padding-top: 0;
  margin-top: -32px;
`;

const Column = styled(_Column)`
  padding: 0 12px;
`;

const PrimerItem = styled.div`
  position: relative;
  margin-bottom: 32px;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  &:hover > img {
    filter: brightness(75%);
  }
`;

const PrimerImage = styled.img`
  transition: all 250ms;
  width: 100%;
  height: auto;
`;

const PrimerTitle = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  right: 24px;
  font-size: 32px;
  color: white;
  font-weight: bold;
  line-height: 1.1;
  text-shadow: 0 0 32px rgba(0, 0, 0, 0.95);
`;

class PrimersSection extends React.PureComponent {
  render() {
    const halfIdx = Math.ceil(primers.length / 2);
    const part1 = primers.slice(0, halfIdx);
    const part2 = primers.slice(halfIdx, primers.length);
    const parts = [part1, part2];

    return (
      <Section>
        <SectionContent>
          <Title>Primers</Title>
          <Columns>
            {_.map(parts, (part, index) => (
              <Column key={index}>
                {_.map(part, primer => (
                  <a href={primer.url} key={primer.title}>
                    <PrimerItem imageUrl={primer.url}>
                      <PrimerImage src={primer.image} />
                      <PrimerTitle>{primer.title}</PrimerTitle>
                    </PrimerItem>
                  </a>
                ))}
              </Column>
            ))}
          </Columns>
        </SectionContent>
      </Section>
    );
  }
}

export default PrimersSection;
