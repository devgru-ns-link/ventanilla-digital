import request from '@/plugins/axios'

export function getStudentInfo(enrollment) {
  return request({
    url: `/students/${enrollment}/`,
    method: 'GET'
  })
}
