import { defineClientConfig } from '@vuepress/client'
import Layout from './layouts/Layout.vue'
import fulltext from './layouts/fulltext.vue';

export default defineClientConfig({
  layouts: {
    Layout,
    fulltext,
  },
})