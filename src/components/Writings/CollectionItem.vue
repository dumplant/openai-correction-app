<template>
    <el-card class="box-card">
        <el-button style="float: right; padding: 3px 0" type="text" @click="deleteItem">删除</el-button>

        <div class="text item">
            <span> 修改前：
            </span>
            <span> {{ input }}
            </span>
            <el-divider></el-divider>
            <span> 修改后：
                </span><span v-html="diffHtml">
            </span>
        </div>
    </el-card>
</template>

<script>
export default {
    name: 'collection-item',
    props: ['input', 'output', 'diffHtml', 'id'],

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
.box-card {
    margin-bottom: 1rem;
}

.text {
    width: 95%;
}

.el-divider {
    margin: 20px 0;
}
</style>
