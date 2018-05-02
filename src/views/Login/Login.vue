<template>
  <div class="login-wrap">
    <el-row type="flex" justify="center">
      <el-col :span="10">
        <el-form :model="formInfo" label-width="100px" ref="loginform">
          <el-form-item label="用户名" prop="username" :rules="userRules">
            <el-input v-model="formInfo.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" :rules="pasRules">
            <el-input v-model="formInfo.password"></el-input>
          </el-form-item>
         <el-button class="form-btn" @click.native="toLogin">登录</el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      formInfo: {
        username: '',
        password: ''
      },
      userRules: [
        {
          required: true,
          message: '请输入用户名'
        },
        {
          type: 'email',
          message: '请输入正确格式的用户名'
        }
      ],
      pasRules: [
        {
          required: true,
          message: '请输入密码'
        }
      ]
    }
  },
  methods: {
    toLogin () {
      // validate是element-ui提供的方法，第一个参数表示是否登录成功（布尔值），第二个参数是输入的数据
      this.$refs.loginform.validate((isvalid, options) => {
        if (isvalid) {
          // 在视图层通过dispatch将数据传递给actions触发mutations(用户信息以及组件弹层和 路由信息)
          this.$store.dispatch('getToken', {
            data: this.formInfo,
            notify: this.$notify,
            router: this.$router
          })
        } else {
          this.$notify({
            title: '错误',
            message: '用户名或密码错误',
            type: 'warning',
            duration: 500
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.login-wrap{
  width:100%;
  height:100%;
  .el-row{
    margin-top:20px;
    .form-btn{
      margin-left:50%;
    }
  }
}
</style>
