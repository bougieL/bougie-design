import * as React from 'react';
import { Body } from './Body';
import { Header } from './Header';
import { ITableProps } from './interface';

export class Table extends React.Component<ITableProps> {
  public render(): React.ReactNode {
    const {columns = [], data = []} = this.props;

    return (
      <table className="bd-table">
        <Header columns={columns} />
        <Body columns={columns} data={data} />
      </table>
    );
  }
}
