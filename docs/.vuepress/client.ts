import { defineClientConfig } from '@vuepress/client'
import fulltext from './layouts/fulltext.vue';
import ppt from './layouts/ppt.vue';
import tagbuch from './layouts/tagbuch.vue';

export default defineClientConfig({
  layouts: {
    tagbuch,
    fulltext,
    ppt,
  },
})