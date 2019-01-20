import * as React from 'react';
import {Route} from 'react-router-dom';

interface IProps {
  list: Array<{
    path: string,
    component?: any,
    exact?: boolean
  }>
}

export default class MyLink extends React.Component<IProps> {
  public render() {
    const {list = []} = this.props
    return <div className='bd-route'>
      {
        list.map((props, i) => {
          return <Route key={i} {...props} />
        })
      }
      </div>
  }
}