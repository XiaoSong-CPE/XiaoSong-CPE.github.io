<script setup lang="ts">
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import { onMounted } from "vue";
import { usePageFrontmatter } from "@vuepress/client";

// onMounted后给.theme-default-content添加.vokabeln
onMounted(() => {
  const content = document.querySelector(".theme-default-content");
  if (content) content.classList.add("vokabeln");
});

</script>

<template>
  <ParentLayout>
  </ParentLayout>
</template>

<style lang="scss">
// print styles
.vokabeln {
   tr:not(:first-child) td:nth-child(1),
   tr:not(:first-child) td:nth-child(3),
   tr:not(:first-child) td:nth-child(4),
   tr:not(:first-child) td:nth-child(5) {
    background-color: var(--c-text);
   }

   tr:not(:first-child):hover td {
    background-color:transparent;
   }
}
</style>
