import * as React from 'react'
import {classNames} from '../../utils'
import {Icon} from '../Icon'

export interface IPaginaitonProps {
  total: number;
  pageSize: number;
  current?: number;
  onChange?(page: number, pageSize: number): void;
}

interface IState {
  current: number;
  pageTotal: number;
}

export class Pagination extends React.Component<IPaginaitonProps, IState>{
  static defaultProps: Partial<IPaginaitonProps> = {
    pageSize: 10
  }
  public state = {
    current: 1,
    pageTotal: Math.ceil(this.props.total / this.props.pageSize)
  }
  private handleItemClick(pageNum: number): void {
    this.setState({
      current: pageNum
    })
  }
  private handlePrevClick(): void {
    const {current} = this.state
    if (current > 1) {
      this.setState({
        current: current - 1
      })
    }
  }
  private handleNextClick(): void {
    let {current, pageTotal} = this.state
    if (current < pageTotal) {
      this.setState({
        current: current + 1
      })
    }
  }
  private renderItem(pageNum: number): React.ReactNode {
    const {current, pageTotal} = this.state
    const distance = Math.abs(pageNum - current)
    if (distance > 2 && pageNum !== 1 && pageNum !== pageTotal) {
      if (distance === 3) {
        return <li key={pageNum} className={classNames('bd-pagination-item', {
            'bd-pagination-item-active': pageNum === current
          })}
          onClick={this.handleItemClick.bind(this, pageNum)}>
            <a>
              <Icon type='more' />
            </a>
          </li>
      }
      return null
    }
    return <li key={pageNum} className={classNames('bd-pagination-item', {
        'bd-pagination-item-active': pageNum === current
      })}
      onClick={this.handleItemClick.bind(this, pageNum)}>
        <a>
          {pageNum}
        </a>
      </li>
  }
  private renderList(): React.ReactNode {
    const {pageTotal} = this.state
    const list: React.ReactNode[] = []
    for(let i = 0; i < pageTotal; i += 1) {
      list.push(this.renderItem(i + 1))
    }
    return list
  }
  public render(): React.ReactNode {
    const {current, pageTotal} = this.state
    return <div
      className={classNames('bd-pagination')}>
      <ul className="bd-pagination-list">
        <li className={classNames('bd-pagination-item', {
          'bd-pagination-item-disable': current === 1
        })}
        onClick={this.handlePrevClick.bind(this)}>
          <Icon type='arrow-back' />
        </li>
        {this.renderList()}
        <li className={classNames('bd-pagination-item', {
          'bd-pagination-item-disable': current === pageTotal
        })}
        onClick={this.handleNextClick.bind(this)}>
          <Icon type='arrow-forward' />
        </li>
      </ul>
    </div>
  }
}