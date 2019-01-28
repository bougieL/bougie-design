import * as React from 'react';

export interface IOptionValue {
  value?: string | number;
  children?: React.ReactNode;
}
interface ISelectContext {
  getOptionValue(v: IOptionValue): void;
  value?: string | number;
}

export const selectContext = React.createContext<ISelectContext>({
  getOptionValue(v: IOptionValue): void {
    alert(v);
  },
  value: '',
});
