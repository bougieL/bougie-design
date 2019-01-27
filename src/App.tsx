import * as React from 'react';
import {Tabs, Title} from '@/components'
import {Usual, DataInput, DataDisplay, FeedBack, Navigation} from './views';

const {TabPane} = Tabs

const tabConfig = [{
  value: 'usual',
  tab: '通用',
  component: Usual
}, {
  value: 'navigation',
  tab: '导航',
  component: Navigation
}, {
  value: 'dataInput',
  tab: '数据录入',
  component: DataInput
}, {
  value: 'dataDisplay',
  tab: '数据展示',
  component: DataDisplay
}, {
  value: 'feedBack',
  tab: '反馈',
  component: FeedBack
}]

export const App = () =>
  <>
    <Title level={1}>YuanSheng-UI, A UI Design Language.</Title>
    <Tabs defaultValue="navigation">
      {tabConfig.map(({component, ...rest}, i) =>
        <TabPane {...rest} key={i} className="app-tabpane">{
          React.createElement(component)
        }</TabPane>
      )}
    </Tabs>
  </>
