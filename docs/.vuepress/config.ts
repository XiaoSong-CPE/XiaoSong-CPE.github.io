import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import markdownItDeflist from 'markdown-it-deflist'
import markdownItFootnote from 'markdown-it-footnote'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    plugins: [
        mdEnhancePlugin({
            // 启用 mermaid
            mermaid: true,
            echarts: true,
        }),
        searchPlugin({
            // 排除首页
            isSearchable: (page) => page.path !== '/',
        }),
    ],
    markdown: {
        typographer: true,
        quotes: '„“‚‘',
        html: true,
    },
    extendsMarkdown: (md) => {
        md.use(markdownItDeflist)
            .use(markdownItFootnote)

        md.renderer.rules.footnote_block_open = () => (
            '<h2 id="references-and-notes" tabindex="-1"><a class="header-anchor" href="#references-and-notes" aria-hidden="true">#</a> References and Notes</h2>\n' +
            '<section class="footnotes">\n' +
            '<ol class="footnotes-list">\n'
        );
    },
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'de',
            title: 'Notizen Karstens',
            description: 'Karstens persönliche Notizen',
        },
    },
    theme: defaultTheme({
        repo: 'XiaoSong-CPE/XiaoSong-CPE.github.io',
        docsBranch: 'main',
        docsDir: 'docs',
        locales: {
            '/': {
                lastUpdatedText: 'Zuletzt aktualisiert',
                contributorsText: 'Mitwirkende',
                notFound: ['Die Seite wurde nicht gefunden'],
                backToHome: 'Zurück zur Startseite',
                navbar: [
                    {
                        text: 'Mein Tagebuch',
                        link: '/tagebuch/',
                    }, {
                        text: 'Deutsch Lernen',
                        link: '/deutsch/',
                    },
                ],
            },
        },
    }),
})