const glob = require('glob')

class Autoloader {
  constructor() {
    this.loaded = []
  }

	loadFile(filename, ...args) {
		let fn = require(filename)
		if (typeof fn === 'function') {
			fn(...args)
		}
	}

	loadDir(dir, cb) {
		glob(dir, function (err, matches) {
			if (!err && matches && matches.length) {
				matches.forEach(cb)
			}
		})
	}

	autoload(app, globArr) {
		globArr.forEach((dir) => {
			this.loadDir(dir, filename => {
        this.loadFile(filename, app)
      })
		})
    return true
	}

	_loadFile(filename) {
		if (this.loaded.indexOf(filename) < 0) {
			this.loadFile(filename)
			this.loaded.push(filename)
		}
	}
}

module.exports = new Autoloader()
