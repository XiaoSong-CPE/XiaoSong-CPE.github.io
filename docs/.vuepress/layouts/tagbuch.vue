<script setup lang="ts">
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/de";
import { onMounted } from "vue";
import { usePageFrontmatter } from "@vuepress/client";
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";

// set dayjs locale and plugins
dayjs.locale("de");
dayjs.extend(relativeTime);
dayjs.extend(LocalizedFormat);

// get frontmatter
const $frontmatter = usePageFrontmatter();

onMounted(() => {
  // 给.theme-default-content添加.dairy
  const content = document.querySelector(".theme-default-content");
  if (content) content.classList.add("dairy");
  // add one space and date at the end of first h1
  const h1 = document.querySelector(".theme-default-content h1");
  if (h1) {
    h1.innerHTML += ` <span class="subtitle">Datum: ${dayjs(
      $frontmatter.value.date
    ).fromNow()} (${dayjs($frontmatter.value.date).format("lll")})</span>`;
  }
});
</script>

<template>
  <ParentLayout> </ParentLayout>
</template>