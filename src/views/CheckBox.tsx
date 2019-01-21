import * as React from 'react'
import {CheckBox, Title} from '@/components'
import {Binder} from '@/util'

export class CheckBoxD extends React.Component {
  public bd = new Binder(this)
  public state = {
    check1: false,
    check2: false,
    check3: false
  }
  public render() {
    return <>
      <Title>CheckBox</Title>
      <div className="f-s">
        <CheckBox {...this.bd.checkBox('check1')}>11</CheckBox>
        <span className="b-s" />
        <CheckBox {...this.bd.checkBox('check2')}>22</CheckBox>
        <span className="b-s" />
        <CheckBox {...this.bd.checkBox('check3')}>33</CheckBox>
        <span className="b-s" />
      </div>
    </>
  }
}