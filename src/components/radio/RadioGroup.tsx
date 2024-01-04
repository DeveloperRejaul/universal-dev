import React, { useEffect, useState } from 'react';
import { RadioContext } from './context';

interface IRadioGroupProps {
  children: React.ReactNode;
  initialSelect: number | string;
  handleSelectValue?: (val: number|string) => void
}

export function RadioGroup ({children, handleSelectValue,initialSelect}: IRadioGroupProps){
  const [select, setSelect] = useState<string|number>(initialSelect);
  
  useEffect(()=>{
    handleSelectValue?.(select);
  },[select]);
  
  return (
    <RadioContext.Provider value={{select, setSelect}}>
      {children}
    </RadioContext.Provider>
  );
  
}
  
  