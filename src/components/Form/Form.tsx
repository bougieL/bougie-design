import * as React from 'react';
import { FormItem } from '../FormItem';

export interface IFormProps {
  children?: React.ReactNode;
  action?: string;
  method?: 'get' | 'post' | 'put' | 'delete';
}

export class Form extends React.Component<IFormProps> {
  public static FormItem = FormItem;
  public render(): React.ReactNode {
    const {children} = this.props;

    return <form className="db-form" autoComplete="off">
      {children}
    </form>;
  }
}
