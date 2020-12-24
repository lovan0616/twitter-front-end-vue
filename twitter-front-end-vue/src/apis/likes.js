import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  like({ tweetId }) {
    return apiHelper.post(`/api/tweets/${tweetId}/like`, null, {
        headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  unlike({ tweetId }) {
    return apiHelper.post(`/api/tweets/${tweetId}/unlike`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
}