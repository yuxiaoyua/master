<template>
  <div class="upload">
    <el-upload
      class="avatar-uploader"
      action=""
      accept=".xlsx"
      :show-file-list="false"
      :on-success="uploadSuccess"
      :before-upload="beforeUpload">
      <el-button type="primary">已结算导订单导入</el-button>
    </el-upload>
    <el-button type="primary" @click="financeExport">财务明细数据导出</el-button>
  </div>
</template>

<script>
  export default {
    methods: {
      uploadSuccess () {},
      beforeUpload (file) {
        // const fileType = file.name.slice(file.name.lastIndexOf('.') + 1)
        // const isExcel = fileType === 'xls' || fileType === 'xlsx'
        // if (!isExcel) {
        //   this.$message.error('文件类型错误')
        // }
        // return isExcel
      },
      financeExport () {
        location.href = 'http://192.168.1.11:7878/wecashMarketSystem/system/settle/order/download?isRefund=2&settleStatus=3&supplier=11&orderStartTime=2017-08-02'
      }
    }
  }
</script>

<style scoped>
  .upload {
    margin-bottom: 20px;
  }
  .avatar-uploader {
    display: inline-block;
    margin-right: 10px;
  }
</style>

