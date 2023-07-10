<template>
    <div>
        <AddArea />
        <writing-area></writing-area>
    </div>
</template>

<script>
import AddArea from "@/components/add/AddArea.vue";
import WritingArea from "@/components/Writings/WritingArea.vue"
export default {
    components: {
        AddArea,
        WritingArea
    }
}
</script>

<style scoped></style>