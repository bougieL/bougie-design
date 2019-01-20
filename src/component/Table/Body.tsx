import * as React from 'react'
import {ITableProps} from './interface'

export default class Body extends React.Component<ITableProps> {
  public renderRow = (data: object, i: number) => {
    const {columns} = this.props
    return <tr key={i}>
      {
        columns.map((obj, oi) => {
          const {dataIndex, render} = obj
          if (dataIndex) {
            return <td key={oi}>{data[dataIndex]}</td>
          } else if (render) {
            return <td key={oi}>{render(data)}</td>
          } else {
            return <td key={oi} />
          }
        })
      }
    </tr>
  }
  public render() {
    const {data = []} = this.props
    return <tbody>
      {
        data.map(this.renderRow)
      }
    </tbody>
  }
}