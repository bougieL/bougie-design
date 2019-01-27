import * as React from 'react';
import { classNames } from '../../utils';
import { TabPane } from './TabPane';
import {tabsContext} from './context'

export interface ITabsProps {
  children?: React.ReactNode;
  gutter: number;
  defaultValue?: string | number;
  onChange?(data: object | string | number): void;
}

interface ITabItem {
  tab: string | number;
  value: string | number;
  index: number
}

interface IState {
  active: number;
  barStyle: object;
  contentStyle: object;
  list: ITabItem[];
  isAnimate: boolean;
}

export class Tabs extends React.Component<ITabsProps, IState> {
  public static defaultProps: Partial<ITabsProps> = {
    gutter: 10,
  };
  public static TabPane = TabPane;
  public refHeader: React.RefObject<HTMLUListElement> = React.createRef();
  public refScroll: React.RefObject<HTMLDivElement> = React.createRef();
  private list: ITabItem[] = [];
  public state = {
    active: 0,
    barStyle: {},
    contentStyle: {},
    list: [],
    isAnimate: false
  };
  private handleItemClick(idx: number): void {
    const {onChange} = this.props;
    const {list} = this.state
    this.setState({
      active: idx,
    }, () => {
      this.updateBarStyle();
      this.updateContentStyle();
      if (onChange) {
        onChange(list[idx]);
      }
    });
  }
  private getTabPane(v: any) {
    const {defaultValue} = this.props
    const length = this.list.length
    let active = 0
    this.list.push({
      ...v,
      index: length
    })
    this.list.forEach(({value}, i) => {
      if (value === defaultValue) {
        active = i
      }
    })
    this.setState({
      list: this.list,
      active
    }, () => {
      this.updateBarStyle();
      this.updateContentStyle();
      setTimeout(() => {
        this.setState({
          isAnimate: true
        })
      })
    })
  }
  public render(): React.ReactNode {
    const {children, gutter} = this.props;
    const {list, active, barStyle, contentStyle, isAnimate} = this.state;
    const {Provider} = tabsContext
    const providerValue = {
      getTabPane: this.getTabPane.bind(this)
    }
    return <Provider value={providerValue}>
    <div className="bd-tabs">
      <div className="bd-tabs-header">
        <ul className="bd-tabs-list" ref={this.refHeader}>
          {
            list.map(({tab}, i) =>
              <li
                className={classNames('bd-tabs-item', {
                  active: i === active,
                  'bd-tabs-animate': isAnimate
                })}
                style={{
                  margin: `0 ${gutter/2}px`,
                }}
                onClick={this.handleItemClick.bind(this, i)}
                key={i}>{tab}
              </li>)
          }
        </ul>
        <div
          className={classNames("bd-tabs-bar", {
            'bd-tabs-animate': isAnimate
          })}
          style={barStyle} />
      </div>
      {
        children ? <div ref={this.refScroll} className="bd-tabs-scroll">
          <div
            className={classNames("bd-tabs-content", {
              'bd-tabs-animate': isAnimate
            })} 
            style={contentStyle}>{children}</div>
        </div> : undefined
      }
    </div>
    </Provider>;
  }
  private updateBarStyle(): void {
    if (!this.refHeader.current) {
      return;
    }
    const {active} = this.state;
    const {gutter} = this.props;
    const items: NodeListOf<HTMLLIElement> = this.refHeader.current.querySelectorAll('.bd-tabs-item');
    let offset = gutter / 2;
    for(let i = 0; i < active; i+=1) {
      offset += items[i].offsetWidth + gutter;
    }
    const barWidth = items[active].offsetWidth;
    this.setState({
      barStyle: {
        transform: `translate3d(${offset}px, 0, 0)`,
        width: `${barWidth}px`,
      },
    });
  }
  private updateContentStyle(): void {
    if (!this.refScroll || !this.refScroll.current) {
      return;
    }
    const scrollWidth = this.refScroll.current.offsetWidth;
    const {active} = this.state;
    this.setState({
      contentStyle: {
        transform: `translate3d(-${scrollWidth * active}px, 0, 0)`,
      },
    });
  }
}
