<script setup lang="ts">
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import { onMounted } from "vue";
import { usePageFrontmatter } from "@vuepress/client";

// get frontmatter
const $frontmatter = usePageFrontmatter();

onMounted(() => {
  // 给.theme-default-content添加.fulltext
  const content = document.querySelector(".theme-default-content");
  if (content) content.classList.add("fulltext");
});

</script>

<template>
  <ParentLayout>
    <template #page-content-top>
      <h1>
        {{ $frontmatter.title }}
        <span class="subtitle">
          {{ $frontmatter.author }}
        </span>
      </h1>
    </template>
  </ParentLayout>
</template>

<style lang="scss">
.fulltext {
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
