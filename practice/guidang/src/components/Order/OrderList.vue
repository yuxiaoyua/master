<template>
  <div class="order-list">
    <el-table :data="orderList" width="100%">
      <el-table-column
      v-for="(value, key) in tableHeader"
      :key="key"
      :label="value[0]"
      :prop="key"
      :width="value[1]"
      align="center"
      >
      </el-table-column>

      <el-table-column label="客服操作" align="center" width="150">
        <template scope="scope">
          <el-button size="small" @click="edit('service')">编辑</el-button>
          <el-button size="small" type="danger">退货</el-button>
        </template>
      </el-table-column>
      <el-table-column label="商家操作" align="center" width="150">
        <template scope="scope">
          <el-button size="small" @click="edit('shop')">编辑</el-button>
          <el-button size="small" type="danger">退货</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="编辑"
      :visible.sync="dialogVisible"
      size="tiny">
      <orderEdit></orderEdit>
    </el-dialog>
  </div>
</template>
<script>
  import orderEdit from './editDialog'
  import { Order } from '../../assets/js/modules'
  import { mapActions } from 'vuex'
  export default {
    name: 'OrderList',
    components: {
      orderEdit
    },
    mounted () {

    },
    methods: {
      ...mapActions(['setEditType']),
      edit (type) {
        this.dialogVisible = true
        this.$store.dispatch({
          type: 'setEditType',
          editType: type
        })
      }
    },
    data () {
      return {
        dialogVisible: false,
        orderList: [{
          number: 1,
          order: '1',
          name: '测试',
          sku: '1',
          goodsId: 1,
          amount: '128.00',
          status: '交易成功',
          way: '免息券',
          favour: '10',
          payway: '信用支付',
          createTime: '2017-06-15 12:00:00',
          user: 'hj',
          salesReturn: '退货'
        }],
        tableHeader: Order
      }
    }
  }
</script>
<style>
.order-list{
  padding-bottom: 20px;
}
</style>

