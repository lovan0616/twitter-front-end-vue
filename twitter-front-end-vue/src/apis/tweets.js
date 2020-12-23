import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  readAll() {
    return apiHelper.get('/api/tweets', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  read(tweetId) {
    return apiHelper.get(`/api/tweets/${tweetId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  post(formData) {
    return apiHelper.post(`/api/tweets`, formData, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}