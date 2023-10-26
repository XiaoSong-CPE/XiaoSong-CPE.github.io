import { defineClientConfig } from "@vuepress/client";
import fulltext from "./layouts/fulltext.vue";
import ppt from "./layouts/ppt.vue";
import tagbuch from "./layouts/tagbuch.vue";
import HausaufgabenView from "./components/HausaufgabenView.vue";
import naive from 'naive-ui'

export default defineClientConfig({
  layouts: {
    tagbuch,
    fulltext,
    ppt,
  },
  enhance({ app }) {
    app.use(naive);
    app.component("HausaufgabenView", HausaufgabenView);
  },
});
