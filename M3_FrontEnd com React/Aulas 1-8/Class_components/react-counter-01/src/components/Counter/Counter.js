import React, { Component } from 'react';
import css from './counter.module.css';

export default class Counter extends Component {
  constructor() {
    super(); //Obrigatorio**

    this.currentCounter = 2;
    //Atributos sao precedidos com this
  }

  handleClick = () => {
    console.log('click');
    this.currentCounter--;
  };
  render() {
    return (
      <div className={css.counterContainer}>
        <button
          onClick={this.handleClick}
          className="waves-effect waves-light btn red darken-4"
        >
          -
        </button>
        <span className={css.counterValue}>{this.currentCounter}</span>
        <button className="waves-effect waves-light btn green darken-4">
          +
        </button>
      </div>
    );
  }
}

//Peculiaridades do JSX
//  - Para criar classes: className
//  - Quando a tag nao tiver fechamento tem que botar a barra (ex.: <img ... />)
