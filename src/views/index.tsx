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

export class Components extends React.Component {
  public render(): React.ReactNode {
    return <>
      <ButtonD />
      <IconD />
      <ModalD />
      <NoticeD />
      <MessageD />
      <TabsD />
      <CheckBoxD />
      <RadioD />
      <TableD />
    </>;
  }
}
