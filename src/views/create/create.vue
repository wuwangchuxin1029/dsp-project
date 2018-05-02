<template>
  <div class="ad-create">
   <div class="ad-menu">
    <div>
      <h4 @click="toPlan">建立广告计划</h4>
      <ul>
        <li>选择计划</li>
      </ul>
    </div>
    <div>
      <h4  @click="toUnit">广告单元</h4>
      <ul>
        <li>基本信息</li>
        <li>定向</li>
        <li>广告位</li>
        <li>出价</li>
      </ul>
    </div>
    <div>
      <h4  @click="toOrigin">广告创意</h4>
      <ul>
        <li>落地页</li>
        <li>上传创意</li>
    </ul>
    </div>
   </div>
  <div class="ad-main">
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Create',
  data () {
    return {

    }
  },
  methods: {
    toPlan () {
      this.$router.push({
        path: '/create/plan'
      })
    },
    toUnit () {
      this.$router.push({
        path: '/create/unit'
      })
    },
    toOrigin () {
      this.$router.push({
        path: '/create/creative'
      })
    }
  }
}
</script>

<style scoped lang="less">
li{
  list-style:none;
}
.ad-create{
  width:100%;
  height:100%;
  overflow:hidden;
  .ad-menu{
    float:left;
    width:15%;
    height:100%;
    border-right:1px solid #ccc;
    font-size:14px;
    background:#F5F5F5;
    li{
      line-height:30px;
    }
    div{
      padding:15px 10px;
    }
  }
}
.ad-main{
 float:right;
 width:84%;
 height:100%;
}
</style>
