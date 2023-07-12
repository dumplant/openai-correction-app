<template>
  <div>
    <add-dialog />
    <el-button>上传</el-button>
  </div>
</template>

<script>
import AddDialog from './AddDialog.vue';
export default {
  components: {
    AddDialog
  },
  data() {
    return {

    };
  },
  methods: {
  }
}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>