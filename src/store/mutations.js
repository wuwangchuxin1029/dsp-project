// 在mutation中定义事件，更新store.【 state是store的实例，payload是传递过来的数据 】
let mutations = {
  // 保存token字段
  saveToken (state, payload) {
    state.token = payload
  },
  saveUser (state, payload) {
    state.username = payload
  },
  upTempType (state, payload) {
    console.log(payload, 'payloaddd')
    state.createTemp = payload
  }
}
export default mutations
