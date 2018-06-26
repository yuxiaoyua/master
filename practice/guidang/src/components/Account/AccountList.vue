<template>
  <div>
    <el-table border :data="accountList" max-width="100%" ref="multipleTable" v-loading="loading">
        <el-table-column
        label="序号"
        align="center"
        show-overflow-tooltip
      >
        <template scope="scope">
          <span>
            {{scope.$index+1}}
          </span>
        </template>
      </el-table-column>
       <el-table-column
        v-for="(value, key) in tableHeader"
        v-if="key!='benefitWays'"
        :min-width="tableHeader[1]"
        :key="key"
        :prop="key"
        :label="tableHeader[key][0]"
        align="center"
        show-overflow-tooltip
        >
      </el-table-column>
       <el-table-column
        :label="tableHeader['benefitWays'][0]"
        align="center"
        show-overflow-tooltip
      >
        <template scope="scope">
          <span v-for="(value, key) in scope.row.benefitWays" :key="key">
            {{value.remark}}
          </span>
        </template>
      </el-table-column>
       <el-table-column
        :label="tableHeader['benefitWays'][1]"
        align="center"
        show-overflow-tooltip
      >
        <template scope="scope">
           {{scope.row.benefitWays.length === 0 ? '无' : ''}}
          <span v-for="(value, key) in scope.row.benefitWays" :key="key">
            {{value.discount}}
          </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { account } from '../../assets/js/modules'
  import { mapState, mapActions } from 'vuex'
  export default {
    data () {
      return {
        loading: false,
        tableHeader: account
      }
    },
    computed: mapState({
      accountList: ({account}) => account.data
    }),
    mounted () {
      this.accountSearch()
    },
    methods: {
      ...mapActions(['accountSearch'])
    }
  }
</script>

