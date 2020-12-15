import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound'
import SignIn from '../views/SignIn'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/user/setting',
    mame: 'user-setting',
    component: () => import('../views/UserSetting.vue')

  },
  {
    path: '/user/:id/followers',
    name: 'user-follower',
    component: () => import('../views/UserFollowers.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
