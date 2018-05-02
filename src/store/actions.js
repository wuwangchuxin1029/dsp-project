import { loginRequest } from '../utils/request'

// action可以进行异步操作。
let actions = {
  // 从store对象和payload参数中结构出所需数据及方法
  getToken ({ commit }, { data, notify, router }) {
    // 登录时向后台发起数据请求，同时触发mutation,更新store中token字段的值
    loginRequest(data).then((res) => {
      if (res.success === 1) {
        notify({
          title: 'error',
          message: '登录失败，请重新登录',
          type: 'error'
        })
      } else {
        // 通过commit方法触发mutation,保存token字段到store
        commit('saveToken', res.token)
        // 保存username到store
        commit('saveUser', res.user.name)
        console.log(res, 'yyyyyy')
        // store数据都是存在缓存中的，将token与username存入localStorage中，可以在刷新浏览器后依然存在
        localStorage.setItem('token', res.token)
        localStorage.setItem('username', res.user.name)
        notify({
          title: 'success',
          message: '登录成功，跳转到首页',
          type: 'success'
        })
        // 登录成功后，延迟1秒跳转到首页
        setTimeout(() => {
          router.push({
            path: '/home'
          })
        }, 1000)
      }
    })
  }
}

export default actions
