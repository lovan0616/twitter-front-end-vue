import { apiHelper } from '../utils/helpers'

export default {
  adminSignIn({ account, password }) {
    return apiHelper.post('/api/login', {
      account,
      password
    })
  },
  signIn({ account, password }) {
    return apiHelper.post('/api/login', {
      account,
      password
    })
  },
  signUp({ account, name, email, password, checkPassword }) {
    return apiHelper.post('/api/users', {
      account,
      name,
      email,
      password,
      checkPassword
    })
  }
}