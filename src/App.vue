<template>
  <el-form :model="formInline" ref="form">
    {{ formInline }}
    <el-form-item label="审批人" prop="fileUuid" :rules="[{ required: true, message: '请上传附件' }]">
      <easy-upload v-model="formInline.fileList" />
    </el-form-item>
    <el-button @click="() => $refs.form.validate()">validate</el-button>
  </el-form>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      formInline: {
        fileList: []
      }
    }
  }
}
</script>
