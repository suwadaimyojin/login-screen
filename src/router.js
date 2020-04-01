import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Repass from './components/ForgetPasswords.vue'
Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path:'/repass',
      name:'repass',
      component:Repass
    }
  ]
})
