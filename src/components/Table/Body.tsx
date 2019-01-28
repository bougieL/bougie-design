import * as React from 'react';
import { ITableProps } from './interface';

export class Body extends React.Component<ITableProps> {
  private renderRow(data: object, i: number): React.ReactNode {
    const {columns} = this.props;

    return (
      <tr key={i}>
        {
          columns.map((obj, oi) => {
            const {dataIndex, render} = obj;
            if (dataIndex) {
              return <td key={oi}>{data[dataIndex]}</td>;
            } else if (render) {
              return <td key={oi}>{render(data)}</td>;
            } else {
              return <td key={oi} />;
            }
          })
        }
      </tr>
    );
  }
  public render(): React.ReactNode {
    const {data = []} = this.props;

    return (
      <tbody>
        {
          data.map(this.renderRow.bind(this))
        }
      </tbody>
    );
  }
}
