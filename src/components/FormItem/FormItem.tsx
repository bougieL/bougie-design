import * as React from 'react';
import { classNames } from '../../utils';

export interface IFormItemProps {
  label?: string;
  labelWith?: number;
  children?: React.ReactNode;
  vertical?: 'center' | 'top' | 'bottom';
}

export class FormItem extends React.Component<IFormItemProps> {
  public static defaultProps: Partial<IFormItemProps> = {
    vertical: 'center'
  };
  public render(): React.ReactNode {
    const {label, labelWith, children, vertical} = this.props;

    return <div
      className={classNames("bd-formitem", `bd-formitem-vertical${vertical}`)}>
        <div
          className="bd-formitem-label"
          style={{
            width: labelWith + 'px'
          }}
        >{label}</div>
        {children}
      </div>;
  }
}
