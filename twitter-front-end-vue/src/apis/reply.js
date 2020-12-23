import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getTweet(tweetId) {
    return apiHelper.post(`/api/tweets/${tweetId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getReply(tweetId) {
    return apiHelper.get(`/api/tweets/${tweetId}/replies`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getUser(userId) {
    return apiHelper.get(`/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}