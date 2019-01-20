import * as React from 'react'
import {Icon, Title} from '@/component'

export class IconD extends React.Component {
  public render() {
    return <>
      <Title>Icon</Title>
      <div className="f-s icon-wrap">
        <Icon type="add-circle-outline" />
        <span className="b-s" />
        <Icon type="cart" />
        <span className="b-s" />
        <Icon type="briefcase" />
        <span className="b-s" />
        <Icon type="cloud-upload" />
        <span className="b-s" />
      </div>
    </>
  }
}