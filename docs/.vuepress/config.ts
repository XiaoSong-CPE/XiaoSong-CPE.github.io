import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import markdownItDeflist from 'markdown-it-deflist'
import markdownItFootnote from 'markdown-it-footnote'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"

export default defineUserConfig({
    plugins: [
        mdEnhancePlugin({
            // 启用 mermaid
            mermaid: true,
            echarts: true,
        })
    ],
    markdown: {
        typographer: true,
        quotes: '„“‚‘',
        html: true,
    },
    extendsMarkdown: (md) => {
        md.use(markdownItDeflist)
            .use(markdownItFootnote)
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
                // sidebar: {
                //     '/english/': [
                //         {
                //             text: 'Modernes Englisch',
                //             children: [
                //                 {
                //                     text: 'Buch 6 Notizen',
                //                     children: [
                //                         'B6U4_Nettles.md',
                //                         'B6U7_How_to_Get_the_Poor_off_Our_Conscience.md',
                //                         'B6U9_The_Bluest_Eye.md'
                //                     ]
                //                 },
                //                 {
                //                     text: 'Buch 6 Texte',
                //                     children: [
                //                         'B6U4_Nettles_(fulltext).md',
                //                         'B6U7_How_to_Get_the_Poor_off_Our_Conscience_(fulltext).md',
                //                         'B6U9_The_Bluest_Eye_(fulltext).md'
                //                     ]
                //                 },
                //             ]
                //         }
                //     ]
                // }

            },
        },
    }),
})