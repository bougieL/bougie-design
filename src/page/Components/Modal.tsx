import * as React from 'react'
import {Button, Title, Modal, Input} from '@/component'
import {Binder} from '@/util'

export class ModalD extends React.Component {
  public bd = new Binder(this)
  public state = {
    custom: false,
    footer: false,
    primary: false,
  }
  public handleBtnClick(key: string): void {
    this.setState({
      [key]: true
    })
  }
  public footer(): any {
    return <>
      <Button>确定</Button>
      <span className="b-s" />
      <Button>取消</Button>
    </>
  }
  public render() {
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
      <Modal title="Footer" footer={this.footer} {...this.bd.modal('footer')}>Primary Modal</Modal>
      <Modal title="Custom" {...this.bd.modal('custom')}>
        <Input />
      </Modal>
    </>
  }
}