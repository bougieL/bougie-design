import * as React from 'react';
import { classNames } from '../../utils';

interface IProps {
  children?: string;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5;
  style?: React.CSSProperties;
}

export class Title extends React.Component<IProps> {
  public static defaultProps = {
    level: 2,
  };
  public render(): React.ReactNode {
    const {level, children, className, ...rest} = this.props;

    return (
      React.createElement(`h${level}`, {
        className: classNames('bd-title', `bd-title-${level}`, className),
        ...rest,
      }, children)
    );
  }
}
