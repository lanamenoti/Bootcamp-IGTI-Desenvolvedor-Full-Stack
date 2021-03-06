import React, { Component } from 'react';
import css from './counter.module.css';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import Value from './Value';
import Steps from './Steps';

export default class Counter extends Component {
  constructor() {
    super(); //Obrigatorio**

    this.state = {
      currentCounter: 2,
      steps: 0,
    };
    //Atributos sao precedidos com this
    //Utilizacao de state traz mais possibilidades
  }

  handleButtonClick = (clickType) => {
    const { currentCounter, steps } = this.state;
    this.setState({
      currentCounter:
        clickType === '+' ? currentCounter + 1 : currentCounter - 1,
      steps: steps + 1,
    });
    //setState tem um segundo parametro, que eh uma funcao q vai ser executada apos
    //o setState ter sido feito (botar uma funcao logo apos no codigo nao garante isso)
  };

  render() {
    const { currentCounter, steps } = this.state;
    return (
      <div className={css.counterContainer}>
        <DecrementButton onDecrement={this.handleButtonClick} />
        <Value value={currentCounter} />
        <IncrementButton onIncrement={this.handleButtonClick} />
        <Steps steps={steps} />
      </div>
    );
  }
}

//Peculiaridades do JSX
//  - Para criar classes: className
//  - Quando a tag nao tiver fechamento tem que botar a barra (ex.: <img ... />)
