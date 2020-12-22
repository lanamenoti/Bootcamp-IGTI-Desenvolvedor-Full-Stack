import React from 'react';
import css from './counter.module.css';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import Value from './Value';
import Steps from './Steps';

export default function Counter2({ onCount, countValue, currentStep }) {
  const handleButtonClick = (clickType) => {
    onCount(clickType);
  };

  return (
    <div className={css.counterContainer}>
      <DecrementButton onDecrement={handleButtonClick} />
      <Value value={countValue} />
      <IncrementButton onIncrement={handleButtonClick} />
      <Steps steps={currentStep} />
    </div>
  );
}

//Peculiaridades do JSX
//  - Para criar classes: className
//  - Quando a tag nao tiver fechamento tem que botar a barra (ex.: <img ... />)
