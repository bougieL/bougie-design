import { Carousel, Title } from '@/components'
import * as React from 'react'

const { Slide } = Carousel

const config = ['red', 'green', 'blue', 'orange']

export const CarouselD = () => (
  <>
    <Title>Carousel</Title>
    <Carousel>
      {config.map(v =>
        React.createElement(Slide, {
          key: v,
          style: {
            background: v,
            height: '200px'
          }
        })
      )}
    </Carousel>
  </>
)
