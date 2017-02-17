module.exports = function (app) {
	const glob = require('glob'),
		config = require('config/autoloader')
	let loaded = []

	config.loadFiles.forEach(function (filename) {
		if (loaded.indexOf(filename) < 0) {
			require(filename)(app)
			loaded.push(filename)
		}
	})

	config.loadPaths.forEach(function (path) {
		glob(path, function (err, matches) {
			if (!err && matches && matches.length) {
				matches.forEach(function (filename) {
					if (loaded.indexOf(filename) < 0) {
						require(filename)(app)
					}
				})
			}
		})
	})
}
