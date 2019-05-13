import * as React from 'react'
import { classNames, getPrefixCls } from '../../utils'
import { Icon } from '../Icon'
import { carouselContext, ISlideValue } from './context'
import { Slide } from './Slide'

const prefixCls = getPrefixCls('carousel')

export interface ICarouselProps {
  children?: React.ReactNode
  className?: string
  defaultValue?: string | number
  onChange?(data: object | string | number): void
}

interface ISlideItem {
  value?: string | number
  index: number
}

interface IState {
  activeIndex: number
  contentStyle: object
  slideList: ISlideItem[]
  isAnimate: boolean
}

export class Carousel extends React.Component<ICarouselProps, IState> {
  public refScroll: React.RefObject<HTMLDivElement> = React.createRef()
  private slideList: ISlideItem[] = []
  private slideInterval: NodeJS.Timer | undefined
  public state = {
    activeIndex: 0,
    contentStyle: {},
    isAnimate: false,
    slideList: []
  }
  public static Slide = Slide
  private getSlide(v: ISlideValue): void {
    const length = this.slideList.length
    this.slideList.push({
      ...v,
      index: length
    })
    this.setState({
      slideList: this.slideList
    })
  }
  private handleIndicatorItemClick(index: number): void {
    this.setState(
      {
        activeIndex: index
      },
      this.updateContentStyle
    )
  }
  private renderIndicator(): React.ReactNode {
    const { slideList, activeIndex } = this.state
    const indicatorPrefixCls = `${prefixCls}-indicator`

    return (
      <ul className={indicatorPrefixCls}>
        {slideList.map(({ index }) => {
          const iCls = classNames(`${indicatorPrefixCls}-item`, {
            [`${indicatorPrefixCls}-item-active`]: index === activeIndex
          })

          return (
            <li
              key={index}
              className={iCls}
              onClick={this.handleIndicatorItemClick.bind(this, index)}
            />
          )
        })}
      </ul>
    )
  }
  private renderBtn(): React.ReactNode {
    const btnPrefixCls = `${prefixCls}-btn`

    return (
      <>
        <Icon
          onClick={this.slidePrev.bind(this)}
          className={classNames(btnPrefixCls, `${btnPrefixCls}-prev`)}
          type="arrow-back"
        />
        <Icon
          onClick={this.slideNext.bind(this)}
          className={classNames(btnPrefixCls, `${btnPrefixCls}-next`)}
          type="arrow-forward"
        />
      </>
    )
  }
  private updateContentStyle(): void {
    if (!this.refScroll || !this.refScroll.current) {
      return
    }
    const scrollWidth = this.refScroll.current.offsetWidth
    const { activeIndex } = this.state
    this.setState({
      contentStyle: {
        transform: `translate3d(-${scrollWidth * activeIndex}px, 0, 0)`
      }
    })
  }
  private slidePrev(): void {
    const { activeIndex, slideList } = this.state
    this.setState(
      {
        activeIndex: activeIndex <= 0 ? slideList.length - 1 : activeIndex - 1
      },
      this.updateContentStyle
    )
  }
  private slideNext(): void {
    const { activeIndex, slideList } = this.state
    this.setState(
      {
        activeIndex: activeIndex >= slideList.length - 1 ? 0 : activeIndex + 1
      },
      this.updateContentStyle
    )
  }
  private slideStart(): void {
    if (this.slideInterval) {
      return
    }
    this.slideInterval = setInterval(this.slideNext.bind(this), 3000)
  }
  private slideStop(): void {
    this.slideInterval && clearInterval(this.slideInterval)
    this.slideInterval = undefined
  }
  public componentDidMount(): void {
    this.updateContentStyle()
    this.slideStart()
  }
  public render(): React.ReactNode {
    const { children, className } = this.props
    const { contentStyle } = this.state
    const { Provider } = carouselContext
    const providerValue = {
      getSlide: this.getSlide.bind(this)
    }
    const carouselCls = classNames(prefixCls, className)

    return (
      <Provider value={providerValue}>
        <div
          className={carouselCls}
          onMouseEnter={this.slideStop.bind(this)}
          onMouseLeave={this.slideStart.bind(this)}
        >
          <div className={`${prefixCls}-scroll`} ref={this.refScroll}>
            <ul className={`${prefixCls}-list`} style={contentStyle}>
              {children}
            </ul>
          </div>
          {this.renderIndicator()}
          {this.renderBtn()}
        </div>
      </Provider>
    )
  }
}
