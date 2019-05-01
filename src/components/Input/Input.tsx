import * as React from 'react';

import { classNames, getPrefixCls } from '../../utils';

const prefixCls = getPrefixCls('input');

export interface IInputProps {
  className?: string;
  name?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  type?: string;
  value?: string | number;
  onChange?(evt: React.ChangeEvent<HTMLInputElement>): void;
}

export class Input extends React.Component<IInputProps> {
  public static defaultProps: Partial<IInputProps> = {
    type: 'text',
  };
  public render(): React.ReactNode {
    const {className, ...rest} = this.props;
    const inputCls = classNames(prefixCls, className);

    return (
      <input
        className={inputCls}
        {...rest}/>
    );
  }
}
