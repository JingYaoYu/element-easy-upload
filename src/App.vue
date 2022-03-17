<template>
  <el-form :model="formInline" ref="form">
    {{ formInline }}
    <el-form-item label="审批人" prop="fileUuid" :rules="[{ required: true, message: '请上传附件' }]">
      <easy-upload file-name="approva.png" v-model="formInline.fileList" @change="onFilesChange" />
    </el-form-item>
    <el-button @click="() => $refs.form.validate()">validate</el-button>
  </el-form>
</template>

<script>
export default {
  name: 'App',
  methods: {
    onFilesChange(files) {
      console.log(files)
    }
  },
  data() {
    return {
      formInline: {
        fileList: []
      }
    }
  }
}
</script>
