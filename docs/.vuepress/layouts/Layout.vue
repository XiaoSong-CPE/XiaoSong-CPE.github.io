<script setup lang="ts">
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import moment from "moment/min/moment-with-locales";

function timeLocalize(lang, date) {
  if (!date) return; // 如果没有date就返回空值
  // 使用对象字面量来存储不同语言的前缀
  const prefix = { zh: "日期：", de: "Datum: ", en: "Date: " }[lang] || "";
  // 根据语言设置括号
  const leftBracket = lang === "zh" ? "（" : " (";
  const rightBracket = lang === "zh" ? "）" : ")";
  // 设置moment.js的语言
  moment.locale(lang === "zh" ? "zh-cn" : lang);
  // 使用模板字符串来简化字符串拼接
  return `${prefix}${moment(
    date,
    "YYYY-MM-DD"
  ).fromNow()}${leftBracket}${moment(date, "YYYY-MM-DD").format(
    "LL"
  )}${rightBracket}`;
}

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
// set listener: remove the <h2>References and Notes</h2>
if (typeof window !== "undefined") {
  window.addEventListener("afterprint", () => {
    const h2 = document.querySelector(".print-temp");
    if (h2) {
      h2.remove();
    }
  });
}

</script>

<template>
  <ParentLayout>
    <template #page-content-top>
      <!-- 如果是日记 -->
      {{ timeLocalize($lang, $frontmatter.date) }}
    </template>
  </ParentLayout>
</template>
