import * as React from 'react';
import * as ReactDom from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { classNames, delay } from '../../utils';
import { Icon } from '../Icon';

export interface IModalProps {
  title?: string;
  type: string;
  visible?: boolean;
  footer?: React.ReactNode;
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
  private handleModalClick(evt: React.MouseEvent<HTMLDivElement>): void {
    evt.stopPropagation();
  }
  public componentWillReceiveProps(nextProps: IModalProps): void {
    const {visible} = nextProps;
    if (visible) {
      this.setState({
        entered: visible,
      });
    }
  }
  public async handleOnCancel(): Promise<void> {
    const {onCancel} = this.props;
    this.setState({
      entered: false,
    });
    if (onCancel) {
      await delay(300);
      onCancel();
    }
  }
  public render(): React.ReactNode {
    const {children, title, visible, footer} = this.props;
    const {entered} = this.state;

    return (
      ReactDom.createPortal(
        <CSSTransition classNames="bd-modal-mask" timeout={0} in={entered} exit={!entered}>
          <div className={classNames("bd-modal-mask", {
              hide: !visible,
            })}
            onClick={this.handleOnCancel.bind(this)}>
            <CSSTransition classNames="bd-modal" timeout={0} in={entered} exit={!entered}>
              <div className="bd-modal" onClick={this.handleModalClick.bind(this)}>
                <div className="bd-modal-header">
                  <span className="bd-modal-title">{title}</span>
                  <Icon className="bd-modal-close" onClick={this.handleOnCancel.bind(this)} type="close"/>
                </div>
                <div className={classNames("bd-modal-content", {
                  "bd-modal-content-bordernone": !footer,
                })}>{children}</div>
                {footer ? <div className="bd-modal-footer">{footer}</div> : undefined}
              </div>
            </CSSTransition>
          </div>
        </CSSTransition>
      , document.body)
    );
  }
}
