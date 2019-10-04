import { Tabs, Title } from '../../components'
import * as React from 'react'

const { TabPane } = Tabs

export const TabsD = () => (
  <>
    <Title>Tabs</Title>
    <div className="f-s tabs-wrap">
      <Tabs>
        <TabPane value="1" tab="Tab 1">
          Tab 1
        </TabPane>
        <TabPane value="2" tab="Tab 2">
          Tab 2
        </TabPane>
        <TabPane value="3" tab="Tab 3">
          Tab 3
        </TabPane>
      </Tabs>
    </div>
  </>
)
