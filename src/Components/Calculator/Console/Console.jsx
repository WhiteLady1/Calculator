import React from 'react';
import { ConsoleContainer } from './styled';

const Console = ({ numberA, numberB, operator, result }) => {
  return (
    <ConsoleContainer>
      {result ? (
        <input type="text" readOnly value={result} />
      ) : (
        <input
          type="text"
          readOnly
          value={`${numberA} ${operator} ${numberB}`}
        />
      )}
    </ConsoleContainer>
  );
};
export default Console;
