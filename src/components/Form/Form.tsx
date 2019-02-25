import * as React from 'react';
import { classNames, getPrefixCls } from '../../utils';
import { FormItem } from '../FormItem';

const prefixCls = getPrefixCls('form');

export interface IFormProps {
  action?: string;
  children?: React.ReactNode;
  className?: string;
  method?: 'get' | 'post' | 'put' | 'delete';
}

export class Form extends React.Component<IFormProps> {
  public static FormItem = FormItem;
  public render(): React.ReactNode {
    const {children, className} = this.props;
    const formCls = classNames(prefixCls, className);

    return (
      <form className={formCls} autoComplete="off">
        {children}
      </form>
    );
  }
}
