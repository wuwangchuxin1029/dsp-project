<template>
<el-container style="height: 500px; border: 1px solid #eee">
  <el-container>
    <el-main>
      <el-row>
        <el-col>
           <p>广告创意</p>
        </el-col>
      </el-row>
      <el-row class="box">
          <h3>落地页</h3>
        <el-col :span="5">
          <span>着陆页地址：</span>
        </el-col>
        <el-col :span="10">
          <el-input placeholder="请设置广告名称"></el-input>
        </el-col>
        <el-col :span="4">
          <span>预览</span>
        </el-col>
      </el-row>
      <el-row class="box-up">
       <h3>上传创意</h3>
       <dspTab :tabData="tabData" @edit="editFn">
         <dspTabItem v-for="item in tabData" :slot="item.name" :key="item.name">
           <Upload></Upload>
         </dspTabItem>
       </dspTab>
        <!-- <span @click="popUp">+ 添加创意</span>
        <div class="origin-box">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:9990/dsp-creative/creative/upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <div><span>广告文案 ：</span><input type="text" placeholder="请设置广告名称"> <span>0/18</span></div>
          <div><span>监控链接 ：</span><input type="text" placeholder="请设置广告名称"></div>
        </div> -->
      </el-row>
      <el-button>提交</el-button>
    </el-main>
  </el-container>
  </el-container>
</template>
<script>
import Temp from './temp/temp'
import dspTab from '../../../components/dsp-tab/dsp-tab'
import dspTabItem from '../../../components/dsp-tab-item/dsp-tab-item'
import Upload from '../../../components/upload/upload'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Creative',
  data () {
    return {
      isShow: false,
      imageUrl: '',
      tabData: [
        {
          label: '创意1',
          name: 'tab-content1'
        }
      ],
      name: '123',
      len: 1
    }
  },
  methods: {
    ...mapMutations(['upTempType']),
    popUp () {
      let that = this
      this.$confirm(<Temp></Temp>, '', {
        center: true,
        cancelButtonText: '单图',
        confirmButtonText: '多图',
        callback (type) {
          // console.log(type)
          that.$store.commit('upTempType', type === 'cancel' ? 'single' : 'many')
        }
      }).then(() => {
      }).catch(() => {
      })
    },
    editFn () {
      this.tabData.push({
        label: '创意' + (++this.len),
        name: 'tab-content1' + this.len
      })
    },
    handleAvatarSuccess (res, file) {
      // console.log(res, 'hhhhh')
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  },
  components: {
    dspTab,
    dspTabItem,
    Upload
  },
  computed: {
    ...mapState(['createTemp'])
  }
}
</script>

<style scoped lang="less">
*{
  margin:0;
}
 .el-aside {
    background-color: #F5F5F5;
    color: #333;
    text-align: center;
    line-height: 120px;
    .el-menu{
      background:#F5F5F5;
    }
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    line-height:60px;
  }
  p{
   line-height:60px;
   font-size:32px;
  }
  .box{
    height: 160px;
    margin-bottom:10px;
    line-height:60px;
    input{
      width:240px;
      height:30px;
    }
    span{
      padding:0 10px;
    }
  }
   .box-up{
    height:auto;
    margin-bottom:10px;
    line-height:60px;
   }
  .el-button{
    width:166px;
    height: 52px;
    background: #ccc;
  }
  .dialog{
    width:439px;
    background:#fff;
    h5{
      width:100%;
      height:60px;
      line-height:60px;
      font-size:16px;
      text-indent: 24px;
    }
     .singlePic{
      float:left;
      width:180px;
      height:170px;
      line-height:170px;
      margin:15px;
      // border:1px solid #ccc;
      text-align:center;
    }
    .manyPic{
      float:left;
      width:180px;
      height:170px;
      line-height:170px;
      margin:15px;
      // border:1px solid #ccc;
      text-align:center;
    }
  }
  .mark{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.45);
    z-index:999;
  }
  .avatar-uploader[data-v-1b2453a0]{
    border:none;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-icon-plus{
    border:1px dashed skyblue;
  }
  .origin-box{
    input{
      width:432px;
      height:32px;
    }
  }
</style>
