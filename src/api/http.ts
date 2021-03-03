import axios from '@/plugin/axios'

export function post(url: string, data = {}) {
  return axios
    .post('/api' + url, data)
    .then((response: any) => {
      return response
    })
    .catch((err: any) => {
      return err
    })
}
