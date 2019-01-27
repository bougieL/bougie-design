import { Radio, Title } from '@/components';
import * as React from 'react';

export class RadioD extends React.Component {
  public state = {
    check1: false,
    check2: false,
    check3: false,
  };
  public render(): React.ReactNode {
    return <>
      <Title>Radio</Title>
      <div className="f-s">
        <Radio value={11}>11</Radio>
        <span className="b-s" />
        <Radio value={22}>22</Radio>
        <span className="b-s" />
        <Radio value={33}>33</Radio>
        <span className="b-s" />
      </div>
    </>;
  }
}
