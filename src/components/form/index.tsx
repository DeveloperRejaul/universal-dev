import { useEffect } from 'react';
import { IController, IFormParams, initialState } from './types';

const updatedState: initialState = {};

function Controller(props: IController) {
  const {render,name } = props;
  const handleChange = (inputValue: string) => {updatedState[name] = inputValue;};
  return render?.({onChange: handleChange});
}

export const useFrom = ({initialState}: IFormParams)=>{
  
  useEffect(()=>{
    for (const key in initialState) {
      if (Object.prototype.hasOwnProperty.call(initialState, key)) {
        updatedState[key]= initialState[key];
      }
    }
  },[]);

  const handleSubmit = () => {
    return updatedState;
  };
  return {Controller, state:initialState,handleSubmit};
};



