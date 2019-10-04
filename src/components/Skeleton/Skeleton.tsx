import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { classNames, getPrefixCls } from '../utils'

const prefixCls = getPrefixCls('skeleton')

export interface ISkeletopProps {
  children: React.ReactElement
  className?: string
  style: React.CSSProperties
}

export interface ISkeletopState {
  style: React.CSSProperties
}

export class Skeleton extends React.Component<ISkeletopProps, ISkeletopState> {
  public static defaultProps: Partial<ISkeletopProps> = {
    style: {}
  }
  private readonly refChildren: React.RefObject<HTMLElement> = React.createRef()
  public readonly state = {
    style: {}
  }
  private initStyle = () => {
    if (!this.refChildren.current) return
    const { style } = this.props
    const element = this.refChildren.current
    this.setState({
      style: {
        ...getElementStyle(element),
        ...style
      } as React.CSSProperties
    })
  }
  public componentDidMount() {
    if (!this.refChildren.current) {
      console.error(
        'Skeleton: Could not get child reference, make sure child element reference could be accessed.'
      )
      return
    }
    setTimeout(this.initStyle)
  }
  public render(): React.ReactNode {
    const { children, className } = this.props
    const { style } = this.state
    const skeletonCls = classNames(prefixCls, className)
    return (
      <>
        {ReactDOM.createPortal(
          <div className={skeletonCls} style={style}></div>,
          getSkeletonRoot()
        )}
        {React.cloneElement(children, {
          ref: this.refChildren
        })}
      </>
    )
  }
}

function getElementStyle(el: HTMLElement) {
  const { left, top, width, height } = el.getBoundingClientRect()
  const { borderRadius } = getComputedStyle(el)
  const { scrollLeft, scrollTop } = document.scrollingElement as Element
  return {
    left: scrollLeft + left,
    top: scrollTop + top,
    borderRadius,
    width,
    height
  }
}

function getSkeletonRoot() {
  const rootCls = `${prefixCls}-root`
  let rootElement = document.getElementsByClassName(rootCls)[0]
  if (!rootElement) {
    rootElement = document.createElement(rootCls)
    rootElement.classList.add(rootCls)
    document.body.appendChild(rootElement)
  }
  return rootElement
}
