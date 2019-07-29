import React from 'react';
import SearchBar from './SearchBar';
import ConductCalendar from './ConductCalendar';

export default class FilterableConductCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      onlyUnsatisfactoryDays: false
    }
  }

  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText: filterText
    })
  }

  handleOnlyUnsatisfactoryDaysChange = (onlyUnsatisfactoryDays) => {
    this.setState({
      onlyUnsatisfactoryDays: onlyUnsatisfactoryDays
    })
  }

  render() {
    return (
      <div>
        <SearchBar 
          filterText={this.state.filterText}
          onlyUnsatisfactoryDays={this.state.onlyUnsatisfactoryDays}
          onFilterTextChange={this.handleFilterTextChange}
          onOnlyUnsatisfactoryDaysChange={this.handleOnlyUnsatisfactoryDaysChange}
        />
        <ConductCalendar 
          conducts={this.props.conducts} 
          filterText={this.state.filterText}
          onlyUnsatisfactoryDays={this.state.onlyUnsatisfactoryDays}
        />
      </div>
    );
  }
}