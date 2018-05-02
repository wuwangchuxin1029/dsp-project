<template>
<div class="home-wrap">
  <el-row :gutter="80">
  <el-col :span="8"><div class="grid-content bg-purple">现金账户</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">今日消耗</div></el-col>
  </el-row>
  <div class="home-content">
  <div class="content-title">
    <el-row style="line-height: 60px">
      <el-col :span="10"><span>整体情况</span></el-col>
      <el-col :span="4">
        <span>近7天</span>
        <span>近30天</span>
      </el-col>
      <el-col :span="4" style="marginRight:20px">
         <div class="block">
          <el-date-picker
            v-model="endTime"
            value-format="yyyy-MM"
            type="month"
            @change="rangeChange"
            placeholder="选择月">
          </el-date-picker>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="block">
          <el-date-picker
            v-model="startTime"
            value-format="yyyy-MM"
            type="month"
            @change="rangeChange"
            placeholder="选择月">
          </el-date-picker>
        </div>
      </el-col>
    </el-row>
  </div>
    <el-row :gutter="12">
      <el-col :span="5">
        <el-card shadow="never">
          总是显示
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card shadow="never">
          鼠标悬浮时显示
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card shadow="never">
          从不显示
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card shadow="never">
          从不显示
        </el-card>
      </el-col>
    </el-row>
  <el-row class="select-wrap">
    <el-select v-model="value" placeholder="曝光率" @click.native="exportData" class="left-select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <el-select v-model="value" placeholder="点击数" class="right-select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-row>
  <el-row>
    <div ref = "lineGraph" class="line-graph"></div>
  </el-row>
</div>
</div>
</template>

<script>
import { init } from 'echarts'
export default {
  name: 'Home',
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      days: '',
      value7: '',
      startTime: '',
      endTime: '',
      dateList: [],
      instance: null
    }
  },
  watch: {
    // watch监听：1. 新  2. 旧
    startTime (news, old) {
      // console.log(news, '11111')
    },
    endTime (news) {
      // console.log(news, '222222')
    }
  },
  methods: {
    // 点击曝光率
    exportData () {
      const that = this
      this.$http.post('/dsp-report/index').then(res => {
        // 更新线图的日期和数据
        that.instance.setOption({
          xAxis: {
            data: this.dateList
          },
          series: {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }
        })
      })
    },
    // 根据用户选择的日期生成数据
    rangeChange () {
      // 将初始值分割成数组，并从中解构出 年与月
      let { 0: startY, 1: startM } = this.endTime.split('-')
      let { 0: endY, 1: endM } = this.startTime.split('-')
      const dateArr = []
      // 循环条件：（开始年< 结束年） 或者 （开始年==结束年 并且 开始月<= 结束月）
      while (startY < endY || (startY == endY && startM <= endM)) {
        // 不同年的情况
        if (startY < endY) {
          // 如果月份小于12，将这些符合条件的年月push进数组；并且月份++
          if (startM <= 12) {
            dateArr.push(`${startY}/${startM}`)
            startM++
          } else {
            // 如果月份大于12，年份++，同时月份要恢复到1月开始
            ++startY,
            startM = 1
          }
        } else {
          // 同年的情况（必须是开始时间小于结束时间）
          if (startM <= endM) {
            dateArr.push(`${startY}/${startM}`)
            ++startM
          }
        }
      }
      this.dateList = dateArr
    }
  },
  mounted () {
    // 基于dom元素，初始化echarts
    let graph = init(this.$refs.lineGraph)
    // 把graph赋给组件内部数据
    this.instance = graph
    console.log(graph, 'graphhhhhh')
    let option = {
      xAxis: {
        type: 'category',
        data: this.dateList
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    }
    graph.setOption(option)
    window.onresize = () => {
      graph.resize()
    }
  }
}
</script>

<style scoped lang="less">
.home-wrap{
  width:100%;
  height:100%;
  margin:20px;
  background:#eee;
}
.home-content{
  width:100%;
  background:#fff;
  padding:0 10px;
}
 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 111px;
    min-width:368px;
    background:#fff;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .content-title{
    min-width:100%;
    min-height:30px;
    line-height:30px;
    border-bottom:1px solid #E8E8E8;
    background:#fff;
  }
  .block{
    min-width:258px;
    min-height:32px;
  }
 .home-content .el-row{
    margin-top:20px;
  }
  .line-graph{
    width:100%;
    height:300px;
  }
  .right-select{
    float:right;
    margin-right: 20px;
  }
</style>
