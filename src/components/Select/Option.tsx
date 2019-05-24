import * as React from 'react'
import { classNames, getPrefixCls } from '../../utils'
import { IOptionValue, selectContext } from './context'

const preifxCls = getPrefixCls('option')

export interface IOptionProps {
  value?: string | number
  children?: React.ReactNode
  className?: string
  disabled?: boolean
}

export const Option = (props: IOptionProps): JSX.Element => {
  const { Consumer } = selectContext

  return (
    <Consumer>
      {({ value: parentValue, getOptionValue }) => (
        <OptionComponent
          {...props}
          parentValue={parentValue}
          getOptionValue={getOptionValue}
        />
      )}
    </Consumer>
  )
}

interface IOptionComponentProps extends IOptionProps {
  parentValue?: string | number
  getOptionValue?(v: IOptionValue, isDefault: boolean): void
}

class OptionComponent extends React.Component<IOptionComponentProps> {
  private handleOptionClick(evt: React.MouseEvent<HTMLLIElement>): void {
    const { getOptionValue, value, children, disabled } = this.props
    if (disabled) {
      evt.nativeEvent.stopImmediatePropagation()

      return
    }
    if (getOptionValue) {
      getOptionValue({ value, children }, false)
    }
  }
  public componentDidMount(): void {
    const { parentValue, value, children, getOptionValue } = this.props
    if (parentValue === value && getOptionValue) {
      getOptionValue({ value, children }, true)
    }
  }
  public render(): React.ReactNode {
    const { children, value, parentValue, className, disabled } = this.props
    const optionCls = classNames(preifxCls, className, {
      [`${preifxCls}-active`]: value === parentValue,
      [`${preifxCls}-disabled`]: disabled
    })

    return (
      <li className={optionCls} onClick={this.handleOptionClick.bind(this)}>
        {children}
      </li>
    )
  }
}
