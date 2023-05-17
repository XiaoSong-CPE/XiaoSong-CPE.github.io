<script setup lang="ts">
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import { ref, computed, onMounted, h, watch } from "vue";
import json from "./vokabeln.json";
import {
  NSelect,
  NCheckbox,
  NDataTable,
  NInputGroup,
  darkTheme,
  NConfigProvider,
  NForm,
  NFormItem,
  deDE,
  dateDeDE,
  type GlobalTheme,
} from "naive-ui";
import type { DataTableColumns } from "naive-ui";
import type { Ref } from "vue";
import { useLocalStorage } from "@vueuse/core";

let Stern = ref(false);
let Wort = ref(false);
let Wortart = ref(false);
let Chinesisch = ref(false);
let Beispielsatz = ref(false);

// watch Stern, Wort, Wortart, Chinesisch, Beispielsatz
// if true, add .masked to .table-stern, .table-wort, .table-wortart, .table-chinesisch, .table-beispielsatz for all
// if false, remove .masked from .table-stern, .table-wort, .table-wortart, .table-chinesisch, .table-beispielsatz for all
const classes = ["stern", "wort", "wortart", "chinesisch", "beispielsatz"];
watch([Stern, Wort, Wortart, Chinesisch, Beispielsatz], (values) => {
  classes.forEach((className, index) => {
    document.querySelectorAll(`.table-${className}`).forEach((el) => {
      el.classList.toggle("masked", values[index]);
    });
  });
});

// define Buecher
const Buecher = ref([
  {
    label: "Buch 1",
    value: "Buch_1",
  },
  {
    label: "Buch 2",
    value: "Buch_2",
  },
  {
    label: "Buch 3",
    value: "Buch_3",
  },
]);
const Buch = useLocalStorage("Buch", "Buch_1");

// define Einheiten
const Einheiten = ref([
  {
    label: "Einheit 1",
    value: "Einheit_1",
  },
  {
    label: "Einheit 2",
    value: "Einheit_2",
  },
  {
    label: "Einheit 3",
    value: "Einheit_3",
  },
  {
    label: "Einheit 4",
    value: "Einheit_4",
  },
  {
    label: "Einheit 5",
    value: "Einheit_5",
  },
  {
    label: "Einheit 6",
    value: "Einheit_6",
  },
  {
    label: "Einheit 7",
    value: "Einheit_7",
  },
  {
    label: "Einheit 8",
    value: "Einheit_8",
  },
  {
    label: "Einheit 9",
    value: "Einheit_9",
  },
  {
    label: "Einheit 10",
    value: "Einheit_10",
  },
]);
const Einheit = useLocalStorage("Einheit", "Einheit_1");

// define Teilen
const Teilen = ref([
  {
    label: "Einführung",
    value: "Einführung",
  },
  {
    label: "Text",
    value: "Text",
  },

  {
    label: "Übungen",
    value: "Übungen",
  },
  {
    label: "Intentionen",
    value: "Intentionen",
  },
  {
    label: "Hörverstehen",
    value: "Hörverstehen",
  },
  {
    label: "Leseverstehen",
    value: "Leseverstehen",
  },
]);
const Teil = useLocalStorage("Teil", ["Text"]);

// define vokabeln
const vokabeln = computed(() => json[Buch.value][Einheit.value]);

// define columns
const columns: Ref<DataTableColumns> = ref([
  {
    key: "*",
    title: "*",
    className: "table-stern",
  },
  {
    key: "Wort",
    title: "Wort",
    className: "table-wort",
  },
  {
    key: "Wortart",
    title: "Wortart",
    className: "table-wortart",
  },
  {
    key: "Chinesisch",
    title: "Chinesisch",
    className: "table-chinesisch",
    render: (rowData) => parseText(rowData.Chinesisch),
  },
  {
    key: "Beispielsatz",
    title: "Beispielsatz",
    className: "table-beispielsatz",
    render: (rowData) => parseText(rowData.Beispielsatz),
  },
]);

const rowKey = (rowData) => rowData.Wort;

