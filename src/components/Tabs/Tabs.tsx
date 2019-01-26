import * as React from 'react';
import { classNames } from '../../utils';
import { TabPane } from '../TabPane';

export interface ITabsProps {
  children?: React.ReactNode;
  gutter: number;
  list: Array<{
    label: string | number;
    value: string | number;
  }>;
  onChange?(data: object | string | number): void;
}

interface IState {
  active: number;
  barStyle: object;
  contentStyle: object;
}

export class Tabs extends React.Component<ITabsProps, IState> {
  public static defaultProps: Partial<ITabsProps> = {
    gutter: 10,
  };
  public static TabPane = TabPane;
  public refHeader: React.RefObject<HTMLUListElement> = React.createRef();
  public refScroll: React.RefObject<HTMLDivElement> = React.createRef();
  public state = {
    active: 0,
    barStyle: {},
    contentStyle: {},
  };
  public componentDidMount(): void {
    this.updateBarStyle();
    this.updateContentStyle();
  }
  public handleItemClick(idx: number): void {
    const {onChange, list} = this.props;
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
  public render(): React.ReactNode {
    const {list, children, gutter} = this.props;
    const {active, barStyle, contentStyle} = this.state;

    return <div className="bd-tabs">
      <div className="bd-tabs-header">
        <ul className="bd-tabs-list" ref={this.refHeader}>
          {
            list.map(({label}, i) =>
              <li
                className={classNames('bd-tabs-item', {
                  active: i === active,
                })}
                style={{
                  margin: `0 ${gutter/2}px`,
                }}
                onClick={this.handleItemClick.bind(this, i)}
                key={i}>{label}
              </li>)
          }
        </ul>
        <div className="bd-tabs-bar" style={barStyle} />
      </div>
      {
        children ? <div ref={this.refScroll} className="bd-tabs-scroll">
          <div className="bd-tabs-content" style={contentStyle}>{children}</div>
        </div> : undefined
      }
    </div>;
  }
  public updateBarStyle(): void {
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
  public updateContentStyle(): void {
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
