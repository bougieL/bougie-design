import { Title } from '@/components';
import * as React from 'react';
import { ButtonD } from './Button';
import { CheckBoxD } from './CheckBox';
import { IconD } from './Icon';
import { MessageD } from './Message';
import { ModalD } from './Modal';
import { NoticeD } from './Notice';
import { RadioD } from './Radio';
import { TableD } from './Table';
import { TabsD } from './Tabs';
import { SelectD } from './Select';

export class Components extends React.Component {
  public render(): React.ReactNode {
    return <>
      <Title level={1}>YuanSheng-UI, A UI Design Language</Title>
      <ButtonD />
      <IconD />
      <ModalD />
      <NoticeD />
      <MessageD />
      <TabsD />
      <CheckBoxD />
      <RadioD />
      <SelectD />
      <TableD />
    </>;
  }
}
