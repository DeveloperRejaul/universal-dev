import { createContext } from 'react';

interface RadioContextProps {
  select: string | number;
  setSelect: React.Dispatch<React.SetStateAction<string | number>>;
}
    
export const RadioContext = createContext({} as RadioContextProps);
  