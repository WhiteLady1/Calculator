import React, { useState } from 'react';
import Keypad from './Keypad/Keypad';
import Console from './Console/Console';
import History from './History/History';
import { newRecordInHistory } from '..';

const Calculator = () => {
  const [newCount, setNewCount] = useState(newRecordInHistory);
  return (
    <>
      <Console
        numberA={newCount.numberA ? newCount.numberA : ''}
        numberB={newCount.numberB ? newCount.numberB : ''}
        operator={newCount.operator}
        result={newCount.result}
      />
      <Keypad />
      <History />
    </>
  );
};

export default Calculator;
