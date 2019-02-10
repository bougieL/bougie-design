import { Select, Title, Notice } from '@/components';
import * as React from 'react';

export class SelectD extends React.Component {
  private handleOnChange(v: string | number): void {
    Notice.open({
      message: `Select ${v}`
    })
  }
  public render(): React.ReactNode {
    return <>
      <Title>Select</Title>
      <Select value="bougie" onChange={this.handleOnChange.bind(this)}>
        <Select.Option value="lucy">Lucy</Select.Option>
        <Select.Option value="bougie">Bougie</Select.Option>
        <Select.Option value="katharina">Katharina</Select.Option>
      </Select>
    </>;
  }
}
