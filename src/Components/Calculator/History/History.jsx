import React from 'react';
import Record from './Record/Record';

const History = ({ source }) => {
  return (
    <div>
      Historie:
      {source.map((e, i) => (
        <Record
          key={i}
          numberA={e.numberA}
          numberB={e.numberB}
          operator={e.operator}
          result={e.result}
        />
      ))}
    </div>
  );
};
export default History;
