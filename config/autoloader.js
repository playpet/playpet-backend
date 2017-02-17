let path = require('path')

module.exports = {
  loadPaths: [
    path.resolve('./src/controllers/**/*.js'),
    path.resolve('./src/lib/**/*.js')
  ]
}
