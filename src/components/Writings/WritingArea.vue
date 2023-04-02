<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="作文类型">
            <el-select v-model="form.type" placeholder="请选择作文类型">
                <el-option label="雅思" value="yasi">
                </el-option>
                <el-option label="托福" value="tuofu"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="题目描述" >
            <el-input  type="textarea" v-model="form.desc" :rows="3" placeholder="请输入题目描述"></el-input>
        </el-form-item>

        <el-form-item label="作文正文">
            <el-input type="textarea" v-model="form.text" :rows="10" placeholder="请输入作文正文"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
    data() {
        return {
            form: {
                type: '',
                desc: '',
                text: ''
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>

<style scoped>
    .el-form{
        width: 70%;
        margin: 5rem auto;
    }
</style>