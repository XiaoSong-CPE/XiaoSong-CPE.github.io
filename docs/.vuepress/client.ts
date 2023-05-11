import { defineClientConfig } from '@vuepress/client'
import layout from './layouts/layout.vue'
import fulltext from './layouts/fulltext.vue';
import ppt from './layouts/ppt.vue';

export default defineClientConfig({
  layouts: {
    Layout: layout,
    fulltext,
    ppt,
  },
})