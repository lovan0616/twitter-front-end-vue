import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/reply-list',
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
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
