import * as React from 'react'
import * as ReactDom from 'react-dom'
import {classNames} from '@/util'
import {CSSTransition} from 'react-transition-group'
import './style'

export interface IModalProps {
  visible?: boolean,
  title?: string,
  type?: string,
  onCancel?: () => void,
  onOk?: () => void,
  footer?: () => any
}

interface IState {
  entered: boolean
}

export class Modal extends React.Component<IModalProps, IState> {
  public static defaultProps: Partial<IModalProps> = {
    type: 'primary',
    visible: false
  }
  public state = {
    entered: false
  }
  public componentWillReceiveProps(nextProps: IModalProps) {
    const {visible} = nextProps
    if (visible) {
      this.setState({
        entered: visible
      })
    }
  }
  public handleOnCancel = () => {
    const {onCancel} = this.props
    this.setState({
      entered: false
    }, () => {
      if (onCancel) {
        setTimeout(onCancel, 300)
      }
    })
  }
  public render() {
    const {children, title, visible, footer} = this.props
    const {entered} = this.state
    return ReactDom.createPortal(
      <CSSTransition classNames="bd-modal-mask" timeout={0} in={entered} exit={!entered}>
        <div className={classNames("bd-modal-mask", {
          hide: !visible
        })}>
          <CSSTransition classNames="bd-modal" timeout={0} in={entered} exit={!entered}>
            <div className="bd-modal">
              <div className="bd-modal-header">
                <span className="bd-modal-title">{title}</span>
                <span className="bd-modal-close" onClick={this.handleOnCancel}>&times;</span>
              </div>
              <div className={classNames("bd-modal-content", {
                "bd-modal-content-bordernone": !footer
              })}>{children}</div>
              {footer ? <div className="bd-modal-footer">{footer()}</div> : null}
            </div>
          </CSSTransition>
        </div>
      </CSSTransition>
    , document.body)
  }
}