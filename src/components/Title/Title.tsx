import * as React from 'react'
import { classNames, getPrefixCls } from '../../utils'

const prefixCls = getPrefixCls('title')

interface IProps {
  children?: string
  className?: string
  level?: 1 | 2 | 3 | 4 | 5
  style?: React.CSSProperties
}

export class Title extends React.Component<IProps> {
  public static defaultProps = {
    level: 2
  }
  public render(): React.ReactNode {
    const { level, children, className, ...rest } = this.props
    const titleCls = classNames(prefixCls, `${prefixCls}-${level}`, className)

    return React.createElement(
      `h${level}`,
      {
        className: titleCls,
        ...rest
      },
      children
    )
  }
}
