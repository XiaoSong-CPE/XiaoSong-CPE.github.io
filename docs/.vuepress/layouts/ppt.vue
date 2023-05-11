<script setup lang="ts">
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import { onMounted } from "vue";
import { usePageFrontmatter } from "@vuepress/client";

// onMounted后给.theme-default-content添加.ppt
onMounted(() => {
  const content = document.querySelector(".theme-default-content");
  if (content) content.classList.add("ppt");
});

// get frontmatter
const $frontmatter = usePageFrontmatter();

onMounted(() => {
  // change the title of the page to `Week ${$frontmatter.week}: Presentation by Group Six`
  console.log($frontmatter);
  document.title = `Week ${$frontmatter.value.week}: Presentation by Group Six`;

  // add print styles inside .ppt
  var style = document.createElement("style");
  style.innerHTML = "@page { size: 192mm 108mm; }";
  document.querySelector(".ppt")?.appendChild(style);

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
  }
}
</style>
