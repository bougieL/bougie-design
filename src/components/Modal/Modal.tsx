import * as React from 'react';
import * as ReactDom from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { classNames } from '../../utils';

export interface IModalProps {
  title?: string;
  type?: string;
  visible?: boolean;
  footer?(): React.ReactNode;
  onCancel?(): void;
  onOk?(): void;
}

interface IState {
  entered: boolean;
}

export class Modal extends React.Component<IModalProps, IState> {
  public static defaultProps: Partial<IModalProps> = {
    type: 'primary',
    visible: false,
  };
  public state = {
    entered: false,
  };
  public componentWillReceiveProps(nextProps: IModalProps): void {
    const {visible} = nextProps;
    if (visible) {
      this.setState({
        entered: visible,
      });
    }
  }
  public handleOnCancel = (): void => {
    const {onCancel} = this.props;
    this.setState({
      entered: false,
    }, () => {
      if (onCancel) {
        setTimeout(onCancel, 300);
      }
    });
  }
  public render(): React.ReactNode {
    const {children, title, visible, footer} = this.props;
    const {entered} = this.state;

    return ReactDom.createPortal(
      <CSSTransition classNames="bd-modal-mask" timeout={0} in={entered} exit={!entered}>
        <div className={classNames("bd-modal-mask", {
          hide: !visible,
        })}>
          <CSSTransition classNames="bd-modal" timeout={0} in={entered} exit={!entered}>
            <div className="bd-modal">
              <div className="bd-modal-header">
                <span className="bd-modal-title">{title}</span>
                <span className="bd-modal-close" onClick={this.handleOnCancel}>&times;</span>
              </div>
              <div className={classNames("bd-modal-content", {
                "bd-modal-content-bordernone": !footer,
              })}>{children}</div>
              {footer ? <div className="bd-modal-footer">{footer()}</div> : undefined}
            </div>
          </CSSTransition>
        </div>
      </CSSTransition>
    , document.body);
  }
}
