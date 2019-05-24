import * as React from 'react'
import { classNames, getPrefixCls } from '../../utils'
import { ITabPaneValue, tabsContext } from './context'

const prefixCls = getPrefixCls('tabpane')

export interface ITabPaneProps {
  style?: React.CSSProperties
  tab?: React.ReactNode
  value?: string | number
  children?: React.ReactNode
  className?: string
}

export const TabPane = (props: ITabPaneProps) => {
  const { Consumer } = tabsContext

  return (
    <Consumer>
      {({ getTabPane }) => (
        <TabPaneComponent {...props} getTabPane={getTabPane} />
      )}
    </Consumer>
  )
}

interface ITabPaneComponentProps extends ITabPaneProps {
  getTabPane?(v: ITabPaneValue): void
}

class TabPaneComponent extends React.Component<ITabPaneComponentProps> {
  public componentDidMount(): void {
    const { tab, value, getTabPane } = this.props
    if (getTabPane) {
      getTabPane({ tab, value })
    }
  }
  public render(): React.ReactNode {
    const { children, className, style } = this.props
    const tabPaneCls = classNames(prefixCls, className)

    return (
      <div className={tabPaneCls} style={style}>
        {children}
      </div>
    )
  }
}
