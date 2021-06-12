import React from 'react';
import Button from './Button/Button';

const Keypad = (props) => {
  const addNumber = (e) => {
    console.log(e.target.value);
  };
  const setOperator = (e) => {
    console.log(e.target.value);
  };
  const clearConsole = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <div>
        <Button label={'1'} onClick={addNumber} />
        <Button label={'2'} onClick={addNumber} />
        <Button label={'3'} onClick={addNumber} />
        <Button label={'+'} onClick={setOperator} />

        <Button label={'4'} onClick={addNumber} />
        <Button label={'5'} onClick={addNumber} />
        <Button label={'6'} onClick={addNumber} />
        <Button label={'-'} onClick={setOperator} />

        <Button label={'7'} onClick={addNumber} />
        <Button label={'8'} onClick={addNumber} />
        <Button label={'9'} onClick={addNumber} />
        <Button label={'*'} onClick={setOperator} />

        <Button label={'0'} onClick={addNumber} />
        <Button label={'.'} onClick={addNumber} />
        <Button label={'C'} onClick={clearConsole} />
        <Button label={'/'} onClick={setOperator} />
      </div>
      <div>
        <Button label={'Spočítat'} />
      </div>
    </div>
  );
};
export default Keypad;
