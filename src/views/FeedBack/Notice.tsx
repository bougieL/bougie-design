import { Button, Notice, Title } from '@/components';
import * as React from 'react';

export class NoticeD extends React.Component {
  public handleNotice(type: string, message: string): void {
    Notice[type]({
      message,
    });
  }
  public render(): React.ReactNode {
    return <>
      <Title>Notice</Title>
      <Button onClick={this.handleNotice.bind(this, 'info', 'This is a info notice.')}>Info</Button>
      <span className="b-s"></span>
      <Button onClick={this.handleNotice.bind(this, 'success', 'This is a success message.')}>Success</Button>
      <span className="b-s"></span>
      <Button onClick={this.handleNotice.bind(this, 'warning', 'This is a warning message.')}>Warning</Button>
      <span className="b-s"></span>
      <Button onClick={this.handleNotice.bind(this, 'error', 'This is a error message.')}>Error</Button>
      <span className="b-s"></span>
    </>;
  }
}
