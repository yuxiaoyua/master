<template>
  <div class="edit">
    {{editType}}
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="客服" v-if="editType === 'service'">
        <el-input  placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="商家" v-if="editType === 'shop'">
        <el-input placeholder="审批人"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'editDialog',
  computed: mapState({
    editType: ({order}) => order.editType
  })
}
</script>

