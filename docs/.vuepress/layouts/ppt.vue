<script setup lang="ts">
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import { onMounted } from "vue";
import { usePageData } from "@vuepress/client";

// get page data
const $pageDate = usePageData();

onMounted(() => {
  console.log($pageDate.value);

  // onMounted后给.theme-default-content添加.ppt
  const content = document.querySelector(".theme-default-content");
  if (content) content.classList.add("ppt");

  // change the title to `Week ${$frontmatter.week}: Presentation by Group Six`
  let regex = /Week_(\d+)-(\d+)/;
  let match = ($pageDate.value.path).match(regex);
  console.log(match);
  if (match) {
    $pageDate.value.title = `Week ${match[1]}-${match[2]}: Presentation by Group Six`;
  } else {
    new Error("No match");
  }

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
          <!-- Week {{ $frontmatter.week }} -->
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
    h2 {
      break-before: page;
    }

    //
    h3,
    h4,
    h5,
    h6 {
      break-after: avoid;
    }

    // remove h2 underlines
    h2 {
      border-bottom: none;
    }
  }
}
</style>
