import * as React from 'react'
import {CheckBox, Title} from '@/component'

export class CheckBoxD extends React.Component {
  public state = {
    check1: false,
    check2: false,
    check3: false
  }
  public render() {
    return <>
      <Title>CheckBox</Title>
      <div className="f-s">
        <CheckBox>11</CheckBox>
        <span className="b-s" />
        <CheckBox>22</CheckBox>
        <span className="b-s" />
        <CheckBox>33</CheckBox>
        <span className="b-s" />
      </div>
    </>
  }
}