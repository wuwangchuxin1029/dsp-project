<template>
  <div class="origin-box" v-show="isOrigin">
    <el-upload
      class="avatar-uploader"
      action="http://localhost:9990/dsp-creative/creative/upload"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <el-row class='inp-wrap'>
      <el-col :span="4">广告文案 ：</el-col>
      <el-col :span="10">
      <el-input placeholder="请设置广告名称"></el-input>
      </el-col>
      <el-col :span="3"><span>0/18</span></el-col>
    </el-row>
    <el-row class='inp-wrap'>
      <el-col :span="4">
      <span>监控链接 ：</span>
      </el-col>
      <el-col :span="10">
      <el-input placeholder="请设置广告名称"></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Upload',
  data () {
    return {
      isOrigin: true,
      imageUrl: ''
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      console.log(res, 'hhhhh')
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = 1
      // file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style scoped lang="less">
.origin-box{
  width:100%;
  height:500px;
}
.inp-wrap{
  width:100%;
  display:flex;
}
.avatar{
  width:120px;
  height:120px;
}
.box-up{
  height:400px;
}
 .avatar-uploader{
    width:120px;
    height:120px;
    line-height:120px;
    text-align:center;
    border:1px solid #ccc;
  }
</style>
