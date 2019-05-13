import { RadioGroup, Title } from '@/components'
import * as React from 'react'

const { Radio } = RadioGroup

export class RadioD extends React.Component {
  public state = {
    value: undefined
  }
  private handleOnChange = (value: string | number): void => {
    this.setState({
      value
    })
  }
  public render(): React.ReactNode {
    return (
      <>
        <Title>Radio</Title>
        <div className="f-s">
          <Radio value={11}>11</Radio>
          <span className="b-s" />
          <Radio value={22}>22</Radio>
          <span className="b-s" />
          <Radio value={33}>33</Radio>
          <span className="b-s" />
        </div>
        <RadioGroup
          className="f-s"
          onChange={this.handleOnChange}
          value={this.state.value}
        >
          <Radio value={11}>11</Radio>
          <span className="b-s" />
          <Radio value={22}>22</Radio>
          <span className="b-s" />
          <Radio value={33}>33</Radio>
          <span className="b-s" />
        </RadioGroup>
      </>
    )
  }
}
