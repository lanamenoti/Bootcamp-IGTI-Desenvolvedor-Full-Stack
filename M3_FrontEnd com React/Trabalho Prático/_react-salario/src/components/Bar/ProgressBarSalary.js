import React, { Component } from 'react';
import css from './Bar.module.css';

export default class ProgressBarSalary extends Component {
  render() {
    const { inss, irpf, netSalary } = this.props;

    const inssBarStyle = {
      width: `${inss * 100}%`,
      background: '#e67e22',
    };

    const irpfBarStyle = {
      width: `${irpf * 100}%`,
      background: '#c0392b',
    };

    const netSalaryBarStyle = {
      width: `${netSalary * 100}%`,
      background: '#16a085',
    };

    return (
      <div className={css.flexRow}>
        <div style={inssBarStyle}>&nbsp;</div>
        <div style={irpfBarStyle}>&nbsp;</div>
        <div style={netSalaryBarStyle}>&nbsp;</div>
      </div>
    );
  }
}
