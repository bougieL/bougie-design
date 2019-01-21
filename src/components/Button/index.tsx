import * as React from 'react'
import {Icon} from '@/components'
import { classNames } from '@/util'
import './style'

interface IProps {
  children?: string | number,
  onClick?: (evt: any) => void,
  type?: 'default' | 'primary' | 'disable' | 'warning' | 'error' | 'success',
  icon?: string
}

export class Button extends React.Component<IProps> {
  public static defaultProps: Partial<IProps>  = {
    type: 'default'
  }
  public render() {
    const {children, onClick, type, icon} = this.props
    return <button
      className={classNames('bd-button', `bd-button-${type}`)}
      onClick={onClick}
      type="button"
      disabled={type === 'disable'}>
      {icon ? <Icon type={icon} /> : null}
      <span>{children}</span>
    </button>
  }
}