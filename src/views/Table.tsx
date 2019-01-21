import * as React from 'react'
import {Button, Title, Table, Notice, MessageBox} from '@/components'

export class TableD extends React.Component {
  public state = {
    columns: [
      {
        dataIndex: 'name',
        name: '姓名'
      },
      {
        dataIndex: 'score',
        name: '分数'
      },
      {
        dataIndex: 'grade',
        name: '等级'
      },
      {
        name: '操作',
        render: (data: any) => {
          return <Button type="error" onClick={this.handleDelClick.bind(this, data)}>Delete</Button>
        }
      }
    ],
    data: []
  }
  public componentDidMount() {
    const data = []
    for(let i = 0; i < 10; i++) {
      data.push({
        grade: ['A', 'B', 'C', 'D', 'E'][Math.round(Math.random() * 4)],
        name: '张三',
        score: Math.round(Math.random() * 100)
      })
    }
    this.setState({data})
  }
  public handleDelClick = (data: any) => {
    MessageBox.confirm({
      message: `确定删除${data.name} ?`
    }).then(() => {
      Notice.info({
        message: '点击了确定'
      })
    }).catch(() => {
      Notice.info({
        message: '点击了取消'
      })
    })
  }
  public render() {
    const {columns, data} = this.state
    return <>
      <Title>Table</Title>
      <Table columns={columns} data={data} />
    </>
  }
}