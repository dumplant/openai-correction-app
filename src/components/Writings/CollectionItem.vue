<template>
    <el-card class="box-card">
        <el-button style="float: right; padding: 3px 0" type="text" @click="deleteItem">删除</el-button>

        <div class="text item">
            {{ '原始语句：' + input }}
        </div>
        <div class="text item">
            {{ '批改：' + output }}
        </div>
    </el-card>
</template>

<script>
export default {
    name: 'collection-item',
    props: ['input', 'output', 'id'],

    data() {
        return {
            currentDate: new Date()
        };
    },
    methods: {
        deleteItem() {
            this.$store.dispatch('collections/removeFromCollections', this.id)
        }
    }
}
</script>

<style scoped>
.box-card{
    margin-bottom: 1rem;
}
</style>
