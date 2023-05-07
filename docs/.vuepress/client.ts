import { defineClientConfig } from '@vuepress/client'
import Layout from './layouts/Layout.vue'
import fulltext from './layouts/fulltext.vue';
import ppt from './layouts/ppt.vue';

export default defineClientConfig({
  layouts: {
    Layout,
    fulltext,
    ppt,
  },
})