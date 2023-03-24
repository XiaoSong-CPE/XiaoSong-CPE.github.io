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
        '/en/': {
            lang: 'en',
            title: `Karsten's Blog`,
            description: 'Vue-powered Static Site Generator',
        },
        '/de/': {
            lang: 'de',
            title: `Karstens Blog`,
            description: 'Vue-gesteuerter Generator für statische Sites',
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
            '/en/': {
                selectLanguageName: 'English',
                selectLanguageText: 'Languages',
                navbar: [
                    {
                        text: 'My Dairy',
                        link: '/en/dairy/',
                    }, {
                        text: 'German Learning',
                        link: '/en/deutsch/',
                    },
                ],
                sidebar: {
                    '/dairy/': [
                        {
                            text: 'My Dairy',
                            children: [],
                        },
                    ],
                    '/deutsch/': [
                        {
                            text: 'German Learning',
                            children: ['/en/deutsch/Einheit 1.md', '/en/deutsch/Einheit 2.md'],
                        },
                    ],
                },
            },
            '/de/': {
                selectLanguageName: 'Deutsch',
                selectLanguageText: 'Sprache',
                navbar: [
                    {
                        text: 'Mein Tagebuch',
                        link: '/de/dairy/',
                    }, {
                        text: 'Deutsch Lernen',
                        link: '/de/deutsch/',
                    },
                ],
                sidebar: {
                    '/de/dairy/': [
                        {
                            text: 'Mein Tagebuch',
                            children: [],
                        },
                    ],
                    '/de/deutsch/': [
                        {
                            text: 'Deutsch Lernen',
                            children: ['/de/deutsch/Einheit 1.md', '/de/deutsch/Einheit 2.md'],
                        },
                    ],
                },
            },
        },
    }),
})