import * as React from 'react';

import { classNames, getPrefixCls } from '../../utils';

const prefixCls = getPrefixCls('formitem');

export interface IFormItemProps {
  children?: React.ReactNode;
  label?: string;
  labelWith?: number;
  vertical?: 'center' | 'top' | 'bottom';
}

export class FormItem extends React.Component<IFormItemProps> {
  public static defaultProps: Partial<IFormItemProps> = {
    vertical: 'center',
  };
  public render(): React.ReactNode {
    const {label, labelWith, children, vertical} = this.props;
    const formItemCls = classNames(prefixCls, `${prefixCls}-vertical-${vertical}`);

    return (
      <div
        className={formItemCls}>
        <div
          className={`${prefixCls}-label`}
          style={{
            width: `${labelWith}px`,
          }}
        >{label}</div>
        {children}
      </div>
    );
  }
}
