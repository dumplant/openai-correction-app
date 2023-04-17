<template>
    <div>
        <collection-item v-for="item in items" :key="item.id" :id="item.id" :input="item.input" :output="item.output"></collection-item>
        <el-empty v-if="!hasCollections" description="暂无收藏"></el-empty>
    </div>
</template>

<script>
import CollectionItem from '@/components/Writings/CollectionItem.vue';
export default {
    components: {
        CollectionItem
    },
    computed: {
        items() {
            return this.$store.getters['collections/collections'];
        },
        hasCollections() {
            return this.$store.getters['collections/hasCollections'];

        }
    },
    // methods: {
    //     print() {
    //         console.log('aaa')

    //         console.log(this.$store)
    //     }
    // }
    

}
</script>

<style scoped></style>