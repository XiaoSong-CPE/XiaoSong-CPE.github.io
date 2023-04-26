import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import markdownItDeflist from 'markdown-it-deflist';
import markdownItFootnote from 'markdown-it-footnote';
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
    plugins: [
        mdEnhancePlugin({
            // 启用 mermaid
            mermaid: true,
            echarts: true,
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
    },
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh',
            title: '康康笔记',
            description: 'Vue 驱动的静态网站生成器',
        },
    },
    theme: defaultTheme({
        repo: 'XiaoSong-CPE/XiaoSong-CPE.github.io',
        docsBranch: 'main',
        docsDir: 'docs',
        locales: {
            '/': {
                lastUpdatedText: '上次更新',
                contributorsText: '贡献者',
                notFound: ['找不到网页'],
                backToHome: '返回主页',
                navbar: [
                    {
                        text: '我的日记',
                        link: '/dairy/',
                    }, {
                        text: '德语学习',
                        link: '/deutsch/',
                    },
                ],
                sidebar: {
                    '/english/': [
                        {
                            text: '现代英语',
                            children: [
                                {
                                    text: 'Book 6 Notes',
                                    children: [
                                        'B6U4_Nettles.md',
                                        'B6U7_How_to_Get_the_Poor_off_Our_Conscience.md',
                                        'B6U9_The_Bluest_Eye.md'
                                    ]
                                },
                                {
                                    text: 'Book 6 Texts',
                                    children: [
                                        'B6U4_Nettles_(fulltext).md',
                                        'B6U7_How_to_Get_the_Poor_off_Our_Conscience_(fulltext).md',
                                        'B6U9_The_Bluest_Eye_(fulltext).md'
                                    ]
                                },
                            ]
                        }
                    ]
                }
            },
        },
    }),
})