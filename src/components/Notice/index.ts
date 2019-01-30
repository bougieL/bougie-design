import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Notice as NoticeComponent } from './Notice';
import './style';

interface INotice {
  message?: React.ReactNode;
}

function info(props: INotice): void {
  return next({...props, type: 'info'});
}

function success(props: INotice): void {
  return next({...props, type: 'success'});
}

function warning(props: INotice): void {
  return next({...props, type: 'warning'});
}

function error(props: INotice): void {
  return next({...props, type: 'error'});
}

interface INoticeNext extends INotice {
  type: 'info' | 'error' | 'warning' | 'success';
}

function next({type, message}: INoticeNext): void {
  let wrapper = document.querySelector('.bd-notice-wrapper') as HTMLDivElement;
  if (!wrapper) {
    wrapper = document.createElement('div');
    wrapper.classList.add('bd-notice-wrapper');
    document.body.appendChild(wrapper);
  }
  let div: HTMLDivElement | undefined = document.createElement('div');
  const component = React.createElement(NoticeComponent, {
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
  error,
  info,
  success,
  warning,
};
