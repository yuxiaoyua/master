<template>
  <el-form :inline="true">
    <el-form-item label="是否退货">
      <el-select class="short" size="small" v-model="conditions.isRefund">
        <el-option v-for="(value, key) in isRefund" :key="key" :label="value" :value="key"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="结算状态">
      <el-select class="short" size="small" v-model="conditions.settleStatus">
        <el-option v-for="(value, key) in settleStatus" :key="key" :label="value" :value="key-1"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="发货商家">
      <el-select v-model="conditions.supplier" filterable placeholder="请选择">
        <el-option  v-for="(value, key) in supplier" :key="key" :label="value.name" :value="key+1"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="出货时间">
       <el-date-picker v-model="conditions.deliveryStartTime" type="date" placeholder="选择日期"></el-date-picker>
    </el-form-item>
    <el-form-item label="至">
       <el-date-picker v-model="conditions.deliveryEndTime" type="date" placeholder="选择日期"></el-date-picker>
    </el-form-item>
     <el-form-item label="退货时间">
       <el-date-picker v-model="conditions.refundStartTime" type="date" placeholder="选择日期"></el-date-picker>
    </el-form-item>
    <el-form-item label="至">
       <el-date-picker v-model="conditions.refundEndTime" type="date" placeholder="选择日期"></el-date-picker>
    </el-form-item>
    <el-form-item label="关键字">
      <el-input size="small" v-model="conditions.keyWord"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button size="small" type="primary" @click="handleSearch">搜索</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  // import { formatDate } from '@/assets/js/methods'
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        isRefund: {
          1: '全部',
          2: '正常订单',
          3: '退货订单'
        },
        settleStatus: {
          1: '全部',
          2: '已结算',
          3: '未结算'
        },
        exprie: [],
        conditions: {
          isRefund: '',
          settleStatus: '',
          supplier: '',
          deliveryStartTime: '',
          deliveryEndTime: '',
          refundStartTime: '',
          refundEndTime: '',
          keyWord: ''
        },
        supplier: ''
      }
    },
    beforeCreate () {
      this.$nextTick()
          .then(() => {
            console.log(this.$el)
          })
    },
    created () {
      this.$nextTick()
          .then(() => {
            console.log(this.$el)
          })
    },
    mounted () {
      console.log('mounted')
      fetcher.get('/wecashMarketSystem/system/supplier/list').then(res => {
        this.supplier = res.data
      })
    },
    methods: {
      ...mapActions(['accountSetConditions', 'accountSearch']),
      handleSearch () {
        this.accountSetConditions(this.conditions)
        this.accountSearch()
      },
      handleReset () {

      }
    }
  }
</script>
<style scoped>
  .el-form-item .picker {
    width: 300px;
  }
  .short {
    width: 168px;
  }
</style>
