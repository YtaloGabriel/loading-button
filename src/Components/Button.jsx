import React from 'react';
import Styles from './Button.module.css';

const Button = ({ classActive }) => {
  return (
    <button className={`${Styles.button} ${classActive} button`}>
      <span className={Styles.text}>{classActive == '' ? 'Confirm' : ''}</span>
    </button>
  );
};

export default Button;
