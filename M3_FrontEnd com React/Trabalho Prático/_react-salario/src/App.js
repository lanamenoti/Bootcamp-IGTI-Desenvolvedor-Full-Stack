import React, { Component } from 'react';
import ProgressBarSalary from './components/Bar/ProgressBarSalary';
import InputFullSalary from './components/Inputs/InputFullSalary';
import InputReadOnly from './components/Inputs/InputReadOnly';
import css from '../src/components/Inputs/Inputs.module.css';
import { calculateSalaryFrom } from './Helpers/salary.js';
import { formatNumber } from './Helpers/format.js';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 3900,
    };
  }

  handleChangeInput = (newNumber) => {
    const { fullSalary } = this.state;
    this.setState({
      fullSalary: newNumber,
    });
  };

  render() {
    const { fullSalary } = this.state;
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = calculateSalaryFrom(fullSalary);

    const percentDiscountINSS = discountINSS / fullSalary;
    const percentDiscountIRPF = discountIRPF / fullSalary;
    const percentNetSalary = netSalary / fullSalary;

    return (
      <div className="container">
        <h2 className={css.title}> React Salário </h2>
        <InputFullSalary
          value={fullSalary}
          label="Salário Bruto"
          onChangeInput={this.handleChangeInput}
        />
        <div className={css.flexRow}>
          <InputReadOnly
            className={css.baseInput}
            label="Base INSS"
            type="Text"
            value={`${formatNumber(baseINSS)}`}
          />
          <InputReadOnly
            className={css.discountINSS}
            label="Desconto INSS"
            type="Text"
            value={`${formatNumber(discountINSS)} (${(
              percentDiscountINSS * 100
            ).toFixed(2)}%)`}
          />
          <InputReadOnly
            className={css.baseInput}
            label="Base IRPF"
            type="Text"
            value={`${formatNumber(baseIRPF)}`}
          />
          <InputReadOnly
            className={css.discountIRPF}
            label="Desconto IRPF"
            type="Text"
            value={`${formatNumber(discountIRPF)} (${(
              percentDiscountIRPF * 100
            ).toFixed(2)}%)`}
          />
        </div>
        <InputReadOnly
          className={css.netSalary}
          label="Salário Líquido"
          type="Text"
          value={`${formatNumber(netSalary)} (${(
            percentNetSalary * 100
          ).toFixed(2)}%)`}
        />
        <ProgressBarSalary
          inss={percentDiscountINSS}
          irpf={percentDiscountIRPF}
          netSalary={percentNetSalary}
        />
      </div>
    );
  }
}
