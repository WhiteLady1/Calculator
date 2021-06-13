import React, { useState } from 'react';
import Keypad from './Keypad/Keypad';
import Console from './Console/Console';
import History from './History/History';
import {
  CalculatorContainer,
  CalculatorDevice,
  HistoryContainer,
} from './styled';

const Calculator = () => {
  const [newCount, setNewCount] = useState({});

  return (
    <CalculatorContainer>
      <CalculatorDevice>
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
      </CalculatorDevice>
      <HistoryContainer>
        <History />
      </HistoryContainer>
    </CalculatorContainer>
  );
};

export default Calculator;
