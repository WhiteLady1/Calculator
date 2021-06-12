import React from 'react';

const Record = (props) => {
  return (
    <div>
      {props.numberA} {props.operator} {props.numberB} = {props.result}
    </div>
  );
};
export default Record;
