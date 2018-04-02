import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gql from 'graphql-tag';
import Link from 'components/Link';
import moment from 'moment';
import _ from 'lodash';

const Wrapper = styled.div`
  display: flex;
  margin: ${(p) => p.isBreak ? '2.5em 0' : '0 0 1em 0'} !important;
`;

const Time = styled.div`
  width: 60px;
  text-align: right;
  flex: none;
  margin: 0 1em 0 0;
  line-height: 1.25;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: bold;
  color: #659400;
  padding-right: 0.1em;
`;

const PresentationName = styled.span`
  font-style: italic;
`;

const BreakName = styled.span`
`;

const Title = styled.h2`
  flex: 1;
  line-height: 1.25 !important;
  margin: 0 !important;
`;

const Duration = styled.span`
  padding-left: 1em;
  font-size: 80%;
`;

const Delta = styled.span`
  color: ${(p) => p.color};
`;

const ScheduleColor = ({ presentation, children }) => {
  const { scheduledOffset, adjustedOffset } = presentation;
  const delta = adjustedOffset - scheduledOffset;
  const color = delta <= 0 ? 'inherit' : 'red';
  return <Delta color={color}>{children}</Delta>;
};
ScheduleColor.propTypes = {
  presentation: PropTypes.object,
  children: PropTypes.any,
};

const DifferenceWrapper = styled.div`
  font-size: 12px;
`;
const Difference = ({ presentation }) => {
  const { scheduledOffset, adjustedOffset } = presentation;
  const delta = adjustedOffset - scheduledOffset;
  const direction = delta < 0 ? 'ahead of' : 'behind';
  return !delta ? null : (
    <ScheduleColor presentation={presentation}>{`(${Math.abs(delta)} mins ${direction} schedule)`}</ScheduleColor>
  );
};
Difference.propTypes = {
  presentation: PropTypes.object,
};

const formattedDate = (date) => {
  let formatted = moment(date).format('LT');
  formatted = formatted.replace(/ PM/g, 'pm');
  formatted = formatted.replace(/ AM/g, 'am');
  return formatted;
};

const Presentation = ({ presentation }) => {
  let presenterName = _.get(presentation, 'presenter.displayName');
  if (presenterName) {
    presenterName += ', ';
  }
  return (
    <Wrapper id={`${presentation.id}`} isBreak={!presenterName}>
      <Time>
        <ScheduleColor presentation={presentation}>{formattedDate(presentation.adjustedMoment)}</ScheduleColor>
      </Time>
      <Info>
        {presenterName &&
          <Title>
            <Link to={`/conf/presenters#${encodeURIComponent(presentation.presenter.displayName)}`}>
              <Name>{presenterName}</Name>
            </Link>
            {presentation.title && <PresentationName>{presentation.title}</PresentationName>}
          </Title>
        }
        {!presenterName &&
          <Title>
            {presentation.title && <BreakName>{presentation.title}</BreakName>}
            <Duration>{`(${presentation.adjustedDuration} mins)`}</Duration>
          </Title>
        }
        <DifferenceWrapper><Difference presentation={presentation} /></DifferenceWrapper>
      </Info>
    </Wrapper>
  );
};

Presentation.propTypes = {
  presentation: PropTypes.object,
};

Presentation.fragments = {
  presentation: gql`
    fragment PresentationPresentation on Presentation {
      id
      title
      presenter {
        displayName
      }
    }
  `,
};

export default Presentation;
