import { Button, Title } from '@/components';
import * as React from 'react';

export class ButtonD extends React.Component {
  public render(): React.ReactNode {
    return <>
      <Title>Button</Title>
      <div className="f-s">
        <Button>Default</Button>
        <span className="b-s" />
        <Button type="primary">Primary</Button>
        <span className="b-s" />
        <Button type="success">Success</Button>
        <span className="b-s" />
        <Button type="warning">Warning</Button>
        <span className="b-s" />
        <Button type="error">Error</Button>
        <span className="b-s" />
        <Button disabled>Disabled</Button>
        <span className="b-s" />
        <Button icon="at">Icon</Button>
        <span className="b-s" />
        <Button icon="trash" type="error">Delete</Button>
      </div>
    </>;
  }
}
