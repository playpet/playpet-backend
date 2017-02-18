module.exports = function (app) {
	const glob = require('glob'),
		config = require('config/autoloader')

	let loaded = []

	function loadFile(filename) {
		if (loaded.indexOf(filename) < 0) {
			loaded.push(filename)
			let fn = require(filename)
			if (typeof fn === 'function') {
				fn(app)
			}
		}
	}

	function loadDir(dir, cb) {
		glob(dir, function (err, matches) {
			if (!err && matches && matches.length) {
				matches.forEach(cb)
			}
		})
	}

	config.prependFiles.forEach(loadFile)
	config.prependPaths.forEach(function (dir) {
		loadDir(dir, loadFile)
	})
	config.appendFiles.forEach(loadFile)
	config.appendPaths.forEach(function (dir) {
		loadDir(dir, loadFile)
	})
}
