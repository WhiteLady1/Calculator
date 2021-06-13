import React, { useEffect, useState } from 'react';
import { newRecordInHistory } from '../..';
import { dataHistory, usePersistedState } from '../../index';
import {
  KeypadContainer,
  Button,
  ButtonCount,
  Operator,
  CButton,
} from './styled';

const Keypad = ({ setNewCount }) => {
  const [localStorageCalculator, setlocalStorageCalculator] = usePersistedState(
    dataHistory,
    'dataHistory',
  );

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

  const setOperator = (e) => {
    if (numberA === null && e.target.value === '-') {
      setNumberA(e.target.value);
    } else if (numberA === null) {
      alert('Nejprve musíš zadat číslo než vybereš početní operaci');
    } else {
      newOperator
        ? console.log('operátor již nelze změnit')
        : setNewOperator(e.target.value);
    }
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
          alert(
            'Bohužel dle zákonů matematiky nelze dělit nulou. Zkus to znovu ;)',
          );
          clearConsole();
        } else {
          setResult(Number(numberA) / Number(numberB));
        }
        break;
    }
  };

  const newRecord = {
    ...newRecordInHistory,
    numberA: numberA,
    numberB: numberB,
    operator: newOperator,
    result: result,
  };

  useEffect(() => {
    console.log(`Nově je číslo A: ${numberA}`);
    setNewCount({ ...newRecord });
    if (newRecord.result !== null) {
      const newData = [...localStorageCalculator];
      newData.push(newRecord);
      setlocalStorageCalculator(newData);
      clearConsole();
    }
  }, [numberA, numberB, newOperator, result]);

  return (
    <div>
      <KeypadContainer>
        <Button value={1} onClick={addNumber}>
          1
        </Button>
        <Button value={2} onClick={addNumber}>
          2
        </Button>
        <Button value={3} onClick={addNumber}>
          3
        </Button>
        <Operator value={'+'} onClick={setOperator}>
          +
        </Operator>
        <Button value={4} onClick={addNumber}>
          4
        </Button>
        <Button value={5} onClick={addNumber}>
          5
        </Button>
        <Button value={6} onClick={addNumber}>
          6
        </Button>
        <Operator value={'-'} onClick={setOperator}>
          -
        </Operator>
        <Button value={7} onClick={addNumber}>
          7
        </Button>
        <Button value={8} onClick={addNumber}>
          8
        </Button>
        <Button value={9} onClick={addNumber}>
          9
        </Button>
        <Operator value={'*'} onClick={setOperator}>
          *
        </Operator>
        <Button value={0} onClick={addNumber}>
          0
        </Button>
        <Button value={'.'} onClick={addNumber}>
          .
        </Button>
        <CButton value={'C'} onClick={clearConsole}>
          C
        </CButton>
        <Operator value={'/'} onClick={setOperator}>
          /
        </Operator>
      </KeypadContainer>
      <ButtonCount onClick={countResult}>Spočítat</ButtonCount>
    </div>
  );
};
export default Keypad;
