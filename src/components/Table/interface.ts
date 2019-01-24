export interface ITableProps {
  columns: Array<{
    name: string,
    dataIndex?: string | number,
    render?(data: any): JSX.Element,
  }>;
  data?: object[];
}
