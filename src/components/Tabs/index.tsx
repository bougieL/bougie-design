import * as React from 'react'
import {classNames} from '../_utils'
import {TabPane} from '../TabPane'
import './style'

interface IProps {
  children?: any,
  list: Array<{
    label: string | number,
    value: string | number
  }>,
  gutter: number,
  onChange?: (data: any) => void
}

interface IState {
  active: number,
  barStyle: object,
  contentStyle: object
}

export class Tabs extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    gutter: 10
  }
  public static TabPane = TabPane
  public refHeader: React.RefObject<any> = React.createRef()
  public refScroll: React.RefObject<any> = React.createRef()
  public state = {
    active: 0,
    barStyle: {},
    contentStyle: {}
  }
  public updateBarStyle() {
    if (!this.refHeader) {
      return
    }
    const {active} = this.state
    const {gutter} = this.props
    const items = this.refHeader.current.querySelectorAll('.bd-tabs-item')
    let offset = gutter / 2
    for(let i = 0; i < active; i++) {
      offset += parseFloat(items[i].offsetWidth) + gutter
    }
    const barWidth = parseFloat(items[active].offsetWidth)
    this.setState({
      barStyle: {
        transform: `translate3d(${offset}px, 0, 0)`,
        width: `${barWidth}px`
      }
    })
  }
  public updateContentStyle() {
    if (!this.refScroll) {
      return
    }
    const scrollWidth = parseFloat(this.refScroll.current.offsetWidth)
    const {active} = this.state
    this.setState({
      contentStyle: {
        transform: `translate3d(-${scrollWidth * active}px, 0, 0)`
      }
    })
  }
  public handleItemClick(idx: number) {
    const {onChange, list} = this.props
    this.setState({
      active: idx
    }, () => {
      this.updateBarStyle()
      this.updateContentStyle()
      if (onChange) {
        onChange(list[idx])
      }
    })
  }
  public componentDidMount() {
    this.updateBarStyle()
    this.updateContentStyle()
  }
  public render() {
    const {list, children, gutter} = this.props
    const {active, barStyle, contentStyle} = this.state
    return <div className="bd-tabs">
      <div className="bd-tabs-header">
        <ul className="bd-tabs-list" ref={this.refHeader}>
          {
            list.map(({label}, i) => {
              return <li
                className={classNames('bd-tabs-item', {
                  'active': i === active
                })}
                style={{
                  margin: `0 ${gutter/2}px`
                }}
                onClick={this.handleItemClick.bind(this, i)}
                key={i}>{label}</li>
            })
          }
        </ul>
        <div className="bd-tabs-bar" style={barStyle} />
      </div>
      {
        children ? <div ref={this.refScroll} className="bd-tabs-scroll">
          <div className="bd-tabs-content" style={contentStyle}>{children}</div>
        </div> : null
      }
    </div>
  }
}