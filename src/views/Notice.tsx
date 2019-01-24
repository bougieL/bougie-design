import { Button, Notice, Title } from '@/components';
import * as React from 'react';

export class NoticeD extends React.Component {
  public handleNotice = () => {
    Notice.info({
      message: 'Hello World.',
    });
  }
  public render(): React.ReactNode {
    return <>
      <Title>Notice</Title>
      <Button onClick={this.handleNotice}>Notice</Button>
    </>;
  }
}
