import * as React from 'react'
import Header from './Header'
import Body from './Body'
import {ITableProps} from './interface'
import './style'

export class Table extends React.Component<ITableProps> {
  public render() {
    const {columns = [], data = []} = this.props
    return <table className="bd-table">
      <Header columns={columns} />
      <Body columns={columns} data={data} />
    </table>
  }
}

export * from './interface'