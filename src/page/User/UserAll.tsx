import * as React from 'react'
import {getAllUser, deleteUserByID} from '@/service'
import {Table, ITableProps, Button, MessageBox, Title} from '@/component'
import {IUser} from '@/interface'
import {emitter} from '@/util'
import {USER_ADD_NEW} from '@/constant'

interface IState extends ITableProps {
  data: IUser[]
}

export default class UserAll extends React.Component<any, IState> {
  public state = {
    columns: [{
      dataIndex: 'id',
      name: 'Id',
    }, {
      dataIndex: 'username',
      name: 'Username'
    }, {
      name: 'Action',
      render: (data: any) => {
        return <Button type="error" onClick={this.handleDeleteClick.bind(this, data)}>Delete</Button>
      }
    }],
    data: []
  }
  public componentDidMount() {
    this.getTableData()
    emitter.on(USER_ADD_NEW, data => {
      this.getTableData()
    })
  }
  public handleDeleteClick(data: any) {
    const {username, id} = data
    MessageBox.confirm({
      message: `确定删除 ${username}？`,
      title: '提示'
    }).then(async () => {
      await deleteUserByID(id)
      this.getTableData()
    }).catch(() => {
      console.log('取消')
    })
  }
  public async getTableData() {
    this.setState({
      data: await getAllUser()
    })
  }
  public render() {
    const {columns, data} = this.state
    return <>
      <Title>User All:</Title>
      <Table columns={columns} data={data} />
    </>
  }
}