import { Input, Title } from '@/components';
import { Binder } from '@/utils';
import * as React from 'react';

export class InputD extends React.Component {
  public state = {
    value: '',
  };
  private bd = new Binder(this);
  public render(): React.ReactNode {
    return <>
      <Title>Input</Title>
      <Input {...this.bd.text('value')} />
    </>;
  }
}
