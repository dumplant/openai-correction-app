<template>
        <el-container>
            <el-header><the-header></the-header></el-header>
            <el-main><router-view></router-view></el-main>
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
 .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-container{
    height: 100vh;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /* line-height: 160px; */
  }

</style>