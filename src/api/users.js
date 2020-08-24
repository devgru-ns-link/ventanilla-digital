import request from '@/plugins/axios'

export function login (data) {
  return request({
    url: '/token/',
    public: true,
    method: 'POST',
    data
  })
}

export function refreshToken (token) {
  return request({
    url: '/refresh/',
    method: 'POST',
    data: {
      refresh: token
    }
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

export function setStudent (id, data) {
  return request({
    url: `/users/${id}/set_student/`,
    method: 'POST',
    data
  })
}

export function schoolRequest (id, data) {
  return request({
    url: `/users/${id}/school_request/`,
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    data
  })
}

