import styled from 'styled-components';

export const KeypadContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  button {
    border-radius: 5px;
    border: 1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Button = styled.button`
  background-color: white;
  width: 65px;
  height: 30px;
  margin: 3px 10px 3px 10px;
  :hover {
    background-color: silver;
  }
`;
export const Operator = styled.button`
  background-color: rgb(51, 122, 183);
  color: white;
  width: 65px;
  height: 30px;
  margin: 3px 10px 3px 10px;
  :hover {
    background-color: RGB(37, 91, 137);
  }
`;
export const CButton = styled.button`
  background-color: lightskyblue;
  color: white;
  width: 65px;
  height: 30px;
  margin: 3px 10px 3px 10px;
  :hover {
    background-color: lightblue;
  }
`;
export const ButtonCount = styled.button`
  margin: 10px 10px 3px 10px;
  width: 92%;
  height: 30px;
  background-color: red;
  color: white;
  text-align: center;
  :hover {
    background-color: darkred;
  }
`;
