const glob = require('glob'),
  bc = require('better-console')

class Autoloader {
  constructor() {
    this.loaded = []
  }

	loadFile(filename, ...args) {
    bc.log('requiring', filename)
		let fn = require(filename)
		if (typeof fn === 'function') {
			fn(...args)
		}
	}

	loadDir(dir, cb) {
		glob(dir, (err, matches) => {
			if (!err && matches && matches.length) {
				matches.forEach(cb)
			}
		})
	}

	autoload(globArr, ...inject) {
		globArr.forEach((dir) => {
			this.loadDir(dir, filename => {
        this.loadFile(filename, ...inject)
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
