import * as React from 'react'
import {classNames} from '../../utils'
import {selectContext} from './context'

export interface IOptionProps {
  value?: string | number;
  children?: React.ReactNode;
}

export const Option = (props: IOptionProps): JSX.Element => {
  const {Consumer} = selectContext
  return <Consumer>
      {({value: parentValue, getOptionValue}) => {
          return <OptionComponent {...props} parentValue={parentValue} getOptionValue={getOptionValue} />
        }
      }
    </Consumer>
}

interface IOptionComponentProps extends IOptionProps {
  parentValue?: string | number;
  getOptionValue(v: any): void
}

class OptionComponent extends React.Component<IOptionComponentProps> {
  public componentDidMount() {
    const {parentValue, value, children, getOptionValue} = this.props
    if (parentValue === value) {
      getOptionValue({value, children})
    }
  }
  public render(): React.ReactNode {
    const {children, value, parentValue, getOptionValue} = this.props
    return <li
      className={classNames('bd-option', {
        'bd-option-active': value === parentValue
      })}
      onClick={getOptionValue.bind(this, {value, children})}>
      {children}
    </li>
  }
}