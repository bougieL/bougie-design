import * as React from 'react'
import { classNames, getPrefixCls } from '../utils'
import { Icon } from '../Icon'

const prefixCls = getPrefixCls('pagination')

export interface IPaginaitonProps {
  total: number
  pageSize: number
  current?: number
  onChange?(page: number, pageSize: number): void
}

interface IState {
  current: number
  pageTotal: number
}

export class Pagination extends React.Component<IPaginaitonProps, IState> {
  public static defaultProps: Partial<IPaginaitonProps> = {
    pageSize: 10
  }
  public state = {
    current: 1,
    pageTotal: Math.ceil(this.props.total / this.props.pageSize)
  }
  private handleOnChange(): void {
    const { current } = this.state
    const { pageSize, onChange } = this.props
    if (onChange) {
      onChange(current, pageSize)
    }
  }
  private handleItemClick(pageNum: number): void {
    this.setState(
      {
        current: pageNum
      },
      this.handleOnChange
    )
  }
  private handlePrevClick(): void {
    const { current } = this.state
    if (current > 1) {
      this.setState(
        {
          current: current - 1
        },
        this.handleOnChange
      )
    }
  }
  private handleNextClick(): void {
    const { current, pageTotal } = this.state
    if (current < pageTotal) {
      this.setState(
        {
          current: current + 1
        },
        this.handleOnChange
      )
    }
  }
  private renderItem(pageNum: number): React.ReactNode {
    const { current, pageTotal } = this.state
    const distance = Math.abs(pageNum - current)
    if (distance > 2 && pageNum !== 1 && pageNum !== pageTotal) {
      if (distance === 3) {
        return (
          <li
            key={pageNum}
            className={`${prefixCls}-item`}
            onClick={this.handleItemClick.bind(this, pageNum)}
          >
            <a>
              <Icon type="more" />
            </a>
          </li>
        )
      }

      return undefined
    }

    const itemCls = classNames(`${prefixCls}-item`, {
      [`${prefixCls}-item-active`]: pageNum === current
    })

    return (
      <li
        key={pageNum}
        className={itemCls}
        onClick={this.handleItemClick.bind(this, pageNum)}
      >
        <a>{pageNum}</a>
      </li>
    )
  }
  private renderList(): React.ReactNode {
    const { pageTotal } = this.state
    const list: React.ReactNode[] = []
    for (let i = 0; i < pageTotal; i += 1) {
      list.push(this.renderItem(i + 1))
    }

    return list
  }
  public render(): React.ReactNode {
    const { current, pageTotal } = this.state
    const prevBtnCls = classNames(`${prefixCls}-item`, {
      [`${prefixCls}-item-disable`]: current === 1
    })
    const nextBtnCls = classNames(`${prefixCls}-item`, {
      [`${prefixCls}-item-disable`]: current === pageTotal
    })

    return (
      <ul className={prefixCls}>
        <li className={prevBtnCls} onClick={this.handlePrevClick.bind(this)}>
          <Icon type="arrow-back" />
        </li>
        {this.renderList()}
        <li className={nextBtnCls} onClick={this.handleNextClick.bind(this)}>
          <Icon type="arrow-forward" />
        </li>
      </ul>
    )
  }
}
