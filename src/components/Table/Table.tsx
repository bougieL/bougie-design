import * as React from 'react'
import { classNames, getPrefixCls } from '../utils'
import { Body } from './Body'
import { Header } from './Header'
import { ITableProps } from './interface'

const prefixCls = getPrefixCls('table')

export class Table extends React.Component<ITableProps> {
  public render(): React.ReactNode {
    const { columns = [], data = [], className, ...rest } = this.props
    const tableCls = classNames(prefixCls, className)

    return (
      <table className={tableCls} {...rest}>
        <Header columns={columns} />
        <Body columns={columns} data={data} />
      </table>
    )
  }
}
