import axios from 'axios'
import {jsonToForm} from '@/util'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000,
  transformRequest: jsonToForm
})

interface IParam {
  data?: any,
  method: string,
  params?: object,
  url: string,
}

export interface IBase {
  code: number,
  data: any,
  message: string
}

export default async function http(param: IParam): Promise<any> {
  const {data: {data, code, message}} = await service(param)
  if (code < 200 || code > 300) {
    alert(message)
  }
  return data
}