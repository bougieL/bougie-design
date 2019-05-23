import { Notice, Select, Title } from '../../components'
import * as React from 'react'

const { Option } = Select

export class SelectD extends React.Component {
  private handleOnChange(v: string | number): void {
    Notice.open({
      message: `Select ${v}`
    })
  }
  public render(): React.ReactNode {
    return (
      <>
        <Title>Select</Title>
        <Select
          value="bougie"
          onChange={this.handleOnChange.bind(this)}
          style={{ width: 120 }}
        >
          <Option value="lucy">Lucy</Option>
          <Option value="bougie">Bougie</Option>
          <Option value="katharina" disabled>
            Katharina
          </Option>
        </Select>
        <span className="b-s" />
        <Select
          value="bougie"
          disabled
          onChange={this.handleOnChange.bind(this)}
          style={{ width: 120 }}
        >
          <Option value="lucy">Lucy</Option>
          <Option value="bougie">Bougie</Option>
          <Option value="katharina" disabled>
            Katharina
          </Option>
        </Select>
      </>
    )
  }
}
