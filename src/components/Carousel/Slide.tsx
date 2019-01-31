import * as React from 'react';
import { classNames } from '../../utils';
import { carouselContext, ISlideValue } from './context';

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
  getSlide(v: ISlideValue): void;
}

class SlideComponent extends React.Component<ISlideComponentProps> {
  public componentDidMount(): void {
    const {value, getSlide} = this.props;
    getSlide({value});
  }
  public render(): React.ReactNode {
    const {children, className, style} = this.props;

    return (
      <li
        className={classNames("bd-slide", className)}
        style={style}>
        {children}
      </li>
    );
  }
}
