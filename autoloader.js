module.exports = function(app) {
  const glob = require('glob'),
        config = require('config/autoloader')

  config.loadPaths.forEach(function(path) {
    glob(path, function(err, matches) {
      if (!err && matches && matches.length) {
        matches.forEach(function(filename) {
          require(filename)(app)
        })
      }
    })
  })
}
