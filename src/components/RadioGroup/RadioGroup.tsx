import * as React from 'react';
import { Radio } from '../Radio';

interface IProps {
  children?: React.ReactNode;
  value?: string;
  onChange?(evt: React.ChangeEvent<HTMLInputElement>): void;
}

export class RadioGroup extends React.Component<IProps> {
  public static Radio = Radio;
  public render(): React.ReactNode {
    const {children} = this.props;

    return <div className="bd-radiogroup">
      {children}
    </div>;
  }
}
