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
  post({ description }) {
    return apiHelper.post(`/api/tweets`, { description }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  update(tweetId, { description }) {
    return apiHelper.put(`/api/tweets/${tweetId}`, { description }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}