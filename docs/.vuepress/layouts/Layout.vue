<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';
import moment from 'moment/min/moment-with-locales';
import { defineAsyncComponent } from 'vue';
const fulltext = defineAsyncComponent(() => import('./fulltext.vue'));

function timeLocalize(lang, date) {
    if (!date) return; // 如果没有date就返回空值
    // 使用对象字面量来存储不同语言的前缀
    const prefix = { 'zh': '日期：', 'de': 'Datum: ', 'en': 'Date: ' }[lang] || '';
    // 根据语言设置括号
    const leftBracket = lang === 'zh' ? '（' : ' (';
    const rightBracket = lang === 'zh' ? '）' : ')';
    // 设置moment.js的语言
    moment.locale(lang === 'zh' ? 'zh-cn' : lang);
    // 使用模板字符串来简化字符串拼接
    return `${prefix}${moment(date, 'YYYY-MM-DD').fromNow()}${leftBracket}${moment(date, 'YYYY-MM-DD').format('LL')}${rightBracket}`;
}
</script>

<template>
    <ParentLayout>
        <template #page-content-top>
            <!-- 如果是日记 -->
            {{ timeLocalize($lang, $frontmatter.date) }}
            <!-- 如果是课文 
            <fulltext v-if="$frontmatter.type === 'fulltext'" :frontmatter="$frontmatter" />
        --></template>
    </ParentLayout>
</template>