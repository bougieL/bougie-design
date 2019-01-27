import { Select, Title } from '@/components';
import * as React from 'react';

export class SelectD extends React.Component {
  public state = {
    check1: false,
    check2: false,
    check3: false,
  };
  private handleOnChange(v: any) {
    console.log(v)
  }
  public render(): React.ReactNode {
    return <>
      <Title>Select</Title>
      <Select defaultValue="bougie" onChange={this.handleOnChange.bind(this)}>
        <Select.Option value="lucy">Lucy</Select.Option>
        <Select.Option value="bougie">Bougie</Select.Option>
        <Select.Option value="katharina">Katharina</Select.Option>
      </Select>
    </>;
  }
}
