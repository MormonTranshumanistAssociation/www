import React from 'react';
import { FormattedMessage } from 'react-intl';
import Section from 'components/Section';
import SectionContent from 'components/SectionContent';
import styled from 'styled-components';
import Columns, { Column } from 'components/Columns';

import messages from './messages';

function softBreak(WrappedComponent) {
  return ({ children = '', ...rest }) => {
    // eslint-disable-line react/prop-types
    const text = String(children).replace('||', '<br/>');
    return <WrappedComponent {...rest} dangerouslySetInnerHTML={{ __html: text }} />;
  };
}

const H = softBreak(styled.h3`
  color: #525b3a;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 400;
  margin: 0;
`);

const P = styled.p`
  padding-top: 0.2rem;
  margin-top: 0;
`;

const Title = styled.h2`
  color: #525b3a;
  font-size: 2rem;
`;
const AffirmationSection = () => {
  const affs = [1, 2, 3, 4, 5, 6].map(index => ({
    header: messages[`aff${index}Header`],
    text: messages[`aff${index}Text`],
  }));

  return (
    <Section>
      <SectionContent>
        <Title>
          <FormattedMessage {...messages.title} />
        </Title>
        <Columns>
          <Column>
            <FormattedMessage {...affs[0].header}>{msg => <H>{msg}</H>}</FormattedMessage>
            <FormattedMessage {...affs[0].text}>{msg => <P>{msg}</P>}</FormattedMessage>
            <FormattedMessage {...affs[1].header}>{msg => <H>{msg}</H>}</FormattedMessage>
            <FormattedMessage {...affs[1].text}>{msg => <P>{msg}</P>}</FormattedMessage>
            <FormattedMessage {...affs[2].header}>{msg => <H>{msg}</H>}</FormattedMessage>
            <FormattedMessage {...affs[2].text}>{msg => <P>{msg}</P>}</FormattedMessage>
          </Column>
          <Column>
            <FormattedMessage {...affs[3].header}>{msg => <H>{msg}</H>}</FormattedMessage>
            <FormattedMessage {...affs[3].text}>{msg => <P>{msg}</P>}</FormattedMessage>
            <FormattedMessage {...affs[4].header}>{msg => <H>{msg}</H>}</FormattedMessage>
            <FormattedMessage {...affs[4].text}>{msg => <P>{msg}</P>}</FormattedMessage>
            <FormattedMessage {...affs[5].header}>{msg => <H>{msg}</H>}</FormattedMessage>
            <FormattedMessage {...affs[5].text}>{msg => <P>{msg}</P>}</FormattedMessage>
          </Column>
        </Columns>
      </SectionContent>
    </Section>
  );
};
export default AffirmationSection;
