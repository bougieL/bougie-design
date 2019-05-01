import * as React from 'react';

import { classNames, getPrefixCls } from '../../utils';

import { carouselContext, ISlideValue } from './context';

const prefixCls = getPrefixCls('slide');

export interface ISlideProps {
  value?: string | number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Slide = (props: ISlideProps) => {
  const {Consumer} = carouselContext;

  return (
    <Consumer>
      {({getSlide}) =>
        <SlideComponent {...props} getSlide={getSlide} />
      }
    </Consumer>
  );
};

interface ISlideComponentProps extends ISlideProps {
  getSlide?(v: ISlideValue): void;
}

class SlideComponent extends React.Component<ISlideComponentProps> {
  public componentDidMount(): void {
    const {value, getSlide} = this.props;
    if (getSlide) {
      getSlide({value});
    }
  }
  public render(): React.ReactNode {
    const {children, className, style} = this.props;
    const slideCls = classNames(prefixCls, className);

    return (
      <li
        className={slideCls}
        style={style}>
        {children}
      </li>
    );
  }
}
