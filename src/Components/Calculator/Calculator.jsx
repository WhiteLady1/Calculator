import React, { useEffect, useState } from 'react';
import Keypad from './Keypad/Keypad';
import Console from './Console/Console';
import History from './History/History';
import { dataHistory, usePersistedState } from '../index';

const Calculator = () => {
  const [localStorageScaleList, setlocalStorageScaleList] = usePersistedState(
    dataHistory,
    'dataHistory',
  );

  const [newCount, setNewCount] = useState({});
  const [saveResult, setSaveResult] = useState(false);
  console.log(newCount.result);

  useEffect(() => {
    const newData = [...localStorageScaleList];
    newData.push(newCount);
    setlocalStorageScaleList(newData);
  }, [newCount.result]);

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

      <Keypad setNewCount={setNewCount} setSaveResult={setSaveResult} />
      <History source={localStorageScaleList} />
    </>
  );
};

export default Calculator;
