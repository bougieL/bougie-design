import * as React from 'react';
import { classNames } from '../../utils';

const prefixCls = 'bd-switch'

interface ISwitchProps {
  checked?: boolean;
  onChange?(v: boolean): void;
}

export class Switch extends React.Component<ISwitchProps> {
  private handleClick(): void {
    const {checked, onChange} = this.props
    if (onChange) {
      onChange(!checked)
    }
  }
  public render(): React.ReactNode {
    const {checked} = this.props;
    const switchCls = classNames(prefixCls, {
      [`${prefixCls}-checked`]: checked
    })

    return (
      <button
        className={switchCls}
        onClick={this.handleClick.bind(this)}
        type='button'>
        <span className={`${prefixCls}-inner`} />
      </button>
    )
  }
}