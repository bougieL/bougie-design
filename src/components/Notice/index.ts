import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Notice as Modal } from './Notice';
import './style';

interface INotice {
  message?: string;
  type?: 'info' | 'error' | 'warning' | 'success';
}

function info(props: INotice): void {
  return next(props);
}

function next({type = 'info', message = '确定'}: INotice): void {
  let wrapper = document.querySelector('.bd-notice-wrapper') as HTMLDivElement;
  if (!wrapper) {
    wrapper = document.createElement('div');
    wrapper.classList.add('bd-notice-wrapper');
    document.body.appendChild(wrapper);
  }
  let div: HTMLDivElement | undefined = document.createElement('div');
  const component = React.createElement(Modal, {
    type,
    wrapper,
    onCancel(): void {
      ReactDOM.unmountComponentAtNode(div as HTMLDivElement);
      div = undefined;
    },
  }, message);
  ReactDOM.render(component, div);
}

export const Notice = {
  info,
};
