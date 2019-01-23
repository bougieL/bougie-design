import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {classNames} from '../../utils'
import {CSSTransition} from 'react-transition-group'

interface IProps {
  type: string,
  children?: any,
  wrapper: any,
  onCancel: () => void
}

interface IState {
  entered: boolean
}

export class Notice extends React.Component<IProps, IState> {
  public state = {
    entered: false
  }
  public componentDidMount() {
    this.setState({
      entered: true
    })
    const {onCancel} = this.props
    setTimeout(() => {
      this.setState({
        entered: false
      }, () => {
        setTimeout(() => {
          onCancel()
        }, 300)
      })
    }, 3000)
  }
  public render() {
    const {type, children, wrapper} = this.props
    const {entered} = this.state
    return ReactDOM.createPortal(
    <CSSTransition classNames="bd-notice" timeout={0} in={entered} exit={!entered}>
      <div
        className={classNames('bd-notice', `bd-notice-${type}`)}
      >{children}</div>
    </CSSTransition>, wrapper)
  }
}