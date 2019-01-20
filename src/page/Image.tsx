import * as React from 'react'
import {Form, FormItem, Upload, Title} from '@/component'

export class Image extends React.Component {
  public render() {
    return <>
      <Title>Image Add:</Title>
      <Form>
        <FormItem label="File" vertical="top">
          <Upload />
        </FormItem>
      </Form>
    </>
  }
}