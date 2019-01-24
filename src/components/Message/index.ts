import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Message as Modal } from './Message';

interface IConfirm {
  title?: string;
  message?: string;
}

function confirm(props: IConfirm): any {
  return next(props);
}

function next({title = '提示', message = '确定'}: IConfirm): Promise<any> {
  return new Promise((resolve, reject) => {
    let div: any = document.createElement('div');
    const component = React.createElement(Modal, {
      onCancel: () => {
        ReactDOM.unmountComponentAtNode(div);
        div = null;
      },
      promise: {
        reject,
        resolve,
      },
      title
    }, message);
    ReactDOM.render(component, div);
  });
}

export const Message = {
  confirm
};
