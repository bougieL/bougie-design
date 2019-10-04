import { Title, Skeleton } from '../../components'
import * as React from 'react'

export class SkeletonD extends React.Component {
  public render(): React.ReactNode {
    return (
      <>
        <Title>Skeleton</Title>
        <Skeleton>
          <h3>This is title</h3>
        </Skeleton>
        <Skeleton>
          <h3>This is title</h3>
        </Skeleton>
        <Skeleton>
          <h3>This is title</h3>
        </Skeleton>
      </>
    )
  }
}
