import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import { routerInfo } from './config.js'

Vue.use(Router)
let router = new Router({
  routes: routerInfo
})

// 路由守卫（拦截）在路由拦截中判断是否登录，如果是登录继续下一步，未登录则next到login页面
router.beforeEach((to, from, next) => {
  let isLogin = loginStatus()
  if (to.name === 'Login') {
    next()
  } else {
    if (!isLogin) {
      next('/login')
    } else {
      next()
    }
  }
})
// 通过token字段判断是否是登录状态
function loginStatus () {
  let token = localStorage.getItem('token')
  // 如果有token字段，说明是登录状态，不用再次进入登录页面,当前用户名保存到store中。
  if (token) {
    store.commit('saveUser', localStorage.getItem('username'))
  }
  return token
}
export default router
