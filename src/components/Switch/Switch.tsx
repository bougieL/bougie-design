import * as React from 'react'
import { classNames, getPrefixCls } from '../utils'

const prefixCls = getPrefixCls('switch')

interface ISwitchProps {
  checked?: boolean
  className?: string
  onChange?(v: boolean): void
}

export class Switch extends React.Component<ISwitchProps> {
  private handleClick(): void {
    const { checked, onChange } = this.props
    if (onChange) {
      onChange(!checked)
    }
  }
  public render(): React.ReactNode {
    const { checked, className } = this.props
    const switchCls = classNames(prefixCls, className, {
      [`${prefixCls}-checked`]: checked
    })

    return (
      <button
        className={switchCls}
        onClick={this.handleClick.bind(this)}
        type="button"
      >
        <span className={`${prefixCls}-inner`} />
      </button>
    )
  }
}
