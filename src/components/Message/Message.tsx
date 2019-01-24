import * as React from 'react';
import { Button } from '../Button';
import { IModalProps, Modal } from '../Modal';

interface IProps extends IModalProps {
  promise: {
    reject(): void;
    resolve(): void;
  };
}

interface IState {
  visible: boolean;
}

export class Message extends React.Component<IProps, IState> {
  public state = {
    visible: false
  };
  public ref: React.RefObject<any> = React.createRef();
  public handleFooterClick(action: string): void {
    const {promise: {resolve, reject}, onCancel} = this.props;
    if (onCancel) {
      this.ref.current.handleOnCancel();
    }
    if (action === 'cancel' && reject) {
      reject();
    } else if(action === 'confirm' && resolve) {
      resolve();
    }
  }
  public renderFooter = (): React.ReactNode => {
    return <>
      <Button onClick={this.handleFooterClick.bind(this, 'cancel')}>取消</Button>
      <span className="b-s" />
      <Button type="primary" onClick={this.handleFooterClick.bind(this, 'confirm')}>确定</Button>
    </>;
  }
  public componentDidMount(): void {
    this.setState({
      visible: true
    });
  }
  public render(): React.ReactNode {
    const {children, title, onCancel} = this.props;
    const {visible} = this.state;

    return <Modal
        ref={this.ref}
        title={title}
        visible={visible}
        footer={this.renderFooter}
        onCancel={onCancel}
        >{children}
      </Modal>;
  }
}
