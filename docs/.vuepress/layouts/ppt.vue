<script setup>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import { onMounted } from "vue";
import { usePageFrontmatter } from "@vuepress/client";

// onMounted后给.theme-default-content添加.ppt
onMounted(() => {
  const content = document.querySelector(".theme-default-content");
  content.classList.add("ppt");
});

const $frontmatter = usePageFrontmatter();

// change the title of the page to `Week ${$frontmatter.week}: Presentation by Group Six`
onMounted(() => {
  console.log($frontmatter);
  document.title = `Week ${$frontmatter.value.week}: Presentation by Group Six`;
});
</script>

<template>
  <ParentLayout>
    <template #page-content-top>
      <h1>
        Presentation by Group Six
        <span style="opacity: 70%; font-size: 50%; white-space: nowrap">
          Week {{ $frontmatter.week }}
        </span>
      </h1>
    </template>
  </ParentLayout>
</template>

<style lang="scss">
// print styles
.ppt {
  @media print {
    // let h2 - h6 break-before: page
    h2,
    h3,
    h4,
    h5,
    h6 {
      break-before: page;
    }

    // remove h2 underlines
    h2 {
      border-bottom: none;
    }

    // set print page size
    @page {
      size: 192mm 108mm;
    }
  }
}
</style>
