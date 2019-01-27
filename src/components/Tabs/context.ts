import {createContext} from 'react'

interface ITabsContext {
  getTabPane(v: any): void
}

export const tabsContext = createContext<ITabsContext>({
  getTabPane() {}
})