import * as React from 'react';

import { classNames, getPrefixCls } from '../../utils';

import { radioContext } from './context';
import { Radio } from './Radio';

const prefixCls = getPrefixCls('radiogroup');

export interface IRadioGroupProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  value?: number | string;
  onChange?(v: string | number): void;
}

export class RadioGroup extends React.Component<IRadioGroupProps> {
  public static Radio = Radio;
  private getRadioValue = (v: string | number): void => {
    const {onChange} = this.props;
    if (onChange) {
      onChange(v);
    }
  }
  public render(): React.ReactNode {
    const { children, className, style, value } = this.props;
    const radioGroupCls = classNames(prefixCls, className);
    const { Provider } = radioContext;
    const providerValue = {
      getRadioValue: this.getRadioValue,
      value,
    };

    return (
      <Provider value={providerValue}>
        <div className={radioGroupCls} style={style}>
          {children}
        </div>
      </Provider>
    );
  }
}
