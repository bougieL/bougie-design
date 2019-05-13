export interface ITableProps {
  className?: string
  style?: React.CSSProperties
  columns: Array<{
    dataIndex?: string | number
    name: string | number
    render?(data: object): React.ReactNode
  }>
  data?: object[]
}
