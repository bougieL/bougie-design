import * as React from 'react'
import {classNames} from '../_utils'
import './style'

interface IProps {
  type: string
}

export class Icon extends React.Component<IProps> {
  public render() {
    const {type} = this.props
    return <i className={classNames('bd-icon', `ion-ios-${type}`)}/>
  }
}