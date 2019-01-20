import * as React from 'react'
import {Button, Title, Notice} from '@/component'

export class NoticeD extends React.Component {
  public handleNotice = () => {
    Notice.info({
      message: 'Hello World.'
    })
  }
  public render() {
    return <>
      <Title>Notice</Title>
      <Button onClick={this.handleNotice}>Notice</Button>
    </>
  }
}