import * as React from 'react';
import { classNames } from '../../utils';

export interface IIconProps {
  className?: string;
  style?: React.CSSProperties;
  theme?: 'ios' | 'logo' | 'md';
  type: string;
  onClick?(evt: React.MouseEvent<HTMLElement>): void;
}

const prefixCls = 'bd-icon';

export class Icon extends React.Component<IIconProps> {
  protected static defaultProps: Partial<IIconProps> = {
    theme: 'ios',
  };
  public render(): React.ReactNode {
    const {theme, type, className, ...rest} = this.props;
    const iconCls = classNames(prefixCls, `ion-${theme}-${type}`, className);

    return (
      <i
        className={iconCls}
        {...rest}
        />
    );
  }
}
