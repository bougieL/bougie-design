import { createContext } from 'react'

export interface ISlideValue {
  value?: string | number
}
interface ICarouselContext {
  getSlide?(v: ISlideValue): void
}

export const carouselContext = createContext<ICarouselContext>({
  getSlide: undefined
})
