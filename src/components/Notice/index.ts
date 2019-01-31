import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Notice as NoticeComponent } from './Notice';
import './style';

interface INotice {
  type?: 'info' | 'success' | 'warning' | 'error';
  message?: React.ReactNode;
}

export function Notice(props: INotice): void {
  return next({...props});
}

function next({type, message}: INotice): void {
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
