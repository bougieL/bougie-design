import { createContext } from 'react';

interface IRadioContext {
  getRadioValue?(v: string | number): void;
  value?: string | number;
}

export const radioContext = createContext<IRadioContext>({
  getRadioValue: undefined,
  value: undefined,
});
