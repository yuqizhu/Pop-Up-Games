import React from 'react';
import { sportNumConv, blockToTime } from '../../../utils.js';
import PropTypes from 'prop-types';
import moment from 'moment';

/**
 * @description component that distributes the various pieces of data about the event to sub-components
 */
var EventDetails = props => {
  return (
    <div>
      <div className="event-entry-title">{props.details.eventName}</div>
      <div className="event-entry-date-time">{`Sport: ${sportNumConv(props.details.sportId)}`}</div>
      <div className="event-entry-date-time">
        {`${moment(props.details.date).format('LL')} ${blockToTime(props.details.startBlock)} to ${blockToTime(
          props.details.endBlock
        )}`}
      </div>
    </div>
  );
};

EventDetails.propTypes = {
  details: PropTypes.object.isRequired,
};

export default EventDetails;
