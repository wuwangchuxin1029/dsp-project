<template>
  <el-row>
    <el-row>
    <el-col :span="24">
      <p>广告单元</p>
    </el-col>
    <el-col :span="24">
      <h3>基本信息</h3>
    </el-col>
    <el-row  style="height:45px;line-height:45px;margin-top:20px">
      <el-col :span="4" style="text-indent:24px">
        单元名称：
      </el-col>
      <el-col :span="10">
        <el-input placeholder="请设置广告名称"></el-input>
      </el-col>
    </el-row>
    </el-row>
     <el-row style="height:45px;line-height:45px;margin-top:10px">
      <el-col :span="4"  style="text-indent:24px">
        投放周期：
      </el-col>
      <el-col :span="10">
        <el-input placeholder="请选择订单日期"><i class=""></i></el-input>
      </el-col>
    </el-row>
    <el-row style="margin-top:40px">
      <h3>定向</h3>
      <el-row style="height:45px; line-height:45px;margin-top:20px">
        <el-col :span="3" style="text-indent:24px">
        <span>性别：</span>
        </el-col>
        <el-col :span="20">
          <el-radio-group>
            <el-radio-button label="不限"></el-radio-button>
            <el-radio-button label="男"></el-radio-button>
            <el-radio-button label="女"></el-radio-button>
          </el-radio-group>
        </el-col>
     </el-row>
     <el-row style="height:45px; line-height:45px;margin-top:20px">
        <el-col :span="3" style="text-indent:24px">
          <span>年龄：</span>
        </el-col>
        <el-col :span="20">
          <el-radio-group>
          <el-radio-button label="不限"></el-radio-button>
          <el-radio-button label="指定年龄"></el-radio-button>
          </el-radio-group>
        </el-col>
      </el-row>
       <el-row style="height:45px; line-height:45px;margin:10px 0 0 90px">
        <el-col :span="16">
          <el-radio-group>
            <el-radio-button label="<6"></el-radio-button>
            <el-radio-button label="6~12"></el-radio-button>
            <el-radio-button label=">12"></el-radio-button>
          </el-radio-group>
        </el-col>
      </el-row>
       <el-row style="height:45px; line-height:45px;margin-top:20px">
        <el-col :span="3" style="text-indent:24px">
          <span>地域：</span>
        </el-col>
        <el-col :span="16">
          <el-radio-group>
            <el-radio-button label="不限"></el-radio-button>
            <el-radio-button label="指定城市"></el-radio-button>
          </el-radio-group>
        </el-col>
      </el-row>
      </el-row>
    </el-row>
</template>

<script>
export default {
  name: 'Unit'
}
</script>

<style scoped>
h3{
  text-indent:24px;
}
p{
  font-size:24px;
  text-indent:24px;
}
</style>
