<template>
  <div>
    <el-row class="tac">
      <el-menu default-active="1" class="el-menu-vertical-demo" :router="true">
        <el-menu-item index="home">
          <i class="el-icon-menu"></i>
          <span slot="title">写作评估</span>
        </el-menu-item>
        <el-menu-item index="collections">
          <i class="el-icon-menu"></i>
          <span slot="title">我的收藏</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">作文生成</span>
        </el-menu-item>
      </el-menu>

    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped></style>