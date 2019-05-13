import * as React from 'react'
import { classNames, getPrefixCls } from '../../utils'
import { Icon } from '../Icon'

const prefixCls = getPrefixCls('tag')

export interface ITagProps {
  children?: React.ReactNode
  className?: string
  closable?: boolean
  style?: React.CSSProperties
  visible?: boolean
  onClose?(): void
}

export class Tag extends React.Component<ITagProps> {
  public static defaultProps: Partial<ITagProps> = {
    visible: true
  }
  public render(): React.ReactNode {
    const { children, className, closable, style, visible } = this.props
    const tagCls = classNames(prefixCls, className, {
      [`${prefixCls}-hide`]: !visible
    })

    return (
      <div className={tagCls} style={style}>
        <span className={`${prefixCls}-text`}>{children}</span>
        {closable ? <Icon type="close" /> : undefined}
      </div>
    )
  }
}
