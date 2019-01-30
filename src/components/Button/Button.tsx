import * as React from 'react';
import { classNames } from '../../utils';
import { Icon } from '../Icon';

export interface IButtonProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  icon?: string;
  type?: 'default' | 'primary' | 'disable' | 'warning' | 'error' | 'success';
  onClick?(evt: React.MouseEvent<HTMLButtonElement>): void;
}

export class Button extends React.Component<IButtonProps> {
  public static defaultProps: Partial<IButtonProps>  = {
    type: 'default',
  };
  public render(): React.ReactNode {
    const {children, onClick, type, icon, className, style} = this.props;

    return (
      <button
        className={classNames('bd-button', `bd-button-${type}`, className)}
        onClick={onClick}
        style={style}
        type="button"
        disabled={type === 'disable'}>
        {icon ? <Icon type={icon} /> : undefined}
        <span>{children}</span>
      </button>
    );
  }
}
