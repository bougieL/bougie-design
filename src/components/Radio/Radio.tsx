import * as React from 'react';

interface IProps {
  children?: React.ReactNode;
  value: string | number;
}

export class Radio extends React.Component<IProps> {
  public render(): React.ReactNode {
    const {children, value} = this.props;

    return <label className="bd-radio">
      <input type="radio" data-value={value} />
      <div className="bd-radio-icon">
        <div />
      </div>
      <span>{children}</span>
    </label>;
  }
}
