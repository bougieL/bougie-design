import { Tabs, Title } from '@/components';
import * as React from 'react';
import { DataDisplay, DataInput, FeedBack, Navigation, Usual } from './views';

const {TabPane} = Tabs;

const tabConfig = [{
  component: Usual,
  tab: '通用',
  value: 'usual',
}, {
  component: Navigation,
  tab: '导航',
  value: 'navigation',
}, {
  component: DataInput,
  tab: '数据录入',
  value: 'dataInput',
}, {
  component: DataDisplay,
  tab: '数据展示',
  value: 'dataDisplay',
}, {
  component: FeedBack,
  tab: '反馈',
  value: 'feedBack',
}];

export const App = () =>
  <>
    <Title level={1}>Bougie-Design</Title>
    <Tabs defaultValue="navigation">
      {tabConfig.map(({component, ...rest}, i) =>
        <TabPane {...rest} key={i} className="app-tabpane">{
          React.createElement(component)
        }</TabPane>,
      )}
    </Tabs>
  </>;
