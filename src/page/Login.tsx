import * as React from 'react';
import {Input, Button, Form, Modal} from '@/component';
import {Binder} from '@/util'
// import {loginValidate} from '@/service'

interface IState {
  username: string,
  password: string,
  visible: boolean
}

export class Login extends React.Component<null, IState> {
  public state = {
    password: '',
    username: '',
    visible: false
  }
  public bd = new Binder(this)
  public handleSubmit = async () => {
    this.setState({
      visible: true
    })
    // Notice.info({
    //   message: '666666'
    // })
    // const data = {...this.state}
    // data.password = encrypt(data.password)
    // await loginValidate(data)
  }
  public render() {
    console.log(Form.FormItem)
    return <>
      <Modal title="biaoti" {...this.bd.modal('visible')}>
        1111
      </Modal>
      <Form>
        <Form.FormItem label="username">
          <Input {...this.bd.text('username')} />
        </Form.FormItem>
        <Form.FormItem label="password">
          <Input {...this.bd.text('password')} type="password" />
        </Form.FormItem>
        <Form.FormItem>
          <Button onClick={this.handleSubmit}>Login</Button>
        </Form.FormItem>
      </Form>
    </>
  }
}