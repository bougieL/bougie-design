import * as React from 'react';
import {classNames, attachEvent} from '../../utils';
import {selectContext} from './context';
import {Option} from './Option'
import {Icon} from '../Icon'

export interface ISelectProps {
  defaultValue?: string | number;
  children?: React.ReactNode;
  onChange?(value: string | number): void;
}

interface IState {
  active: boolean
  value: {
    value?: string | number,
    children?: React.ReactNode
  }
}

export class Select extends React.Component<ISelectProps, IState> {
  static Option = Option
  private refList: React.RefObject<HTMLUListElement> = React.createRef()
  public state = {
    active: false,
    value: {
      value: this.props.defaultValue,
      children: undefined as React.ReactNode
    }
  }
  public componentDidMount(): void {
    attachEvent(document,'click', () => {
      this.setState({
        active: false
      })
    })
  }
  public handleInputClick(evt: React.MouseEvent<HTMLDivElement>): void {
    evt.nativeEvent.stopImmediatePropagation()
    this.setState(({active}) => ({
      active: !active
    }))
  }
  public getOptionValue(value: any): void {
    const {onChange} = this.props
    this.setState({value})
    if (onChange) {
      onChange(value)
    }
  }
  public render(): React.ReactNode {
    const {active, value: {value, children: label}} = this.state
    const {children} = this.props
    const {Provider} = selectContext
    const providerValue = {
      getOptionValue: this.getOptionValue.bind(this),
      value
    }
    return <Provider value={providerValue}>
      <div
        onClick={this.handleInputClick.bind(this)}
        className={classNames('bd-select', {
          active
        })}>
        <div className="bd-select-val">
          <span>{label}</span>
          <Icon type="arrow-down" />
        </div>
        <ul className="bd-select-list" ref={this.refList}>
          {children}
        </ul>
      </div>
    </Provider>
  }
}