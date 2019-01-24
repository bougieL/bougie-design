import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Notice as Modal } from './Notice';
import './style';

interface INotice {
  type?: 'info' | 'error' | 'warning' | 'success';
  message?: string;
}

function info(props: INotice): any {
  return next(props);
}

function next({type = 'info', message = '确定'}: INotice): void {
  let wrapper = document.querySelector('.bd-notice-wrapper');
  if (!wrapper) {
    wrapper = document.createElement('div');
    wrapper.classList.add('bd-notice-wrapper');
    document.body.appendChild(wrapper);
  }
  const div = document.createElement('div');
  const component = React.createElement(Modal, {
    type,
    wrapper,
    onCancel(): void {
      ReactDOM.unmountComponentAtNode(div);
    }
  }, message);
  ReactDOM.render(component, div);
}

export const Notice = {
  info
};
