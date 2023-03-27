import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import markdownItDeflist from 'markdown-it-deflist';

export default defineUserConfig({
    markdown: {
        typographer: true,
        quotes: '„“‚‘'
    },
    extendsMarkdown: (md) => {
        md.use(markdownItDeflist)
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
                selectLanguageName: '简体中文',
                selectLanguageText: '语言',
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
                                    text: '课本6',
                                    children: ['B6U4_Nettles.md','B6U6_The_Bluest_Eye.md']
                                }
                            ]
                        }
                    ]
                }
            },
        },
    }),
})