import { createContext, useContext } from 'react';

export const ObjContext = createContext();

export const useObj = () => {
  return useContext(ObjContext);
};
