import gql from 'graphql-tag';
import moment from 'moment';
import _ from 'lodash';

class Scheduler {
  state = {
    conference: null,
    decoratedPresentations: null,
  };

  constructor({ conference }) {
    this.setState({
      conference,
    });
    this.computeSchedule();
  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };
  }

  computeSchedule() {
    const { conference } = this.state;
    const startAtMoment = moment(new Date(conference.startAt), 'America/Denver');
    let currentScheduledOffset = 0;
    let currentAdjustedOffset = 0;

    // TODO: factor in actualDuration

    const decoratedPresentations = _.chain(conference)
      .get('presentations.edges')
      .map('node')
      .orderBy(['position'], ['asc'])
      .map((presentation) => {
        const { flex = conference.defaultPresentationFlex || 0, duration, actualDuration } = presentation;
        const scheduledMoment = startAtMoment.clone().add(currentScheduledOffset, 'minutes');
        const adjustedMoment = startAtMoment.clone().add(currentAdjustedOffset, 'minutes');
        let adjustedDuration;
        if (actualDuration) {
          adjustedDuration = actualDuration;
        } else {
          adjustedDuration = duration;
          const overage = currentAdjustedOffset - currentScheduledOffset;
          if (overage > 0) {
            const availableFlex = Math.min(overage, flex < 1 ? duration * flex : flex);
            adjustedDuration -= availableFlex;
          }
        }
        const adjustedDifference = adjustedDuration - duration;

        const decoratedPresentation = {
          ...presentation,
          scheduledOffset: currentScheduledOffset,
          adjustedOffset: currentAdjustedOffset,
          scheduledMoment,
          adjustedMoment,
          adjustedDuration,
          adjustedDifference,
        };
        currentScheduledOffset += presentation.duration;
        const timeAhead = Math.max(0, currentScheduledOffset - (currentAdjustedOffset + adjustedDuration));
        currentAdjustedOffset += adjustedDuration + timeAhead;
        return decoratedPresentation;
      })
      .value();

    this.setState({ decoratedPresentations });
  }

  getDecoratedPresentations() {
    return this.state.decoratedPresentations;
  }
}

Scheduler.fragments = {
  conference: gql`
    fragment SchedulerConference on Conference {
      defaultPresentationFlex
      startAt
      presentations {
        edges {
          node {
            id
            duration
            actualDuration
            flex
            position
          }
        }
        
      }
    }
  `,
};

export { Scheduler };
