export interface ITableProps {
  columns: Array<{
    dataIndex?: string | number;
    name: string;
    render?(data: any): JSX.Element;
  }>;
  data?: object[];
}
