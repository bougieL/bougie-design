import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { classNames, delay } from '../../utils';
import { Icon } from '../Icon';

interface IProps {
  children?: React.ReactNode;
  type: string;
  wrapper: HTMLDivElement;
  onCancel(): void;
}

const iconMap = {
  error: 'close-circle',
  info: 'information-circle',
  success: 'checkmark-circle',
  warning: 'alert',
};

interface IState {
  entered: boolean;
}

export class Notice extends React.Component<IProps, IState> {
  public state = {
    entered: false,
  };
  public async componentDidMount(): Promise<void> {
    this.setState({
      entered: true,
    });
    const {onCancel} = this.props;
    await delay(3000);
    this.setState({
      entered: false,
    });
    await delay(300);
    onCancel();
  }
  public render(): React.ReactNode {
    const {type, children, wrapper} = this.props;
    const {entered} = this.state;

    return ReactDOM.createPortal(
    <CSSTransition classNames="bd-notice" timeout={0} in={entered} exit={!entered}>
      <div
        className={classNames('bd-notice', `bd-notice-${type}`)}
      >
        <Icon type={iconMap[type]} />
        <div className="bd-notice-text">
          {children}
        </div>
      </div>
    </CSSTransition>, wrapper);
  }
}
