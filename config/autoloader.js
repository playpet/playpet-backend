const path = require('path')
let config = {
  prependFiles: [
    './src/init/access-log.js',
    './src/init/db.js',
  ],
	prependPaths: [
		'./src/init/**/*.js',
	],
  appendFiles: [
    './src/init/error-handling.js',
  ],
  appendPaths: [
    './src/mdoels/**/*.js',
    './src/controllers/**/*.js',
  ],
}

for (key in config) {
  config[key] = config[key].map(f => path.resolve(f))
}

module.exports = config
