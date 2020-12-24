import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  follow({ id }) {
    return apiHelper.post('/api/followships', { id }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  unfollow({ id }) {
    return apiHelper.delete(`/api/followships/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}