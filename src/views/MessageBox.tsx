import * as React from 'react'
import {Button, Title, Notice, MessageBox} from '@/components'

export class MessageBoxD extends React.Component {
  public handleMessageBox = () => {
    MessageBox.confirm({
      message: '你确定？'
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
    return <>
      <Title>MessageBox</Title>
      <Button onClick={this.handleMessageBox}>MessageBox</Button>
    </>
  }
}