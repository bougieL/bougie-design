import { Button, Input, Modal, Title } from '@/components';
import { Binder } from '@/utils';
import * as React from 'react';

export class ModalD extends React.Component {
  public bd = new Binder(this);
  public state = {
    custom: false,
    footer: false,
    primary: false,
  };
  public handleBtnClick(key: string): void {
    this.setState({
      [key]: true,
    });
  }
  public render(): React.ReactNode {
    return <>
        <Title>Modal</Title>
        <div className="f-s">
          <Button type="primary" onClick={this.handleBtnClick.bind(this, 'primary')}>Primary</Button>
          <span className="b-s" />
          <Button type="success" onClick={this.handleBtnClick.bind(this, 'footer')}>footer</Button>
          <span className="b-s" />
          <Button type="warning" onClick={this.handleBtnClick.bind(this, 'custom')}>custom</Button>
        </div>
        <Modal title="Primary" {...this.bd.modal('primary')}>Primary Modal</Modal>
        <Modal title="Footer" {...this.bd.modal('footer')}
          footer={(
            <>
              <Button>确定</Button>
              <span className="b-s" />
              <Button>取消</Button>
            </>
          )}>
        Primary Modal</Modal>
        <Modal title="Custom" {...this.bd.modal('custom')}>
          <Input />
        </Modal>
      </>;
  }
}
