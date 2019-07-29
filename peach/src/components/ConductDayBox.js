import React from 'react';

const COLORS = {
  1: 'green',
  2: 'yellow',
  3: 'red'
};

export default class ConductDayBox extends React.Component {

  render() {
    const conduct = this.props.conduct;
    const color = COLORS[conduct.status];
    const box = (
      <span style={{color: color}}>
        {conduct.date}
      </span>
    );
      
    return (
      <li>
        {box} 
      </li>
    );
  }
}