import * as React from 'react';
import {Tabs, Title} from '@/components'
import {Usual, DataInput, DataDisplay, FeedBack} from './views';

const {TabPane} = Tabs

const tabConfig = [{
  value: 1,
  tab: '通用',
  component: Usual
}, {
  value: 2,
  tab: '数据录入',
  component: DataInput
}, {
  value: 3,
  tab: '数据展示',
  component: DataDisplay
}, {
  value: 4,
  tab: '反馈',
  component: FeedBack
}]

export const App = () =>
  <>
    <Title level={1}>YuanSheng-UI, A UI Design Language.</Title>
    <Tabs>
      {tabConfig.map(({value, tab, component}) =>
        <TabPane value={value} tab={tab} key={value} className="app-tabpane">{
          React.createElement(component)
        }</TabPane>
      )}
    </Tabs>
  </>
