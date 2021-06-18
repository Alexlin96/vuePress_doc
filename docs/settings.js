var fs = require('fs')
const files = fs.readdirSync('./docs/API')
const apiMdArr = files.filter(f => /\.md$/.test(f) && !f.includes('README'))
module.exports = {
	/**
	 * API文档名列表
	 */
	 apiMdArr
}
