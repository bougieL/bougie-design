import * as React from 'react';
import {ITableProps} from './interface'

export default class Header extends React.Component<ITableProps> {
  public render() {
    const {columns} = this.props
    return <thead>
      <tr>
        {
          columns.map(({name, dataIndex}, i) => {
            return <th key={i} data-index={dataIndex}>{name}</th>
          })
        }
      </tr>
    </thead>
  }
}