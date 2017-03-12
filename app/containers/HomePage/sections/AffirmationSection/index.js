import React from 'react';
import { FormattedMessage } from 'react-intl';
import Section from 'components/Section';
import SectionContent from 'components/SectionContent';
import styled from 'styled-components';
import messages from './messages';


const ColumnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Column = styled.div`
  width: 384px;
  text-align: left;
  padding: 1rem 2rem;
`;

function softBreak(WrappedComponent) {
  return ({ children = '', ...rest }) => {      // eslint-disable-line react/prop-types
    const text = String(children).replace('||', '<br/>');
    return <WrappedComponent {...rest} dangerouslySetInnerHTML={{ __html: text }} />;
  };
}

const H = softBreak(styled.h3`
  color: #525B3A;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 400;
  margin: 0;
`);

const P = styled.p`
  padding-top: 0.2rem;
  margin-top: 0;
`;

const AffirmationSection = () => {
  const affs = [1, 2, 3, 4, 5, 6].map((index) => (
    { header: messages[`aff${index}Header`], text: messages[`aff${index}Text`] }
  ));

  return (
    <Section>
      <SectionContent>
        <ColumnWrapper>
          {
            affs.map((aff, index) => (
              <Column key={index}>
                <FormattedMessage {...aff.header}>{(msg) => <H>{msg}</H>}</FormattedMessage>
                <FormattedMessage {...aff.text}>{(msg) => <P>{msg}</P>}</FormattedMessage>
              </Column>
            ))
          }
        </ColumnWrapper>
      </SectionContent>
    </Section>
  );
};
export default AffirmationSection;
