import React from 'react';
import Record from './Record/Record';

const dataHistory = [
  { numberA: '0.8', numberB: '2.5', operator: '+', result: '3.3' },
  { numberA: '96', numberB: '85', operator: '*', result: '8160' },
  { numberA: '5', numberB: '9', operator: '-', result: '-4' },
  { numberA: '0', numberB: '6', operator: '-', result: '6' },
  { numberA: '32', numberB: '3', operator: '+', result: '35' },
  { numberA: '8', numberB: '4', operator: '*', result: '32' },
  { numberA: '6', numberB: '6', operator: '*', result: '36' },
  { numberA: '25', numberB: '6', operator: '+', result: '31' },
  {
    numberA: '123456789',
    numberB: '987654321',
    operator: '+',
    result: '11111111110',
  },
  { numberA: '0.816', numberB: '2', operator: '+', result: '2.816' },
];

const History = () => {
  return (
    <div>
      Historie:
      {dataHistory.map((e, i) => (
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
