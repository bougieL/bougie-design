import * as React from 'react'
import { attachEvent, classNames, getPrefixCls } from '../../utils'
import { Icon } from '../Icon'
import { IOptionValue, selectContext } from './context'
import { Option } from './Option'

const prefixCls = getPrefixCls('select')

export interface ISelectProps {
  value?: string | number
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  style?: React.CSSProperties
  onChange?(value: string | number): void
}

interface IState {
  active: boolean
  value: IOptionValue
}

export class Select extends React.Component<ISelectProps, IState> {
  private refList: React.RefObject<HTMLUListElement> = React.createRef()
  private eventOutSideClick: ReturnType<typeof attachEvent>
  public state = {
    active: false,
    value: {
      children: undefined,
      value: this.props.value
    }
  }
  public static Option = Option
  private handleInputClick(evt: React.MouseEvent<HTMLDivElement>): void {
    const { disabled } = this.props
    if (disabled) {
      return
    }
    evt.nativeEvent.stopImmediatePropagation()
    this.setState(({ active }) => ({
      active: !active
    }))
  }
  private getOptionValue(
    value: IOptionValue,
    isDefault: boolean = false
  ): void {
    const { onChange } = this.props
    this.setState({ value })
    if (onChange && value.value && !isDefault) {
      onChange(value.value)
    }
  }
  private handleOutSideClick(): void {
    this.setState({
      active: false
    })
  }
  public componentDidMount(): void {
    this.eventOutSideClick = attachEvent(
      document,
      'click',
      this.handleOutSideClick.bind(this)
    )
  }
  public componentWillUnmount(): void {
    this.eventOutSideClick.remove()
  }
  public render(): React.ReactNode {
    const {
      active,
      value: { value, children: label }
    } = this.state
    const { children, className, disabled, style } = this.props
    const { Provider } = selectContext
    const providerValue = {
      getOptionValue: this.getOptionValue.bind(this),
      value
    }
    const selectCls = classNames(prefixCls, className, {
      [`${prefixCls}-active`]: active,
      [`${prefixCls}-disabled`]: disabled
    })

    return (
      <Provider value={providerValue}>
        <div className={selectCls} style={style}>
          <div
            onClick={this.handleInputClick.bind(this)}
            className={`${prefixCls}-val`}
          >
            <span>{label}</span>
            <Icon type="arrow-down" />
          </div>
          <ul className={`${prefixCls}-list`} ref={this.refList}>
            {children}
          </ul>
        </div>
      </Provider>
    )
  }
}
