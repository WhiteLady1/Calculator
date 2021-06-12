import React from 'react';

const Console = ({ numberA, numberB, operator, result }) => {
  return (
    <div>
      {result ? (
        <input type="text" readOnly value={result} />
      ) : (
        <input
          type="text"
          readOnly
          value={`${numberA} ${operator} ${numberB}`}
        />
      )}
    </div>
  );
};
export default Console;
