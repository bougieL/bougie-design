import * as React from 'react';

export interface IInputProps {
  value?: string | number;
  name?: string;
  placeholder?: string;
  type?: string;
  onChange?(evt: React.ChangeEvent<HTMLInputElement>): void;
}

export class Input extends React.Component<IInputProps> {
  public static defaultProps: Partial<IInputProps> = {
    type: 'text'
  };
  public handleOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(evt);
    }
  }
  public render(): React.ReactNode {
    const {value, name, placeholder, type} = this.props;

    return <input
        className="bd-input"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={this.handleOnChange}
      />;
  }
}