function parseText(text) {
  let newText = text.replace(/\n/g, "<br/>");
  return h("div", { innerHTML: newText });
}

// 监视当前主题是否为暗黑模式
const targetNode = document.documentElement;
let theme: Ref<GlobalTheme | undefined> = ref(() =>
  targetNode.classList.contains("dark") ? darkTheme : undefined
);

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === "class") {
      theme.value = targetNode.classList.contains("dark")
        ? darkTheme
        : undefined;
    }
  });
});

observer.observe(targetNode, { attributes: true });
</script>

<template>
  <ParentLayout>
    <template #page-content-top>
      <n-config-provider :theme="theme" :locale="deDE" :date-locale="dateDeDE">
        <!-- title -->
        <h1>Vokabeln</h1>

        <n-form>
          <n-form-item label="选择单词表">
            <n-input-group>
              <n-select v-model:value="Buch" :options="Buecher" />
              <n-select v-model:value="Einheit" :options="Einheiten" />
              <n-select v-model:value="Teil" :options="Teilen" multiple />
            </n-input-group>
          </n-form-item>

          <n-form-item label="选择遮罩">
            <n-checkbox v-model:checked="Stern"> Stern </n-checkbox>
            <n-checkbox v-model:checked="Wort"> Wort </n-checkbox>
            <n-checkbox v-model:checked="Wortart"> Wortart </n-checkbox>
            <n-checkbox v-model:checked="Chinesisch"> Chinesisch </n-checkbox>
            <n-checkbox v-model:checked="Beispielsatz">
              Beispielsatz
            </n-checkbox>
          </n-form-item>
        </n-form>

        <!-- show vokabeln tables -->
        <h2>{{ Buch.replace("_"," ") }} {{ Einheit.replace("_"," ") }}</h2>

        <!-- Einführung -->
        <div v-if="vokabeln?.Einführung && Teil.includes(`Einführung`)">
          <h3>Einführung</h3>
          <n-data-table
            :columns="columns"
            :data="vokabeln?.Einführung"
            :row-key="rowKey"
            class="vokabeln-table"
          />
        </div>

        <!-- Text -->
        <div v-if="vokabeln?.Text && Teil.includes(`Text`)">
          <h3>Text</h3>
          <n-data-table
            :columns="columns"
            :data="vokabeln?.Text"
            :row-key="rowKey"
            class="vokabeln-table"
          />
        </div>

        <!-- Übungen -->
        <div v-if="vokabeln?.Übungen && Teil.includes(`Übungen`)">
          <h3>Übungen</h3>
          <n-data-table
            :columns="columns"
            :data="vokabeln?.Übungen"
            :row-key="rowKey"
            class="vokabeln-table"
          />
        </div>

        <!-- Intentionen -->
        <div v-if="vokabeln?.Intentionen && Teil.includes(`Intentionen`)">
          <h3>Intentionen</h3>
          <n-data-table
            :columns="columns"
            :data="vokabeln?.Intentionen"
            :row-key="rowKey"
            class="vokabeln-table"
          />
        </div>

        <!-- Hörverstehen -->
        <div v-if="vokabeln?.Hörverstehen && Teil.includes(`Hörverstehen`)">
          <h3>Hörverstehen</h3>
          <n-data-table
            :columns="columns"
            :data="vokabeln?.Hörverstehen"
            :row-key="rowKey"
            class="vokabeln-table"
          />
        </div>

        <!-- Leseverstehen -->
        <div v-if="vokabeln?.Leseverstehen && Teil.includes(`Leseverstehen`)">
          <h3>Leseverstehen</h3>
          <n-data-table
            :columns="columns"
            :data="vokabeln?.Leseverstehen"
            :row-key="rowKey"
            class="vokabeln-table"
          />
        </div>
      </n-config-provider>
    </template>
  </ParentLayout>
</template>

<style lang="scss">
.vokabeln-table {
  tr td.masked {
    background-color: var(--n-td-text-color);
  }

  tr:hover td.masked {
    background-color: transparent;
  }
}
</style>
