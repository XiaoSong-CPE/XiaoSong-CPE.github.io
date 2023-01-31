<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';
import moment from 'moment/min/moment-with-locales';

function timeLocalize(lang, date) {
    if (date === undefined) { return; } // 如果没有date就返回空值
    let prefix = '';
    let leftBracket = ' (';
    let rightBracket = ')';
    if (lang === 'zh') {
        lang = 'zh-cn';
        prefix = '日期：';
        leftBracket = '（';
        rightBracket = '）';
    } else if (lang === 'de') {
        prefix = 'Datum: ';
    } else if (lang === 'en') {
        prefix = 'Date: ';
    }
    moment.locale(lang);
    return prefix + moment(date, 'YYYY-MM-DD').fromNow() + leftBracket + moment(date, 'YYYY-MM-DD').format('LL') + rightBracket;
}
</script>

<template>
    <ParentLayout>
        <template #page-content-top>
            {{ timeLocalize($lang, $frontmatter.date) }}
        </template>
    </ParentLayout>
</template>