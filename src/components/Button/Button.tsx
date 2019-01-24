import * as React from 'react';
import { classNames } from '../../utils';
import { Icon } from '../Icon';

export interface IButtonProps {
  children?: React.ReactNode;
  icon?: string;
  type?: 'default' | 'primary' | 'disable' | 'warning' | 'error' | 'success';
  onClick?(evt: React.MouseEvent<HTMLElement>): void;
}

export class Button extends React.Component<IButtonProps> {
  public static defaultProps: Partial<IButtonProps>  = {
    type: 'default',
  };
  public render(): React.ReactNode {
    const {children, onClick, type, icon} = this.props;

    return <button
      className={classNames('bd-button', `bd-button-${type}`)}
      onClick={onClick}
      type="button"
      disabled={type === 'disable'}>
      {icon ? <Icon type={icon} /> : undefined}
      <span>{children}</span>
    </button>;
  }
}
