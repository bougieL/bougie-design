import http from './_axios'
import {IUser} from '@/interface'

export async function getAllUser(): Promise<IUser[]> {
  return await http({
    method: 'get',
    url: '/user/all'
  })
}

export async function loginValidate(data: object): Promise<IUser> {
  return await http({
    data,
    method: 'post',
    url: '/user/login'
  })
}

export async function deleteUserByID(id: number): Promise<any> {
  return await http({
    method: 'delete',
    params: {
      id
    },
    url: '/user',
  })
}

export async function postUser(data: object): Promise<any> {
  return await http({
    data,
    method: 'post',
    url: '/user'
  })
}