import React, { Component } from 'react';

export default class InputFullSalary extends Component {
  handleChange = (event) => {
    const newNumber = event.target.value;

    this.props.onChangeInput(newNumber);
  };

  render() {
    const { label, value } = this.props;
    return (
      <div>
        <span> {label}</span>
        <input type="number" onChange={this.handleChange} value={value} />
      </div>
    );
  }
}
