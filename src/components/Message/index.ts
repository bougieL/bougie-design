import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Message as Modal } from './Message';

interface IConfirm {
  message?: string;
  title?: string;
}

function confirm(props: IConfirm): Promise<() => void> {
  return next(props);
}

function next({title = '提示', message = '确定'}: IConfirm): Promise<() => void> {
  return new Promise((resolve, reject) => {
    let div: HTMLDivElement | undefined = document.createElement('div');
    const component = React.createElement(Modal, {
      onCancel(): void {
        ReactDOM.unmountComponentAtNode(div as HTMLDivElement);
        div = undefined;
      },
      promise: {
        reject,
        resolve,
      },
      title,
    }, message);
    ReactDOM.render(component, div);
  });
}

export const Message = {
  confirm,
};
