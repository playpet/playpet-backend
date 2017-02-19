const path = require('path')
let config = {
  loadPaths: [
    './src/init/logger.js',
    './src/init/db.js',
    './src/models/**/*.js',
		'./src/init/**/*.js',
    './src/init/error-handling.js',
    './src/controllers/**/*.js',
  ],
}

for (key in config) {
  config[key] = config[key].map(f => path.resolve(f))
}

module.exports = config
