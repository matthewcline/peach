import React from 'react';
import ConductDayBox from './ConductDayBox';

export default class ConductCalendar extends React.Component {
  render() {
    const conductDayBoxes = [];
    const filterText = this.props.filterText;
    const onlyUnsatisfactoryDays = this.props.onlyUnsatisfactoryDays;
    
    this.props.conducts.forEach((conduct) => {
      if (typeof conduct.comments === 'undefined' && filterText.length > 0) {
        return;
      }
      if (typeof conduct.comments !== 'undefined' && conduct.comments.indexOf(filterText) === -1) {
        return;
      }
      if (onlyUnsatisfactoryDays && conduct.status === 1) {
        return;
      }
      conductDayBoxes.push(
        <ConductDayBox
          conduct={conduct}
          key={conduct.date} />
      );
    });

    return (
      <div>
        <ul>
          {conductDayBoxes}
        </ul>
      </div>
    );
  }
}