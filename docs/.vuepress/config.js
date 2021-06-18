const settings = require('../settings.js')
const { apiMdArr } = settings
module.exports = {
	base: process.env.NODE_ENV === 'development' ? '/' : './',
	title: 'OP管理系统接口文档',
	description: 'OP管理系统前后端对接文档',
	themeConfig: {
    searchMaxSuggestions: 10,
		sidebarDepth: 1, // 将同时提取markdown中h2 标题，显示在侧边栏上。
		lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
		nav: [ // 导航栏配置
			{ text: 'API', link: '/API/' },
		],
		sidebar: { // 侧边栏配置
			'/API/': apiMdArr
		}
  },
	markdown: {
		lineNumbers: true // 代码块显示行号
	},
	plugins: ['@vuepress/back-to-top', '@vuepress/nprogress']
}