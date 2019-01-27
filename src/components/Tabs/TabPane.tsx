import * as React from 'react'
import {tabsContext} from './context'
import {classNames} from '../../utils'

export interface ITabPaneProps {
  tab?: React.ReactNode;
  value?: string | number;
  children?: React.ReactNode;
  className?: string;
}

export const TabPane = (props: ITabPaneProps) => {
  const {Consumer} = tabsContext
  return <Consumer>
      {({getTabPane}) => {
          return <TabPaneComponent {...props} getTabPane={getTabPane} />
        }
      }
    </Consumer>
}

interface ITabPaneComponentProps extends ITabPaneProps {
  getTabPane(v: any): void
}

class TabPaneComponent extends React.Component<ITabPaneComponentProps>{
  public componentDidMount(): void {
    const {tab, value, getTabPane} = this.props
    getTabPane({tab, value})
  }
  public render(): React.ReactNode {
    const {children, className} = this.props;

    return <div
      className={classNames("bd-tabpane", className)}>
        {children}
      </div>;
  }
}