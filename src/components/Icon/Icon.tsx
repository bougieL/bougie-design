import * as React from 'react';
import { classNames } from '../../utils';

export interface IIconProps {
  type: string;
}

export class Icon extends React.Component<IIconProps> {
  public render(): React.ReactNode {
    const {type} = this.props;

    return (
      <i className={classNames('bd-icon', `ion-ios-${type}`)}/>
    );
  }
}
