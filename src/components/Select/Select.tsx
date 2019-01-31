import * as React from 'react';
import { attachEvent, classNames } from '../../utils';
import { Icon } from '../Icon';
import { IOptionValue, selectContext } from './context';
import { Option } from './Option';

export interface ISelectProps {
  defaultValue?: string | number;
  children?: React.ReactNode;
  onChange?(value: string | number): void;
}

interface IState {
  active: boolean;
  value: IOptionValue;
}

export class Select extends React.Component<ISelectProps, IState> {
  private refList: React.RefObject<HTMLUListElement> = React.createRef();
  public state = {
    active: false,
    value: {
      children: undefined,
      value: this.props.defaultValue,
    },
  };
  public static Option = Option;
  private handleInputClick(evt: React.MouseEvent<HTMLDivElement>): void {
    evt.nativeEvent.stopImmediatePropagation();
    this.setState(({active}) => ({
      active: !active,
    }));
  }
  private getOptionValue(value: IOptionValue, isDefault: boolean = false): void {
    const {onChange} = this.props;
    this.setState({value});
    if (onChange && value.value && !isDefault) {
      onChange(value.value);
    }
  }
  public componentDidMount(): void {
    attachEvent(document, 'click', () => {
      this.setState({
        active: false,
      });
    });
  }
  public render(): React.ReactNode {
    const {active, value: {value, children: label}} = this.state;
    const {children} = this.props;
    const {Provider} = selectContext;
    const providerValue = {
      getOptionValue: this.getOptionValue.bind(this),
      value,
    };

    return (
      <Provider value={providerValue}>
        <div
          onClick={this.handleInputClick.bind(this)}
          className={classNames('bd-select', {
            'bd-select-active': active,
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
    );
  }
}
