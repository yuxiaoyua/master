<template>
  <div class="order-conditions">
    <el-form :inline="true">
      <label class="orderLabel">
        订单状态
      </label>
      <el-select size="small" v-model="conditions.status" placeholder="请选择">
        <el-option
          v-for="(value, key) in orderStatus"
          :key="key"
          :label="value"
          :value="key">
        </el-option>
      </el-select>
      <label class="orderLabel">
        收货城市
      </label>
      <el-select size="small" v-model="conditions.city" placeholder="请选择">
        <el-option
          v-for="(value, key) in orderUrl"
          :key="key"
          :label="value"
          :value="key">
        </el-option>
      </el-select>
      <label class="orderLabel">
        优惠方式
      </label>
      <el-select size="small" v-model="conditions.favorable" placeholder="请选择">
        <el-option
          v-for="(value, key) in orderFavorable"
          :key="key"
          :label="value"
          :value="key">
        </el-option>
      </el-select>
      <label class="orderLabel">
        支付时间
      </label>
      <el-date-picker
        v-model="conditions.payTime"
        type="datetime"
        placeholder="选择日期时间">
      </el-date-picker>
      <el-form-item label="发货商家">
        <el-input size="small" v-model="conditions.businessmen" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="关键字">
        <el-input size="small" v-model="conditions.keys" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small">搜索</el-button>
        <el-button type="primary" size="small">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>
<script>
  export default {
    name: 'OrderConditions',
    data () {
      return {
        conditions: {
          status: '1',
          city: '',
          favorable: '',
          payTime: '',
          businessmen: '',
          keys: ''
        },
        orderStatus: {
          1: '未支付',
          2: '支付失败',
          3: '审核中',
          4: '审核失败',
          5: '待发货',
          6: '已发货',
          7: '交易成功',
          8: '已取消',
          9: '拒收退货中',
          10: '退款中',
          11: '已退款'
        },
        orderUrl: {
          1: '北京',
          2: '上海',
          3: '广东',
          4: '深圳'
        },
        orderFavorable: {
          1: '免息券',
          2: '消费券'
        }
      }
    }
  }
</script>
<style>
.order-conditions{
  padding: 20px 0;
}
.orderLabel{
  font-size:14px;
  color:#999;
  padding:0 6px;
}
.orderLabel:first-child{
  padding-left:0;
}
</style>
