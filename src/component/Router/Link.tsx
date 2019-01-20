import * as React from 'react';
import {NavLink as Link} from 'react-router-dom';

interface IProps {
  list: Array<{
    to: string,
    name: string,
    exact?: boolean
  }>
}

export default class MyLink extends React.Component<IProps> {
  public render() {
    const {list = []} = this.props
    return <ul className="bd-menu">
      {
        list.map(({name, ...props}, i) => {
          return <li key={i} className="bd-menu-item">
            <Link {...props} activeClassName="active">{name}</Link>
          </li>
        })
      }
    </ul>
  }
}