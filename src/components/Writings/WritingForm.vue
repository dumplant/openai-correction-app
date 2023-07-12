<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="作文类型">
        <el-cascader v-model="form.value" :options="options"></el-cascader>
      </el-form-item>
      <el-form-item label="作文标题">
        <el-input v-model="form.title" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="作文正文">
        <el-input type="textarea" :rows="10" placeholder="请输入" v-model="form.textarea"></el-input>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped></style>