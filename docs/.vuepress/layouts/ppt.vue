<script setup>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import { onMounted } from "vue";
import { usePageFrontmatter } from '@vuepress/client'

const $frontmatter = usePageFrontmatter()

// set listener: add <h2>References and Notes</h2> before .footnotes before printing
if (typeof window !== "undefined") {
  window.addEventListener("beforeprint", () => {
    const footnotesList = document.querySelector(".footnotes");
    if (footnotesList) {
      const h2 = document.createElement("h2");
      h2.textContent = "References and Notes";
      h2.classList.add("print-temp");
      footnotesList.insertAdjacentElement("beforebegin", h2);
    }
  });
}

// set listener: remove all the .print-temp after printing
if (typeof window !== "undefined") {
  window.addEventListener("afterprint", () => {
    const printTempList = document.querySelectorAll(".print-temp");
    if (printTempList) {
      printTempList.forEach((item) => {
        item.remove();
      });
    }
  });
}

// change the title of the page to `Week ${$frontmatter.week}: Presentation by Group Six`
onMounted(() => {
  document.title = `Week ${$frontmatter.week}: Presentation by Group Six`;
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
