import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getReply(tweetId) {
    return apiHelper.get(`/api/tweets/${tweetId}/replies`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // getUser(userId) {
  //   return apiHelper.get(`/api/users/${userId}`, {
  //     headers: { Authorization: `Bearer ${getToken()}` }
  //   })
  // },
  addReply({ tweetId, formData }) {
    return apiHelper.post(`/api/tweets/${tweetId}/replies`, formData, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // addLike(tweetId) {
  //   return apiHelper.post(`/api/tweets/${tweetId}/like`, null, {
  //     headers: { Authorization: `Bearer ${getToken()}` }
  //   })
  // }
}