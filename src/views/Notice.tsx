import { Button, Notice, Title } from '@/components';
import * as React from 'react';

export class NoticeD extends React.Component {
  public handleNotice(): void {
    Notice.info({
      message: 'Hello World.',
    });
  }
  public render(): React.ReactNode {
    return <>
      <Title>Notice</Title>
      <Button onClick={this.handleNotice.bind(this)}>Notice</Button>
    </>;
  }
}
