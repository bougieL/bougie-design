import * as React from 'react'
import {classNames} from '@/utils'
import './style'

interface IProps {
  label?: string,
  labelWith?: number,
  children?: any,
  vertical?: 'center' | 'top' | 'bottom'
}

export class FormItem extends React.Component<IProps> {
  public static defaultProps: Partial<IProps> = {
    vertical: 'center'
  }
  public render() {
    const {label, labelWith, children, vertical} = this.props
    return <div className={classNames("bd-formitem", `bd-formitem-vertical${vertical}`)}>
      <div
        className="bd-formitem-label" 
        style={{
          width: labelWith + 'px'
        }}
      >{label}</div>
      {children}
    </div>
  }
}