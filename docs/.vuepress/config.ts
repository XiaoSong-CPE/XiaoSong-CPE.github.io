import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
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
                notFound:['找不到网页'],
                backToHome:'返回主页',
            },
            '/en/': {
                selectLanguageName: 'English',
                selectLanguageText: 'Languages',
            },
            '/de/': {
                selectLanguageName: 'Deutsch',
                selectLanguageText: 'Sprache',
            },
        },
    }),
})