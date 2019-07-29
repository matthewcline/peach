import React from 'react';

export default class SearchBar extends React.Component {

  handleFilterTextChange = (e) => {
    this.props.onFilterTextChange(e.target.value);
  }

  handleOnlyUnsatisfactoryDaysChange = (e) => {
    this.props.onOnlyUnsatisfactoryDaysChange(e.target.checked);
  }

  render() {
    return (
      <form>
        <input 
          type="text" 
          placeholder="Search..." 
          value={this.props.filteredText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input 
            type="checkbox" 
            checked={this.props.onlyUnsatisfactoryDays}
            onChange={this.handleOnlyUnsatisfactoryDaysChange}
          />
          {' '}
          Only show less than satisfactory days
        </p>
      </form>
    );
  }
}