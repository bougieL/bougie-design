import * as React from 'react';

interface ISelectContext {
  getOptionValue(v: any): void;
  value?: string | number;
}

export const selectContext = React.createContext<ISelectContext>({
  getOptionValue(v: any) {},
  value: ''
})