import { CheckBox, Title } from '@/components'
import { Binder } from '@/utils'
import * as React from 'react'

export class CheckBoxD extends React.Component {
  public state = {
    check1: false,
    check2: false,
    check3: false
  }
  private bd = new Binder(this)
  public render(): React.ReactNode {
    return (
      <>
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
    )
  }
}
