import request from '@/plugins/axios'

export function login (data) {
  return request({
    url: '/token/',
    public: true,
    method: 'POST',
    data
  })
}

export function register (data) {
  return request({
    url: '/accounts/register/',
    public: true,
    method: 'POST',
    data
  })
}

export function accountVerify (data) {
  return request({
    url: '/accounts/verify-registration/',
    public: true,
    method: 'POST',
    data
  })
}

export function getUserInfo (id) {
  return request({
    url: `/users/${id}/`,
    method: 'GET'
  })
}


