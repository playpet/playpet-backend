const path = require('path')
let config = {
  prependFiles: [
    './src/init/access-log.js',
  ],
	prependPaths: [
		'./src/init/**/*.js',
		'./src/controllers/**/*.js',
	],
  appendFiles: [
    './src/init/error-handling.js',
  ],
  appendPaths: [],
}

for (key in config) {
  config[key] = config[key].map(f => path.resolve(f))
}

module.exports = config
