import React, { useState } from 'react';
import Keypad from './Keypad/Keypad';
import Console from './Console/Console';
import History from './History/History';

const Calculator = () => {
  const [newCount, setNewCount] = useState({});
  console.log(newCount.result);
  return (
    <>
      {newCount.result ? (
        <Console result={newCount.result} />
      ) : (
        <Console
          numberA={newCount.numberA || ''}
          numberB={newCount.numberB || ''}
          operator={newCount.operator || ''}
        />
      )}

      <Keypad setNewCount={setNewCount} />
      <History />
    </>
  );
};

export default Calculator;
