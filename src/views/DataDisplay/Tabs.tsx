import { Tabs, Title } from '@/components'
import * as React from 'react'

const { TabPane } = Tabs

export const TabsD = () => (
  <>
    <Title>Tabs</Title>
    <div className="f-s tabs-wrap">
      <Tabs>
        <TabPane value="1" tab="一">
          111
        </TabPane>
        <TabPane value="2" tab="二">
          222
        </TabPane>
        <TabPane value="3" tab="三">
          333
        </TabPane>
        <TabPane value="4" tab="四">
          444
        </TabPane>
      </Tabs>
    </div>
  </>
)
