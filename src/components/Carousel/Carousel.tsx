import * as React from 'react';
import { classNames } from '../../utils';
import { carouselContext, ISlideValue } from './context';
import { Slide } from './Slide';

export interface ICarouselProps {
  children?: React.ReactNode;
  className?: string;
  defaultValue?: string | number;
  onChange?(data: object | string | number): void;
}

const prefixCls = 'bd-carousel';

interface ISlideItem {
  value?: string | number;
  index: number;
}

interface IState {
  activeIndex: number;
  contentStyle: object;
  slideList: ISlideItem[];
  isAnimate: boolean;
}

export class Carousel extends React.Component<ICarouselProps, IState> {
  public refScroll: React.RefObject<HTMLDivElement> = React.createRef();
  private slideList: ISlideItem[] = [];
  public state = {
    activeIndex: 0,
    contentStyle: {},
    isAnimate: false,
    slideList: [],
  };
  public static Slide = Slide;
  private getSlide(v: ISlideValue): void {
    const {defaultValue} = this.props;
    const length = this.slideList.length;
    this.slideList.push({
      ...v,
      index: length,
    });
    this.setState({
      slideList: this.slideList,
    });
  }
  private renderIndicator(): React.ReactNode {
    return (
      <>

      </>
    );
  }
  public render(): React.ReactNode {
    const {children, className} = this.props;
    const {contentStyle} = this.state;
    const {Provider} = carouselContext;
    const providerValue = {
      getSlide: this.getSlide.bind(this),
    };
    const carouselCls = classNames(prefixCls, className);

    return (
      <Provider value={providerValue}>
        <div className={carouselCls}>
          <ul className={`${prefixCls}-list`} style={contentStyle}>
            {children}
          </ul>
          <ul className={`${prefixCls}-indicator`}>
            {this.renderIndicator.bind(this)}
          </ul>
        </div>
      </Provider>
    );
  }
}
