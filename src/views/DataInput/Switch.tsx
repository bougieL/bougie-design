import { Switch, Title, Notice } from '@/components';
import { Binder } from '@/utils';
import * as React from 'react';

export class SwitchD extends React.Component {
  public state = {
    checked: true,
  };
  private bd = new Binder(this);
  private cb() {
    const {checked} = this.state;
    Notice({
      message: `Switched to ${checked}`
    })
  }
  public render(): React.ReactNode {
    return <>
      <Title>Input</Title>
      <Switch {...this.bd.switch('checked', this.cb)} />
    </>;
  }
}
