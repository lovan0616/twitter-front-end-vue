import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  readUser({ id }) {
    return apiHelper.get(`/api/users/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}`}
    } )
  },
  readTweets({ id }) {
    return apiHelper.get(`/api/users/${id}/tweets`, {
      headers: { Authorization: `Bearer ${getToken()}`}
    })
  },
  readLikes({ id }) {
    return apiHelper.get(`/api/users/${id}/likes`, {
      headers: { Authorization: `Bearer ${getToken()}`}
    })
  },
  readRepliedTweets({ id }) {
    return apiHelper.get(`/api/users/${id}/replied_tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getCurrentUser() {
    return apiHelper.get(`/api/current_user`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  readFollowings({ id }) {
    return apiHelper.get(`/api/users/${id}/followings`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  readFollowers({ id }) {
    return apiHelper.get(`/api/users/${id}/followers`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  updateUser( id, { formData }) {
    return apiHelper.put(`/api/users/${id}`, formData, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  readTopUsers() {
    return apiHelper.get('/api/users/top', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}