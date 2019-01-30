import * as React from 'react';
import {} from '../../utils';

export interface IInputProps {
  name?: string;
  placeholder?: string;
  type?: string;
  value?: string | number;
  onChange?(evt: React.ChangeEvent<HTMLInputElement>): void;
}

export class Input extends React.Component<IInputProps> {
  public static defaultProps: Partial<IInputProps> = {
    type: 'text',
  };
  public render(): React.ReactNode {
    const {value, name, placeholder, type, onChange} = this.props;

    return (
      <input
        className="bd-input"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}/>
    );
  }
}
