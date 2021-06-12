import React from 'react';
import Keypad from './Keypad/Keypad';
import Console from './Console/Console';
import History from './History/History';

const Calculator = () => {
  return (
    <>
      <Console />
      <Keypad />
      <History />
    </>
  );
};

export default Calculator;
