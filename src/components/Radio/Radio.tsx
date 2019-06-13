import * as React from 'react'
import { classNames, getPrefixCls } from '../utils'
import { radioContext } from './context'

const prefixCls = getPrefixCls('radio')

export interface IRadioProps {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  value: string | number
}

export const Radio = (props: IRadioProps) => {
  const { Consumer } = radioContext

  return (
    <Consumer>
      {({ value: parentValue, getRadioValue }) => (
        <RadioComponent
          {...props}
          parentValue={parentValue}
          getRadioValue={getRadioValue}
        />
      )}
    </Consumer>
  )
}

interface IRadioComponentProps extends IRadioProps {
  parentValue?: string | number
  getRadioValue?(v: string | number): void
}

class RadioComponent extends React.Component<IRadioComponentProps> {
  private handleOnChange = (): void => {
    const { getRadioValue, value } = this.props
    if (!getRadioValue) {
      return
    }
    getRadioValue(value)
  }
  private handleChecked = (): object => {
    const { parentValue, getRadioValue, value } = this.props
    if (!getRadioValue) {
      return {}
    }

    return {
      checked: parentValue === value
    }
  }
  public render(): React.ReactNode {
    const { children, className, style, value } = this.props
    const radioCls = classNames(prefixCls, className)

    return (
      <label className={radioCls} style={style}>
        <input
          type="radio"
          value={value}
          {...this.handleChecked()}
          onChange={this.handleOnChange}
        />
        <div className={`${prefixCls}-icon`}>
          <div />
        </div>
        <span>{children}</span>
      </label>
    )
  }
}
