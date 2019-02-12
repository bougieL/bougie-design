import * as React from 'react';
import * as ReactDom from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { classNames, delay, getPrefixCls } from '../../utils';
import { Icon } from '../Icon';

const prefixCls = getPrefixCls('modal');

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
        <CSSTransition classNames={`${prefixCls}-mask`} timeout={0} in={entered} exit={!entered}>
          <div className={classNames(`${prefixCls}-mask`, {
              hide: !visible,
            })}
            onClick={this.handleOnCancel.bind(this)}>
            <CSSTransition classNames={prefixCls} timeout={0} in={entered} exit={!entered}>
              <div className={prefixCls} onClick={this.handleModalClick.bind(this)}>
                <div className={`${prefixCls}-header`}>
                  <span className={`${prefixCls}-title`}>{title}</span>
                  <Icon className={`${prefixCls}-close`} onClick={this.handleOnCancel.bind(this)} type="close"/>
                </div>
                <div className={classNames(`${prefixCls}-content`, {
                  [`${prefixCls}-content-bordernone`]: !footer,
                })}>{children}</div>
                {footer ? <div className={`${prefixCls}-footer`}>{footer}</div> : undefined}
              </div>
            </CSSTransition>
          </div>
        </CSSTransition>
      , document.body)
    );
  }
}
