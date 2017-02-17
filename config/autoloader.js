let path = require('path')

module.exports = {
  loadFiles: [
    path.resolve('./src/lib/passport.js')
  ],
	loadPaths: [
		path.resolve('./src/lib/**/*.js'),
		path.resolve('./src/controllers/**/*.js'),
	]
}
