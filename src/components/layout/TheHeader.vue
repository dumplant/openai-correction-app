<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><router-link to="home">首页</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="collections">我的收藏</router-link></el-menu-item>
        <el-menu-item index="3">登录/注册</el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name: 'the-header',
    data() {
        return {
            activeIndex: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>