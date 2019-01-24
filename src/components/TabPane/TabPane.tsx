import * as React from 'react';

interface IProps {
  children?: React.ReactNode;
}

export class TabPane extends React.Component<IProps> {
  public render(): React.ReactNode {
    const {children} = this.props;

    return <div className="bd-tabpane">{children}</div>;
  }
}
