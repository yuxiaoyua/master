<template>
  <div>
    <AccountExcel></AccountExcel>
    <AccountConditions></AccountConditions>
    <AccountList></AccountList>
    <el-pagination
      class="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 50, 100, 200, 400]"
      layout="sizes, prev, pager, next, jumper, total"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  import AccountList from './AccountList'
  import AccountConditions from './AccountConditions'
  import AccountExcel from './AccountExcel'
  import { mapState, mapActions } from 'vuex'
  export default {
    computed: mapState({
      total: ({account}) => account.total
    }),
    methods: {
      ...mapActions(['accountSetConditions', 'accountSearch']),
      handleSizeChange (val) {
        this.accountSetConditions({pageSize: val})
        this.accountSearch()
      },
      handleCurrentChange (val) {
        this.accountSetConditions({pageNum: val})
        this.accountSearch()
      }
    },
    mounted () {

    },
    components: {
      AccountList,
      AccountExcel,
      AccountConditions
    }
  }
</script>
