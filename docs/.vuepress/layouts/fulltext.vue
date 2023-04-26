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
