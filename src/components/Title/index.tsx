import * as React from 'react'
import {classNames} from '../_utils'
import './style'

interface IProps{
  level?: 1 | 2 | 3 | 4 | 5,
  children?: string
}

export class Title extends React.Component<IProps> {
  public static defaultProps = {
    level: 2
  }
  public render() {
    const {level, children} = this.props
    return React.createElement(`h${level}`, {
      className: classNames('bd-title', `bd-title-${level}`)
    }, children)
  }
}