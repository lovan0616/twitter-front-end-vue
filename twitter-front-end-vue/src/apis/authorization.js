import { apiHelper } from '../utils/helpers'

export default {
  adminSignIn({ account, password }) {
    return apiHelper.post('/api/login', {
      account,
      password
    })
  }
}