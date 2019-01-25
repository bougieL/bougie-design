export interface ITableProps {
  columns: Array<{
    dataIndex?: string | number;
    name: string | number;
    render?(data: object): React.ReactNode;
  }>;
  data?: object[];
}
