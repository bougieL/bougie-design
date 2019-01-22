import * as React from 'react'
import './style'

interface IProps {
  children?: React.ReactNode,
  value: any
}

export class Radio extends React.Component<IProps> {
  public render() {
    const {children, value} = this.props
    return <label className="bd-radio">
      <input type="radio" data-value={value} />
      <div className="bd-radio-icon">
        <div />
      </div>
      <span>{children}</span>
    </label>
  }
}