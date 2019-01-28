import * as React from 'react';
import { Icon } from '../Icon';

export interface ICheckBoxProps {
  checked?: boolean;
  children?: React.ReactNode;
  onChange?(evt: React.ChangeEvent): void;
}

export class CheckBox extends React.Component<ICheckBoxProps> {
  public render(): React.ReactNode {
    const {checked, children, onChange} = this.props;

    return (
      <label
        className="bd-checkbox">
          <input type="checkbox" onChange={onChange} checked={checked} />
          <div className="bd-checkbox-icon">
            <Icon type="checkmark" />
          </div>
          <span>{children}</span>
      </label>
    );
  }
}
