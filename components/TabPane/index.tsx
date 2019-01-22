import * as React from 'react'
import './style'

interface IProps {
  children?: any
}

export class TabPane extends React.Component<IProps> {
  public render() {
    const {children} = this.props
    return <div className="bd-tabpane">{children}</div>
  }
}