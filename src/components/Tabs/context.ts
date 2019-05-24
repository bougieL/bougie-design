import { createContext, ReactNode } from 'react'

export interface ITabPaneValue {
  tab: string | number | ReactNode
  value?: string | number
}
interface ITabsContext {
  getTabPane?(v: ITabPaneValue): void
}

export const tabsContext = createContext<ITabsContext>({
  getTabPane: undefined
})
