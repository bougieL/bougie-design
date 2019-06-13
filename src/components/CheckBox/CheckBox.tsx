import * as React from 'react'
import { classNames, getPrefixCls } from '../utils'
import { Icon } from '../Icon'

const prefixCls = getPrefixCls('checkbox')

export interface ICheckBoxProps {
  checked?: boolean
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onChange?(evt: React.ChangeEvent): void
}

export class CheckBox extends React.Component<ICheckBoxProps> {
  public render(): React.ReactNode {
    const { checked, children, className, onChange, style } = this.props
    const checkBoxCls = classNames(prefixCls, className)

    return (
      <label className={checkBoxCls} style={style}>
        <input type="checkbox" onChange={onChange} checked={checked} />
        <div className={`${prefixCls}-icon`}>
          <Icon type="checkmark" />
        </div>
        <span>{children}</span>
      </label>
    )
  }
}
