<template>
  <div class="bannerOrigin-wrap">
    <h5>广告创意</h5>
      <el-row class="choos-title">
        <el-col :span="2" style="borderRight: none">
      <el-select v-model="value5" multiple placeholder="创意ID"  style="borderleft: none">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
     </el-select>
     </el-col>
     <el-col :span="4">
     <el-input v-model="input" placeholder="请输入内容"></el-input>
     </el-col>
     <!-- 状态选择 -->
     <el-col :span="6" style="marginLeft:60px" class="status-choos">
         <span>状态</span>
         <el-select v-model="value" placeholder="请选择" style="width:150px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
     </el-col>
     <el-col :span="2" style="marginLeft:20px">
       <el-button type="info" plain>查询</el-button>
     </el-col>
     </el-row>
     <div class="choos-content">
     <div class="choos-type">
       <el-row>
       <!-- 新建创意 -->
       <el-col :span="4">
        <el-button type="info" plain>+ 新建创意</el-button>
        </el-col>
        <!-- 批量修改 -->
        <el-col :span="6">
        <el-select v-model="value" placeholder="批量修改">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
        </el-select>
      </el-col>
      <!-- 选择日期 -->
      <el-col :span="6" style="marginLeft:160px">
      <div class="block">
        <el-date-picker
          v-model="value"
          type="date"
          placeholder="选择订单日期">
        </el-date-picker>
     </div>
     </el-col>
     <!-- 自定义列表 -->
     <el-col :span="4">
     <el-select v-model="value" placeholder="自定义列表">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      </el-col>
      </el-row>
     </div>
     <!-- 表格内容区域 -->
     <el-table
    ref="multipleTable"
    :data="tableData3"
    tooltip-effect="dark"
    style="width: 100%;border:1px solid #eee"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="创意素材"
      width="120">
    </el-table-column>
    <el-table-column
      prop="ID"
      label="创意ID"
      width="80">
    </el-table-column>
    <el-table-column
      prop="type"
      label="创意类型"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="size"
      label="尺寸"
      width="120">
    </el-table-column>
    <el-table-column
      prop="linkA"
      label="落地页链接"
      width="120">
    </el-table-column>
    <el-table-column
      prop="linkB"
      label="检测链接"
      width="120">
    </el-table-column>
    <el-table-column
      prop="unit"
      label="所属单元"
      width="120">
    </el-table-column>
    <el-table-column
      prop="plan"
      label="所属计划"
      width="120">
    </el-table-column>
    <el-table-column
      prop="export"
      label="曝光量"
      width="120">
    </el-table-column>
    <el-table-column
      prop="click"
      label="点击量"
      width="120">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      width="120">
    </el-table-column>
  </el-table>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Origin',
  data () {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value5: [],
      value: '',
      input: '',
      tableData3: [
        {
          fodder: '123456',
          ID: '369',
          type: '图文',
          size: '320*240',
          linkA: 'HTTP://AAAAA',
          linkB: 'HTTP://BBBBB',
          unit: '66666',
          plan: '测试团队',
          export: '2000',
          click: '1000',
          status: '投放中'
        }
      ],
      multipleSelection: []
    }
  },
  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>

<style scoped lang="less">
.bannerOrigin-wrap{
  width:100%;
  height:100%;
  h5{
    width:100%;
    height:40px;
    border-bottom:1px solid #ccc;
    background:#fff;
    line-height:40px;
    margin:0;
  }
}
.choos-title{
  width:100%;
  height:60px;
  background:#eee;
  .el-col{
  margin:10px 0;
  }
}
.status-choos{
  span{
    display:inline-block;
  }
}
.choos-content{
  .choos-type{
    .el-row{
      width:100%;
      height:55px;
      padding-top:10px;
      background:#fff;
    }
  }
}
</style>
