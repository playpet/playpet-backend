let path = require('path')

module.exports = {
	loadPaths: [
		path.resolve('./src/lib/**/*.js'),
		path.resolve('./src/controllers/**/*.js'),
	]
}
