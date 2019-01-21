import * as React from 'react'
import {Icon} from '@/components'
import './style'

interface IProps {
  checked?: boolean,
  children?: React.ReactNode
  onChange?: (e: any) => any
}

export class CheckBox extends React.Component<IProps> {
  public render() {
    const {checked, children, onChange} = this.props
    return <label
      className="bd-checkbox">
        <input type="checkbox" onChange={onChange} checked={checked} />
        <div className="bd-checkbox-icon">
          <Icon type="checkmark" />
        </div>
        <span>{children}</span>
      </label>
  }
}