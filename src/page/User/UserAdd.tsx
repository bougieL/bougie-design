import * as React from 'react'
import {Form, FormItem, Input, Button, Title} from '@/component'
import {Binder, emitter, encrypt} from '@/util'
import {postUser} from '@/service'
import {USER_ADD_NEW} from '@/constant'

interface IState {
  username: string,
  password: string
}

export default class UserAdd extends React.Component<any, IState> {
  public state = {
    password: '',
    username: ''
  }
  public bd = new Binder(this)
  public handleSubmit = async () => {
    const user = {...this.state}
    user.password = encrypt(user.password)
    const data = await postUser(user)
    emitter.emit(USER_ADD_NEW, data)
  }
  public render() {
    return <>
      <Title>User Add:</Title>
      <Form>
        <FormItem label="username">
          <Input {...this.bd.text('username')} />
        </FormItem>
        <FormItem label="password">
          <Input {...this.bd.text('password')} type="password" />
        </FormItem>
        <FormItem>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </FormItem>
      </Form>
    </>
  }
}