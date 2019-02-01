import * as React from 'react'
import {Carousel, Title} from '@/components'

const {Slide} = Carousel

const config = ['red', 'green', 'blue', 'orange'];

export const CarouselD = () =>
  <>
    <Title>Carousel</Title>
    <Carousel>
      {
        config.map(v => React.createElement(Slide, {
          key: v,
          style: {
            height: '200px',
            background: v,
          }
        }))
      }
    </Carousel>
  </>