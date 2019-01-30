import * as React from 'react';
import { classNames } from '../../utils';
import { Icon } from '../Icon';

export interface ICheckBoxProps {
  checked?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onChange?(evt: React.ChangeEvent): void;
}

export class CheckBox extends React.Component<ICheckBoxProps> {
  public render(): React.ReactNode {
    const {checked, children, className, onChange, style} = this.props;

    return (
      <label
        className={classNames("bd-checkbox", className)}
        style={style}>
        <input type="checkbox" onChange={onChange} checked={checked} />
        <div className="bd-checkbox-icon">
          <Icon type="checkmark" />
        </div>
        <span>{children}</span>
      </label>
    );
  }
}
