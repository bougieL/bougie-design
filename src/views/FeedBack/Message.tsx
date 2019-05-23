import { Button, Message, Notice, Title } from '../../components'
import * as React from 'react'

export class MessageD extends React.Component {
  public handleMessage = () => {
    Message.confirm({
      message: '你确定？'
    })
      .then(() => {
        Notice.open({
          message: '点击了确定'
        })
      })
      .catch(() => {
        Notice.open({
          message: '点击了取消'
        })
      })
  }
  public render(): React.ReactNode {
    return (
      <>
        <Title>Message</Title>
        <Button onClick={this.handleMessage}>Message</Button>
      </>
    )
  }
}
