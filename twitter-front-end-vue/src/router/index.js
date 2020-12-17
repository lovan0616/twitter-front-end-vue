import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound'
import SignIn from '../views/SignIn'
import Main from '../views/MainTweets'

Vue.use(VueRouter)

const routes = [
  {
    path: '/tweet/:id/reply-list',
    name: 'reply-list',
    component: () => import('../views/MainTweetsReplyList.vue')
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue')
  },
  {
    path: '/admin/main',
    name: 'admin-main',
    component: () => import('../views/AdminMain.vue')
  },
  {
    path: '/admin/login',
    name: 'admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/login'
  },
  {
    path: '/',
    name: 'root',
    redirect: '/main'

  },
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
    path: '/main',
    name: 'main-tweets',
    component: Main
  },
  {
    path: '/user/setting',
    mame: 'user-setting',
    component: () => import('../views/UserSetting.vue')

  },
  {
    path: '/user/:id/:followship',
    name: 'user-followlist',
    component: () => import('../views/UserFollowList.vue')
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
