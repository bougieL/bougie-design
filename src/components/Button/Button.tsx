import * as React from 'react'
import { classNames, getPrefixCls } from '../utils'
import { Icon } from '../Icon'

const prefixCls = getPrefixCls('button')

export interface IButtonProps {
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  style?: React.CSSProperties
  icon?: string
  type?: 'default' | 'primary' | 'warning' | 'error' | 'success'
  onClick?(evt: React.MouseEvent<HTMLButtonElement>): void
}

export class Button extends React.Component<IButtonProps> {
  public static defaultProps: Partial<IButtonProps> = {
    type: 'default'
  }
  public render(): React.ReactNode {
    const {
      children,
      onClick,
      type,
      icon,
      className,
      style,
      disabled
    } = this.props
    const buttonCls = classNames(prefixCls, className, {
      [`${prefixCls}-${type}`]: !disabled,
      [`${prefixCls}-disabled`]: disabled
    })

    return (
      <button
        className={buttonCls}
        onClick={onClick}
        style={style}
        type="button"
        disabled={disabled}
      >
        {icon ? <Icon type={icon} /> : undefined}
        <span>{children}</span>
      </button>
    )
  }
}
