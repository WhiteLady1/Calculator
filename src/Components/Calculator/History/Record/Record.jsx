import React from 'react';

const Record = ({ numberA, numberB, operator, result }) => {
  return (
    <div>
      {numberA} {operator} {numberB} = {result}
    </div>
  );
};
export default Record;
