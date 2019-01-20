import * as React from 'react'
import UserAll from './UserAll'
import UserAdd from './UserAdd'

export class User extends React.Component {
  public render() {
    return <>
      <UserAll />
      <UserAdd />
    </>
  }
}