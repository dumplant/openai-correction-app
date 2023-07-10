<template>
  <el-container>
    <el-header><the-header></the-header></el-header>
    <el-container>
      <el-aside width="200px"><the-menu></the-menu></el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>
<script>
import TheHeader from '@/layout/TheHeader.vue';
import TheMenu from '@/layout/TheMenu.vue';
export default {
  components: {
    TheHeader,
    TheMenu
  }
}
</script>

<style scoped>
.el-header {
  /* background-color: #B3C0D1; */
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-container {
  height: 100vh;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  /* line-height: 160px; */
}
</style>