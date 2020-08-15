import request from '@/plugins/axios'

export function login (data) {
  return request({
    url: '/token/',
    method: 'POST',
    data
  })
}

export function register (data) {
  return request({
    url: '/accounts/register/',
    method: 'POST',
    data
  })
}