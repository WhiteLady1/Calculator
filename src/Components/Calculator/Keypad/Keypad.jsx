import React, { useEffect, useState } from 'react';
import { newRecordInHistory } from '../..';

const Keypad = ({ setNewCount }) => {
  const [numberA, setNumberA] = useState(null);
  const [numberB, setNumberB] = useState(null);
  const [newOperator, setNewOperator] = useState('');
  const [result, setResult] = useState(null);

  const addNumber = (e) => {
    if (newOperator === '') {
      numberA
        ? setNumberA(numberA + e.target.value)
        : setNumberA(e.target.value);
    } else {
      numberB
        ? setNumberB(numberB + e.target.value)
        : setNumberB(e.target.value);
    }
  };
  const newRecord = {
    ...newRecordInHistory,
    numberA: numberA,
    numberB: numberB,
    operator: newOperator,
    result: result,
  };
  console.log(newRecord);

  useEffect(() => {
    console.log(`Nově je číslo A: ${numberA}`);
    setNewCount({ ...newRecord });
  }, [numberA, numberB, newOperator, result]);

  console.log(`číslo A ${numberA}`);
  console.log(`číslo B ${numberB}`);
  console.log(`operátor ${newOperator}`);

  const setOperator = (e) => {
    newOperator
      ? console.log('operáto již nelze změnit')
      : setNewOperator(e.target.value);
    console.log(e.target.value);
  };
  const clearConsole = () => {
    console.log('Restart kalkulačky');
    setNumberA(null);
    setNumberB(null);
    setNewOperator('');
    setResult(null);
  };
  const countResult = () => {
    switch (newOperator) {
      case '+':
        setResult(Number(numberA) + Number(numberB));
        break;
      case '-':
        setResult(Number(numberA) - Number(numberB));
        break;
      case '*':
        setResult(Number(numberA) * Number(numberB));
        break;
      case '/':
        if (numberB === '0') {
          alert('Bohužel dle zákonů matematiky nelze dělit nulou');
          clearConsole();
        } else {
          setResult(Number(numberA) / Number(numberB));
        }
        break;
    }
  };

  return (
    <div>
      <div>
        <button value={1} onClick={addNumber}>
          1
        </button>
        <button value={2} onClick={addNumber}>
          2
        </button>
        <button value={3} onClick={addNumber}>
          3
        </button>
        <button value={'+'} onClick={setOperator}>
          +
        </button>
        <button value={4} onClick={addNumber}>
          4
        </button>
        <button value={5} onClick={addNumber}>
          5
        </button>
        <button value={6} onClick={addNumber}>
          6
        </button>
        <button value={'-'} onClick={setOperator}>
          -
        </button>
        <button value={7} onClick={addNumber}>
          7
        </button>
        <button value={8} onClick={addNumber}>
          8
        </button>
        <button value={9} onClick={addNumber}>
          9
        </button>
        <button value={'*'} onClick={setOperator}>
          *
        </button>
        <button value={0} onClick={addNumber}>
          0
        </button>
        <button value={'.'} onClick={addNumber}>
          .
        </button>
        <button value={'C'} onClick={clearConsole}>
          C
        </button>
        <button value={'/'} onClick={setOperator}>
          /
        </button>
      </div>
      <div>
        <button onClick={countResult}>Spočítat</button>
      </div>
    </div>
  );
};
export default Keypad;
