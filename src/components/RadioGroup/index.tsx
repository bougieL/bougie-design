import * as React from 'react'
import {Radio} from '@/components'

interface IProps {
  children?: React.ReactNode,
  onChange?: (data: any) => void,
  value?: any
}

export class RadioGroup extends React.Component<IProps> {
  public static Radio = Radio
  public render() {
    const {children} = this.props
    return <div className="bd-radiogroup">
      {children}
    </div>
  }
}