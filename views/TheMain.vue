<template>
   
        <el-container>
            <el-header><the-header></the-header></el-header>
            <el-main><router-view></router-view></el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    
</template>
<script>
import TheHeader from '../src/components/layout/TheHeader.vue';
export default {
    components: {
        TheHeader
    },
}
</script>

<style scoped>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /* text-align: center; */
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
</style>