import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/application.css'
import store from './store'
import io from 'socket.io-client'

Vue.config.productionTip = false

const socket = io('https://krll-twitter-api-dev.herokuapp.com/', {
  withCredentials: true,
  extraHeaders: {
    'my-custom-header': 'my-custom-header'
  }
});

Vue.prototype.$socket = socket

//全域註冊客製化directive v-closable
let handleOutsideClick
Vue.directive('closable', {
  bind(el, binding, vnode) {
    handleOutsideClick = (e) => {
      e.stopPropagation()

      const { exclude, handler } = binding.value

      let clickedOnExcludedEl = false
      exclude.forEach(refName => {
        if (!clickedOnExcludedEl) {
          const excludeEl = vnode.context.$refs[refName]
          clickedOnExcludedEl = excludeEl.contains(e.target)
        }
      })

      if (!el.contains(e.target) && !clickedOnExcludedEl) {
        vnode.context[handler]()
      }
    }
    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)
  },
  unbind() {
    document.removeEventListener('click', handleOutsideClick)
    document.removeEventListener('touchstart', handleOutsideClick)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')





