import React, { Component } from 'react';
import css from './Inputs.module.css';

export default class InputReadOnly extends Component {
  render() {
    const { label, value, type, className } = this.props;
    return (
      <div>
        <span>{label}</span>
        <input
          className={className}
          type={type}
          readOnly
          placeholder="0"
          value={value}
        />
      </div>
    );
  }
}
