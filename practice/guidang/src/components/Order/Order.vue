<template>
  <div class="order">
    <OrderExcel></OrderExcel>
    <OrderConditions></OrderConditions>
    <OrderList></OrderList>
    <el-pagination
      class="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 50]"
      :page-size="pageSize"
      layout="prev, pager, next, jumper, sizes, total"
      :total="total">
    </el-pagination>
  </div>
</template>
<script>
  import OrderExcel from './OrderExcel.vue'
  import OrderConditions from './OrderConditions.vue'
  import OrderList from './OrderList.vue'
  import { mapState } from 'vuex'
  export default {
    name: 'Order',
    components: {
      OrderExcel,
      OrderConditions,
      OrderList
    },
    data () {
      return {
        currentPage4: 1,
        pageSize: 10
      }
    },
    computed: mapState({
      total: ({order}) => order.total
    }),
    methods: {
      handleSizeChange () {
        console.log('page')
      },
      handleCurrentChange () {
        console.log('current')
      }

    }
  }
</script>
<style>
.pagination{
  width:100%;
  text-align: center
}
</style>



