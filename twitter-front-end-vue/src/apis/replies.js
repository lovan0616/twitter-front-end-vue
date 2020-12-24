import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getReply(tweetId) {
    return apiHelper.get(`/api/tweets/${tweetId}/replies`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addReply(tweetId, { comment }) {
    return apiHelper.post(`/api/tweets/${tweetId}/replies`, { comment }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },

}