import { createContext } from 'react'

export interface IOptionValue {
  value?: string | number
  children?: React.ReactNode
}
interface ISelectContext {
  getOptionValue?(v: IOptionValue): void
  value?: string | number
}

export const selectContext = createContext<ISelectContext>({
  getOptionValue: undefined,
  value: undefined
})
