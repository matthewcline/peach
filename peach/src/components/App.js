import React from 'react';
import FilterableConductCalendar from './FilterableConductCalendar';

export default class App extends React.Component {
  render() {
    return <FilterableConductCalendar conducts={this.props.conducts} />;
  }
}