import * as React from 'react'
import './style'

interface IProps {
  value?: string | number,
  onChange?: (val: any, target: any) => void,
  name?: string,
  placeholder?: string,
  type?: string
}

export class Input extends React.Component<IProps> {
  public static defaultProps: Partial<IProps> = {
    type: 'text'
  }
  public handleOnChange = (evt: any) => {
    const {onChange} = this.props
    if (onChange) {
      onChange(evt.target.value, evt.target)
    }
  }
  public render() {
    const {value, name, placeholder, type} = this.props
    return <input 
      className="bd-input" 
      type={type}
      placeholder={placeholder} 
      name={name} 
      value={value} 
      onChange={this.handleOnChange}
    />
  }
}