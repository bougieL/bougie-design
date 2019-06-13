import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { getPrefixCls } from '../utils'
import { Notice as NoticeComponent } from './Notice'
import './style'

const prefixCls = getPrefixCls('notice')

interface INotice {
  message?: React.ReactNode
}

interface INoticeFunc extends INotice {
  type: 'info' | 'success' | 'warning' | 'error'
}

function NoticeFunc(props: INoticeFunc): void {
  return next({ ...props })
}

function next({ type, message }: INoticeFunc): void {
  let wrapper = document.querySelector(
    `.${prefixCls}-wrapper`
  ) as HTMLDivElement
  if (!wrapper) {
    wrapper = document.createElement('div')
    wrapper.classList.add(`${prefixCls}-wrapper`)
    document.body.appendChild(wrapper)
  }
  let div: HTMLDivElement | undefined = document.createElement('div')
  const component = React.createElement(
    NoticeComponent,
    {
      type,
      wrapper,
      onCancel(): void {
        ReactDOM.unmountComponentAtNode(div as HTMLDivElement)
        div = undefined
      }
    },
    message
  )
  ReactDOM.render(component, div)
}

export const Notice = {
  open(props: INotice): void {
    NoticeFunc({
      type: 'info',
      ...props
    })
  },
  info(props: INotice): void {
    NoticeFunc({
      type: 'info',
      ...props
    })
  },
  success(props: INotice): void {
    NoticeFunc({
      type: 'success',
      ...props
    })
  },
  warning(props: INotice): void {
    NoticeFunc({
      type: 'warning',
      ...props
    })
  },
  error(props: INotice): void {
    NoticeFunc({
      type: 'error',
      ...props
    })
  }
}
