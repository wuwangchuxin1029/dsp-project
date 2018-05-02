<template>
  <div class="plan-wrap">
    <h1>建立广告计划</h1>
    <el-row>
      <el-col :span="10">
        <el-card shadow="never">
          <p> <i class="el-icon-time"></i>已有计划</p>
          <span>选择已有计划，直接创建广告</span>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never">
         <p>  <i class="el-icon-circle-plus-outline"></i>新建计划</p>
         <!-- <span>新建推广目标，计划设置</span> -->
        </el-card>
      </el-col>
    </el-row>
    <el-row style="height:45px; line-height:45px;margin-top:20px">
      <el-col :span="4" style="text-indent:24px">
      <span>推广目标：</span>
      </el-col>
      <el-col :span="20">
        <el-radio-group>
          <el-radio-button label="网页"></el-radio-button>
          <el-radio-button label="iOS应用"></el-radio-button>
          <el-radio-button label="Android应用"></el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row style="margin-top:20px;line-height:45px">
      <el-col :span="4" style="text-indent:24px">
        <span>计划名称：</span>
      </el-col>
      <el-col :span="8">
        <el-input placeholder="请设置广告名称"></el-input>
      </el-col>
    </el-row>
    <el-row style="margin:20px 0;line-height:45px">
      <el-col :span="4" style="text-indent:24px">
        <span>每日限额：</span>
      </el-col>
      <el-col :span="8">
        <el-input placeholder="请设置广告名称"></el-input>
      </el-col>
    </el-row>
    <el-row style="margin-top:20px;border-top:1px solid #ccc">
      <el-col :span="5" style="margin-top:20px">
        <el-button style="width:120px">下一步</el-button>
      </el-col>
      <el-col :span="5" style="margin-top:20px">
        <el-button style="width:120px">保存</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Plan',
  data () {
    return {
      // activeName2: "first"
    }
  },
  methods: {
    // handleClick (tab, event) {
    //   console.log(tab, event)
    // }
  }
}
</script>

<style scoped lang="less">
.el-card {
  font-size: 14px;
  height: 76px;
  margin: 0 20px;
  p {
    font-size: 16px;
    line-height: 22px;
    padding: 0;
    margin: 0;
  }
  span {
    line-height: 26px;
  }
}
.el-icon-time,
.el-icon-circle-plus-outline:before {
  padding: 0 10px;
}
</style>
