import React from 'react';
import Record from './Record/Record';
import { dataHistory, usePersistedState } from '../../index';

const History = () => {
  const [localStorageCalculator, setlocalStorageCalculator] = usePersistedState(
    dataHistory,
    'dataHistory',
  );
  return (
    <div>
      Historie:
      {localStorageCalculator.map((e, i) => (
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
