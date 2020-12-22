import React from 'react';
import css from './Installment.module.css';

export default function Installment({ period, children }) {
  return (
    <div>
      <div className={css.card}>
        <div className={css.period}>
          <span>{period}</span>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
