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
        locales: {
            '/': {
                selectLanguageName: '简体中文',
                selectLanguageText: '语言',
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