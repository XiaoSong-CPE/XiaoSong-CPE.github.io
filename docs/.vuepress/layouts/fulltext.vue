<template>
    <h1 >
        {{ frontmatter.title }}
        <span style=" opacity: 70%; font-size: 50%; white-space: nowrap; ">{{ frontmatter.author }}</span>
    </h1>
</template>

<script setup lang="ts">
// 引入props：frontmatter
import { defineProps } from 'vue';
// 定义props
const props = defineProps<{
    frontmatter
}>();

</script>

<style lang="scss">
.theme-default-content {

    counter-reset: section;

    p {
        text-indent: 2em;
        text-align: justify;
        position: relative;
    }

    p::before {
        counter-increment: section;
        content: counter(section, decimal-leading-zero);
        text-indent: 0;
        position: absolute;
        left: 0;
        opacity: 48%;
        font-size: xx-small;
    }

}
</style>