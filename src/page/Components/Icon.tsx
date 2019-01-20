import * as React from 'react'
import {Icon, Title} from '@/component'
import {appendStyle} from '@/util'

export class IconD extends React.Component {
  public componentDidMount() {
    appendStyle('.icon-wrap .bd-icon', {
      color: '#39f',
      fontSize: '36px',
    })
  }
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