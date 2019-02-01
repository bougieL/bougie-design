import { Button, Message, Notice, Table, Title } from '@/components';
import * as React from 'react';

interface IData {
  grade: string;
  name: string;
  score: number;
}

export class TableD extends React.Component {
  public state = {
    columns: [
      {
        dataIndex: 'name',
        name: '姓名',
      },
      {
        dataIndex: 'score',
        name: '分数',
      },
      {
        dataIndex: 'grade',
        name: '等级',
      },
      {
        name: '操作',
        render: (data: object): React.ReactNode =>
          <Button type="error" onClick={this.handleDelClick.bind(this, data)}>Delete</Button>,
      },
    ],
    data: [],
  };
  public componentDidMount(): void {
    const data: IData[] = [];
    for(let i = 0; i < 10; i+=1) {
      data.push({
        grade: ['A', 'B', 'C', 'D', 'E'][Math.round(Math.random() * 4)],
        name: '张三',
        score: Math.round(Math.random() * 100),
      });
    }
    this.setState({data});
  }
  public handleDelClick(data: IData): void {
    Message.confirm({
      message: `确定删除${data.name} ?`,
    })
    .then(() => {
      Notice({
        message: '点击了确定',
      });
    })
    .catch(() => {
      Notice({
        message: '点击了取消',
      });
    });
  }
  public render(): React.ReactNode {
    const {columns, data} = this.state;

    return <>
      <Title>Table</Title>
      <Table columns={columns} data={data} />
    </>;
  }
}
